from sqlalchemy import Column, Integer, String, Text, Numeric, Date, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base


class Tour(Base):
    __tablename__ = "tours"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(Text)
    destination = Column(String(255))
    duration = Column(String(100))
    price = Column(Numeric(10, 2))
    max_participants = Column(Integer)
    start_date = Column(Date)
    end_date = Column(Date)
    status = Column(String(50), default="active")
    category = Column(String(100), default="Nghỉ dưỡng")
    image_url = Column(String(500))
    image_size = Column(Integer)
    
    # New relationships
    guide_id = Column(Integer, ForeignKey("tour_guides.id"))
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    supplier_id = Column(Integer, ForeignKey("suppliers.id"))
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    schedules = relationship("TourSchedule", back_populates="tour", cascade="all, delete-orphan")
    guide = relationship("TourGuide")
    vehicle = relationship("Vehicle")
    supplier = relationship("Supplier")


class TourSchedule(Base):
    __tablename__ = "tour_schedules"
    
    id = Column(Integer, primary_key=True, index=True)
    tour_id = Column(Integer, ForeignKey("tours.id"))
    day_number = Column(Integer)
    title = Column(String(255))
    content = Column(Text)
    
    tour = relationship("Tour", back_populates="schedules")
