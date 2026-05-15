from sqlalchemy import Column, Integer, String, Text, DateTime, func
from app.core.database import Base


class Supplier(Base):
    __tablename__ = "suppliers"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    contact_person = Column(String(255))
    phone = Column(String(20))
    email = Column(String(255))
    address = Column(Text)
    service_type = Column(String(100))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
