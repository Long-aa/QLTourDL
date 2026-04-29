from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db

router = APIRouter()


@router.get("/")
async def get_suppliers(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    return {"message": "List of suppliers", "skip": skip, "limit": limit}


@router.get("/{supplier_id}")
async def get_supplier(supplier_id: int, db: Session = Depends(get_db)):
    return {"message": f"Supplier {supplier_id}"}


@router.post("/")
async def create_supplier(supplier_data: dict, db: Session = Depends(get_db)):
    return {"message": "Supplier created"}


@router.put("/{supplier_id}")
async def update_supplier(supplier_id: int, supplier_data: dict, db: Session = Depends(get_db)):
    return {"message": f"Supplier {supplier_id} updated"}


@router.delete("/{supplier_id}")
async def delete_supplier(supplier_id: int, db: Session = Depends(get_db)):
    return {"message": f"Supplier {supplier_id} deleted"}
