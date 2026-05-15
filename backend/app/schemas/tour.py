from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date, datetime
from decimal import Decimal

class TourScheduleBase(BaseModel):
    day_number: int
    title: str
    content: str

class TourScheduleCreate(TourScheduleBase):
    pass

class TourSchedule(TourScheduleBase):
    id: int
    tour_id: int

    class Config:
        from_attributes = True

class TourBase(BaseModel):
    name: str
    description: Optional[str] = None
    destination: Optional[str] = None
    duration: Optional[str] = None
    price: Optional[Decimal] = None
    max_participants: Optional[int] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    status: Optional[str] = "active"
    image_url: Optional[str] = None
    image_size: Optional[int] = None
    guide_id: Optional[int] = None
    vehicle_id: Optional[int] = None
    supplier_id: Optional[int] = None

class TourCreate(TourBase):
    schedules: Optional[List[TourScheduleCreate]] = []

class TourUpdate(TourBase):
    name: Optional[str] = None
    schedules: Optional[List[TourScheduleCreate]] = None

class Tour(TourBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    schedules: List[TourSchedule] = []

    class Config:
        from_attributes = True
