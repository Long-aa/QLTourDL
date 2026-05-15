from pydantic import BaseModel, Field
from typing import Optional
from datetime import date, datetime
from decimal import Decimal

class TourBase(BaseModel):
    name: str
    description: Optional[str] = None
    destination: Optional[str] = None
    duration: Optional[int] = None
    price: Optional[Decimal] = None
    max_participants: Optional[int] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    status: Optional[str] = "active"

class TourCreate(TourBase):
    pass

class TourUpdate(TourBase):
    name: Optional[str] = None

class Tour(TourBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
