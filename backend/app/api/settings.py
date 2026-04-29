from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db

router = APIRouter()


@router.get("/")
async def get_settings(db: Session = Depends(get_db)):
    return {"message": "System settings"}


@router.put("/")
async def update_settings(settings_data: dict, db: Session = Depends(get_db)):
    return {"message": "Settings updated"}
