from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Define User schemas first
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    is_active: Optional[bool] = True
    role: Optional[str] = "user"

class User(UserBase):
    id: int
    created_at: datetime
    # updated_at: datetime # Remove if not in model

    class Config:
        from_attributes = True

# Define Customer schemas
class CustomerBase(BaseModel):
    user_id: Optional[int] = None
    phone: Optional[str] = None
    address: Optional[str] = None

class CustomerCreate(CustomerBase):
    full_name: str
    email: EmailStr
    password: Optional[str] = "123456" # Default password for new customers

class CustomerUpdate(CustomerBase):
    pass

class Customer(CustomerBase):
    id: int
    created_at: datetime
    user: Optional[User] = None

    class Config:
        from_attributes = True

class CustomerPagination(BaseModel):
    items: list[Customer]
    total: int
    page: int
    size: int
    pages: int
