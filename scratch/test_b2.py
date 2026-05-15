import boto3
from botocore.config import Config
import os
from dotenv import load_dotenv

load_dotenv()

def test_b2():
    B2_KEY_ID = os.getenv("B2_KEY_ID")
    B2_APPLICATION_KEY = os.getenv("B2_APPLICATION_KEY")
    B2_BUCKET_NAME = os.getenv("B2_BUCKET_NAME")
    B2_ENDPOINT_URL = os.getenv("B2_ENDPOINT_URL")
    B2_REGION_NAME = os.getenv("B2_REGION_NAME")

    print(f"Testing B2 with:")
    print(f"Key ID: '{B2_KEY_ID}' (len={len(B2_KEY_ID) if B2_KEY_ID else 0})")
    print(f"App Key: '{B2_APPLICATION_KEY[:5]}...' (len={len(B2_APPLICATION_KEY) if B2_APPLICATION_KEY else 0})")
    print(f"Bucket: {B2_BUCKET_NAME}")
    print(f"Endpoint: {B2_ENDPOINT_URL}")

    try:
        s3 = boto3.client(
            's3',
            endpoint_url=B2_ENDPOINT_URL,
            aws_access_key_id=B2_APPLICATION_KEY,  # Swapped
            aws_secret_access_key=B2_KEY_ID,       # Swapped
            config=Config(signature_version='s3v4'),
            region_name=B2_REGION_NAME
        )
        
        print("Listing buckets...")
        response = s3.list_buckets()
        print("Buckets found:", [b['Name'] for b in response.get('Buckets', [])])
        
        if B2_BUCKET_NAME not in [b['Name'] for b in response.get('Buckets', [])]:
            print(f"Warning: Bucket {B2_BUCKET_NAME} not found!")
            
    except Exception as e:
        print(f"Error connecting to B2: {e}")

if __name__ == "__main__":
    test_b2()
