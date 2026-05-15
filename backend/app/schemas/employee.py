from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime
from decimal import Decimal

class EmployeeBase(BaseModel):
    user_id: Optional[int] = None
    position: Optional[str] = None
    department: Optional[str] = None
    salary: Optional[Decimal] = None
    hire_date: Optional[date] = None

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(EmployeeBase):
    pass

from app.schemas.customer import User

class Employee(EmployeeBase):
    id: int
    created_at: datetime
    user: Optional[User] = None

    class Config:
        from_attributes = True
