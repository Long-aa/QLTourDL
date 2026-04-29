from sqlalchemy import Column, Integer, ForeignKey, String, Numeric, Date, DateTime, func
from sqlalchemy.orm import relationship
from app.core.database import Base


class Employee(Base):
    __tablename__ = "employees"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    position = Column(String(100))
    department = Column(String(100))
    salary = Column(Numeric(10, 2))
    hire_date = Column(Date)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User")
