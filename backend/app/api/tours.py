from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db
from app.models.tour import Tour as TourModel, TourSchedule as TourScheduleModel
from app.schemas.tour import Tour, TourCreate, TourUpdate

router = APIRouter()


@router.get("/", response_model=List[Tour])
async def get_tours(
    skip: int = 0,
    limit: int = 100,
    destination: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(TourModel)
    if destination:
        query = query.filter(TourModel.destination.ilike(f"%{destination}%"))
    tours = query.offset(skip).limit(limit).all()
    return tours


@router.get("/{tour_id}", response_model=Tour)
async def get_tour(tour_id: int, db: Session = Depends(get_db)):
    tour = db.query(TourModel).filter(TourModel.id == tour_id).first()
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    return tour


@router.post("/", response_model=Tour)
async def create_tour(tour_in: TourCreate, db: Session = Depends(get_db)):
    tour_data = tour_in.model_dump(exclude={"schedules"})
    schedules_data = tour_in.schedules or []
    
    tour = TourModel(**tour_data)
    db.add(tour)
    db.commit()
    db.refresh(tour)
    
    # Create schedules
    for sch in schedules_data:
        db_sch = TourScheduleModel(**sch.model_dump(), tour_id=tour.id)
        db.add(db_sch)
    
    db.commit()
    db.refresh(tour)
    return tour


@router.put("/{tour_id}", response_model=Tour)
async def update_tour(tour_id: int, tour_in: TourUpdate, db: Session = Depends(get_db)):
    tour = db.query(TourModel).filter(TourModel.id == tour_id).first()
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    update_data = tour_in.model_dump(exclude={"schedules"}, exclude_unset=True)
    for key, value in update_data.items():
        setattr(tour, key, value)
    
    # Update schedules if provided
    if tour_in.schedules is not None:
        # Simple approach: delete existing and recreate
        db.query(TourScheduleModel).filter(TourScheduleModel.tour_id == tour_id).delete()
        for sch in tour_in.schedules:
            # Exclude id to avoid conflicts when recreating
            sch_data = sch.model_dump(exclude={"id"})
            db_sch = TourScheduleModel(**sch_data, tour_id=tour.id)
            db.add(db_sch)
    
    db.add(tour)
    db.commit()
    db.refresh(tour)
    return tour


@router.delete("/{tour_id}")
async def delete_tour(tour_id: int, db: Session = Depends(get_db)):
    tour = db.query(TourModel).filter(TourModel.id == tour_id).first()
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    db.delete(tour)
    db.commit()
    return {"message": f"Tour {tour_id} deleted"}
