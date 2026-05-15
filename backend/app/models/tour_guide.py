from sqlalchemy import Column, Integer, String, Numeric, ForeignKey, ARRAY, Text, CheckConstraint
from app.core.database import Base


class TourGuide(Base):
    __tablename__ = "tour_guides"
    
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id", ondelete="CASCADE"))
    license_number = Column(String(100))
    languages = Column(ARRAY(Text))
    rating = Column(Numeric(2, 1), default=5.0)
    
    __table_args__ = (
        CheckConstraint('rating >= 0 AND rating <= 5', name='rating_check'),
    )
