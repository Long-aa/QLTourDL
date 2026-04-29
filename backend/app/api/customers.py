from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db

router = APIRouter()


@router.get("/")
async def get_customers(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    return {"message": "List of customers", "skip": skip, "limit": limit}


@router.get("/{customer_id}")
async def get_customer(customer_id: int, db: Session = Depends(get_db)):
    return {"message": f"Customer {customer_id}"}


@router.post("/")
async def create_customer(customer_data: dict, db: Session = Depends(get_db)):
    return {"message": "Customer created"}


@router.put("/{customer_id}")
async def update_customer(customer_id: int, customer_data: dict, db: Session = Depends(get_db)):
    return {"message": f"Customer {customer_id} updated"}


@router.delete("/{customer_id}")
async def delete_customer(customer_id: int, db: Session = Depends(get_db)):
    return {"message": f"Customer {customer_id} deleted"}
