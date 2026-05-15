from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.vehicle import Vehicle as VehicleModel
from app.models.tour_guide import TourGuide as TourGuideModel
from app.schemas.guide_vehicle import Vehicle, VehicleCreate, VehicleUpdate, TourGuide, TourGuideCreate, TourGuideUpdate

from app.models.employee import Employee as EmployeeModel
from app.models.user import User as UserModel
from app.models.supplier import Supplier as SupplierModel

router = APIRouter()

# Vehicles
@router.get("/vehicles", response_model=List[Vehicle])
async def get_vehicles(db: Session = Depends(get_db)):
    return db.query(VehicleModel).all()

# Guides
@router.get("/guides", response_model=List[TourGuide])
async def get_guides(db: Session = Depends(get_db)):
    return db.query(TourGuideModel).all()

@router.post("/guides", response_model=TourGuide)
async def create_guide(guide_in: TourGuideCreate, db: Session = Depends(get_db)):
    guide = TourGuideModel(**guide_in.model_dump())
    db.add(guide)
    db.commit()
    db.refresh(guide)
    return guide
