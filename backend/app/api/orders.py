from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db

router = APIRouter()


@router.get("/")
async def get_orders(
    skip: int = 0,
    limit: int = 100,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    return {"message": "List of orders", "skip": skip, "limit": limit}


@router.get("/{order_id}")
async def get_order(order_id: int, db: Session = Depends(get_db)):
    return {"message": f"Order {order_id}"}


@router.post("/")
async def create_order(order_data: dict, db: Session = Depends(get_db)):
    return {"message": "Order created"}


@router.put("/{order_id}")
async def update_order(order_id: int, order_data: dict, db: Session = Depends(get_db)):
    return {"message": f"Order {order_id} updated"}


@router.delete("/{order_id}")
async def delete_order(order_id: int, db: Session = Depends(get_db)):
    return {"message": f"Order {order_id} deleted"}
