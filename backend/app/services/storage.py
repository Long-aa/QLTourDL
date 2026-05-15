import boto3
from botocore.config import Config
from app.core.config import settings
import uuid
import os

class StorageService:
    def __init__(self):
        try:
            self.use_b2 = all([
                settings.B2_KEY_ID, 
                settings.B2_APPLICATION_KEY, 
                settings.B2_BUCKET_NAME,
                settings.B2_ENDPOINT_URL
            ])
            
            if self.use_b2:
                self.s3 = boto3.client(
                    's3',
                    endpoint_url=settings.B2_ENDPOINT_URL,
                    aws_access_key_id=settings.B2_KEY_ID,
                    aws_secret_access_key=settings.B2_APPLICATION_KEY,
                    config=Config(signature_version='s3v4'),
                    region_name=settings.B2_REGION_NAME
                )
                self.bucket_name = settings.B2_BUCKET_NAME
                print("StorageService: Using Backblaze B2")
            else:
                print("StorageService: B2 credentials missing, using local storage")
        except Exception as e:
            print(f"StorageService: Failed to init B2: {e}. Falling back to local storage.")
            self.use_b2 = False

        # Ensure local upload directory exists
        self.local_upload_dir = os.path.join("static", "uploads")
        os.makedirs(self.local_upload_dir, exist_ok=True)

    async def upload_file(self, file_content, filename: str, content_type: str = None) -> dict:
        """
        Uploads a file to Backblaze B2 or local storage.
        """
        ext = os.path.splitext(filename)[1]
        unique_filename = f"{uuid.uuid4()}{ext}"
        file_size = len(file_content)

        if self.use_b2:
            try:
                extra_args = {}
                if content_type:
                    extra_args['ContentType'] = content_type

                self.s3.put_object(
                    Bucket=self.bucket_name,
                    Key=unique_filename,
                    Body=file_content,
                    **extra_args
                )
                
                url = f"{settings.B2_ENDPOINT_URL}/{self.bucket_name}/{unique_filename}"
                return {"url": url, "size": file_size}
            except Exception as e:
                print(f"B2 Upload failed: {e}. Falling back to local.")
                # Fallthrough to local storage

        # Local Storage Fallback
        file_path = os.path.join(self.local_upload_dir, unique_filename)
        with open(file_path, "wb") as f:
            f.write(file_content)
        
        # In a real app, this would be your server's public URL
        # For local dev, we assume it's served at /static/uploads/
        url = f"http://localhost:8001/static/uploads/{unique_filename}"
        return {"url": url, "size": file_size}

storage_service = StorageService()
