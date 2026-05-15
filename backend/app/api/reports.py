from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import Optional
from datetime import date
from app.core.database import get_db
from app.models.order import Order as OrderModel
from app.models.tour import Tour as TourModel
from app.models.customer import Customer as CustomerModel

router = APIRouter()


@router.get("/revenue")
async def get_revenue_report(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    db: Session = Depends(get_db)
):
    query = db.query(func.sum(OrderModel.total_price))
    if start_date:
        query = query.filter(OrderModel.created_at >= start_date)
    if end_date:
        query = query.filter(OrderModel.created_at <= end_date)
    
    total_revenue = query.scalar() or 0
    return {"total_revenue": total_revenue}


@router.get("/dashboard-stats")
async def get_dashboard_stats(db: Session = Depends(get_db)):
    total_tours = db.query(TourModel).count()
    total_customers = db.query(CustomerModel).count()
    total_orders = db.query(OrderModel).count()
    total_revenue = db.query(func.sum(OrderModel.total_price)).scalar() or 0
    
    return {
        "total_tours": total_tours,
        "total_customers": total_customers,
        "total_orders": total_orders,
        "total_revenue": total_revenue
    }


@router.get("/tours")
async def get_tour_report(
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    db: Session = Depends(get_db)
):
    # Count tours by status
    stats = db.query(TourModel.status, func.count(TourModel.id)).group_by(TourModel.status).all()
    return {status: count for status, count in stats}


@router.get("/customers")
async def get_customer_report(
    db: Session = Depends(get_db)
):
    total_customers = db.query(CustomerModel).count()
    return {"total_customers": total_customers}
