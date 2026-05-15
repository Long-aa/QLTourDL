from pydantic_settings import BaseSettings
from typing import List
import json


from urllib.parse import quote_plus

class Settings(BaseSettings):
    PROJECT_NAME: str = "Tour Management System"
    VERSION: str = "1.0.0"
    
    _password = quote_plus("Longdz19082005@")
    DATABASE_URL: str = f"postgresql://postgres:{_password}@127.0.0.1:8000/QLTourDuLich"
    
    SECRET_KEY: str = "your-secret-key-here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    
    # Backblaze B2
    B2_KEY_ID: str = ""
    B2_APPLICATION_KEY: str = ""
    B2_BUCKET_NAME: str = "QLTourDL"
    B2_ENDPOINT_URL: str = "https://s3.eu-central-003.backblazeb2.com"
    B2_REGION_NAME: str = "eu-central-003"
    
    @property
    def cors_origins(self) -> List[str]:
        if isinstance(self.BACKEND_CORS_ORIGINS, str):
            return json.loads(self.BACKEND_CORS_ORIGINS)
        return self.BACKEND_CORS_ORIGINS
    
    NEXT_PUBLIC_API_URL: str = "http://localhost:8001/api/v1"
    
    class Config:
        env_file = ".env"
        case_sensitive = True
        extra = "ignore"


settings = Settings()
