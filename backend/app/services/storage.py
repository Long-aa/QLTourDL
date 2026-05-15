import boto3
from botocore.config import Config
from app.core.config import settings
import uuid
import os

class StorageService:
    def __init__(self):
        self.s3 = boto3.client(
            's3',
            endpoint_url=settings.B2_ENDPOINT_URL,
            aws_access_key_id=settings.B2_KEY_ID,
            aws_secret_access_key=settings.B2_APPLICATION_KEY,
            config=Config(signature_version='s3v4'),
            region_name=settings.B2_REGION_NAME
        )
        self.bucket_name = settings.B2_BUCKET_NAME

    async def upload_file(self, file_content, filename: str, content_type: str = None) -> str:
        """
        Uploads a file to Backblaze B2 and returns the public URL.
        """
        # Generate a unique filename to avoid collisions
        ext = os.path.splitext(filename)[1]
        unique_filename = f"{uuid.uuid4()}{ext}"
        
        extra_args = {}
        if content_type:
            extra_args['ContentType'] = content_type

        # Upload the file
        self.s3.put_object(
            Bucket=self.bucket_name,
            Key=unique_filename,
            Body=file_content,
            **extra_args
        )

        # Construct the public URL
        # Format for B2 S3 API: https://<bucket>.<endpoint>/<key>
        # Or: https://f000.backblazeb2.com/file/<bucket>/<key> (Native B2)
        # Using S3 compatible URL:
        endpoint_clean = settings.B2_ENDPOINT_URL.replace('https://', '')
        url = f"https://{self.bucket_name}.{endpoint_clean}/{unique_filename}"
        
        return url

storage_service = StorageService()
