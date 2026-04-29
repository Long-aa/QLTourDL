from sqlalchemy import Column, Integer, String, Text, Numeric, Date, DateTime, func
from app.core.database import Base


class Tour(Base):
    __tablename__ = "tours"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(Text)
    destination = Column(String(255))
    duration = Column(Integer)
    price = Column(Numeric(10, 2))
    max_participants = Column(Integer)
    start_date = Column(Date)
    end_date = Column(Date)
    status = Column(String(50), default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
