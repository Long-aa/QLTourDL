from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db
from app.models.customer import Customer as CustomerModel
from app.schemas.customer import Customer, CustomerCreate, CustomerUpdate, CustomerPagination
from app.core.security import get_password_hash

from app.models.user import User as UserModel

router = APIRouter()


@router.get("/", response_model=CustomerPagination)
async def get_customers(
    page: int = 1,
    size: int = 10,
    q: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(CustomerModel).join(UserModel)
    
    if q:
        search = f"%{q}%"
        query = query.filter(
            (UserModel.full_name.ilike(search)) | 
            (UserModel.email.ilike(search)) | 
            (CustomerModel.phone.ilike(search))
        )

    total = query.count()
    customers = query.order_by(CustomerModel.id.desc()).offset((page - 1) * size).limit(size).all()
    
    pages = (total + size - 1) // size
    
    return {
        "items": customers,
        "total": total,
        "page": page,
        "size": size,
        "pages": pages
    }


@router.get("/{customer_id}", response_model=Customer)
async def get_customer(customer_id: int, db: Session = Depends(get_db)):
    customer = db.query(CustomerModel).filter(CustomerModel.id == customer_id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


@router.post("/", response_model=Customer)
async def create_customer(customer_in: CustomerCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    user = db.query(UserModel).filter(UserModel.email == customer_in.email).first()
    if not user:
        # Create new user
        user = UserModel(
            email=customer_in.email,
            full_name=customer_in.full_name,
            hashed_password=get_password_hash(customer_in.password or "123456"),
            role="user"
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    
    # Create customer
    customer = CustomerModel(
        user_id=user.id,
        phone=customer_in.phone,
        address=customer_in.address
    )
    db.add(customer)
    db.commit()
    db.refresh(customer)
    return customer


@router.put("/{customer_id}", response_model=Customer)
async def update_customer(customer_id: int, customer_in: CustomerUpdate, db: Session = Depends(get_db)):
    customer = db.query(CustomerModel).filter(CustomerModel.id == customer_id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    
    update_data = customer_in.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(customer, key, value)
    
    db.add(customer)
    db.commit()
    db.refresh(customer)
    return customer


@router.delete("/{customer_id}")
async def delete_customer(customer_id: int, db: Session = Depends(get_db)):
    customer = db.query(CustomerModel).filter(CustomerModel.id == customer_id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    db.delete(customer)
    db.commit()
    return {"message": f"Customer {customer_id} deleted"}
