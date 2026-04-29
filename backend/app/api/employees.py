from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db

router = APIRouter()


@router.get("/")
async def get_employees(
    skip: int = 0,
    limit: int = 100,
    department: Optional[str] = None,
    db: Session = Depends(get_db)
):
    return {"message": "List of employees", "skip": skip, "limit": limit}


@router.get("/{employee_id}")
async def get_employee(employee_id: int, db: Session = Depends(get_db)):
    return {"message": f"Employee {employee_id}"}


@router.post("/")
async def create_employee(employee_data: dict, db: Session = Depends(get_db)):
    return {"message": "Employee created"}


@router.put("/{employee_id}")
async def update_employee(employee_id: int, employee_data: dict, db: Session = Depends(get_db)):
    return {"message": f"Employee {employee_id} updated"}


@router.delete("/{employee_id}")
async def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    return {"message": f"Employee {employee_id} deleted"}
