from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db

router = APIRouter()


@router.get("/")
async def get_tours(
    skip: int = 0,
    limit: int = 100,
    destination: Optional[str] = None,
    db: Session = Depends(get_db)
):
    return {"message": "List of tours", "skip": skip, "limit": limit}


@router.get("/{tour_id}")
async def get_tour(tour_id: int, db: Session = Depends(get_db)):
    return {"message": f"Tour {tour_id}"}


@router.post("/")
async def create_tour(tour_data: dict, db: Session = Depends(get_db)):
    return {"message": "Tour created"}


@router.put("/{tour_id}")
async def update_tour(tour_id: int, tour_data: dict, db: Session = Depends(get_db)):
    return {"message": f"Tour {tour_id} updated"}


@router.delete("/{tour_id}")
async def delete_tour(tour_id: int, db: Session = Depends(get_db)):
    return {"message": f"Tour {tour_id} deleted"}
