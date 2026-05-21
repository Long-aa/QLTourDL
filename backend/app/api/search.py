from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List
from app.core.database import get_db
from app.schemas.search import GlobalSearchResponse, SearchResultItem

from app.models.tour import Tour
from app.models.customer import Customer
from app.models.user import User
from app.models.supplier import Supplier
from app.models.order import Order
from app.models.employee import Employee

router = APIRouter()

@router.get("", response_model=GlobalSearchResponse)
async def global_search(q: str = "", db: Session = Depends(get_db)):
    results = []
    if not q or len(q.strip()) < 2:
        return GlobalSearchResponse(results=[])

    search_term = f"%{q.strip()}%"

    # 1. Search Tours
    tours = db.query(Tour).filter(
        or_(
            Tour.name.ilike(search_term),
            Tour.destination.ilike(search_term)
        )
    ).limit(5).all()
    for t in tours:
        results.append(SearchResultItem(
            id=t.id,
            title=t.name,
            subtitle=f"Tour - {t.destination}",
            type="tour",
            link=f"/admin/tours/{t.id}", # Or whatever the tour edit link is
            image_url=t.image_url
        ))

    # 2. Search Customers
    customers = db.query(Customer).join(User).filter(
        or_(
            User.full_name.ilike(search_term),
            User.email.ilike(search_term),
            Customer.phone.ilike(search_term)
        )
    ).limit(5).all()
    for c in customers:
        results.append(SearchResultItem(
            id=c.id,
            title=c.user.full_name or c.user.email,
            subtitle=f"Khách hàng - {c.user.email} | {c.phone or ''}",
            type="customer",
            link=f"/admin/customers/{c.id}",
            image_url=c.user.avatar_url
        ))

    # 3. Search Suppliers
    suppliers = db.query(Supplier).filter(
        or_(
            Supplier.name.ilike(search_term),
            Supplier.email.ilike(search_term),
            Supplier.contact_person.ilike(search_term)
        )
    ).limit(5).all()
    for s in suppliers:
        results.append(SearchResultItem(
            id=s.id,
            title=s.name,
            subtitle=f"Nhà cung cấp - Liên hệ: {s.contact_person or s.email}",
            type="supplier",
            link=f"/admin/suppliers/{s.id}",
            image_url=s.image_url
        ))

    # 4. Search Employees
    employees = db.query(Employee).join(User).filter(
        or_(
            User.full_name.ilike(search_term),
            User.email.ilike(search_term),
            Employee.phone.ilike(search_term)
        )
    ).limit(3).all()
    for e in employees:
        results.append(SearchResultItem(
            id=e.id,
            title=e.user.full_name or e.user.email,
            subtitle=f"Nhân sự - {e.position} | {e.department}",
            type="employee",
            link=f"/admin/employees/{e.id}",
            image_url=e.user.avatar_url or e.image_url
        ))

    # 5. Search Orders
    if q.strip().isdigit():
        order_id = int(q.strip())
        orders = db.query(Order).filter(Order.id == order_id).limit(3).all()
        for o in orders:
            results.append(SearchResultItem(
                id=o.id,
                title=f"Đơn hàng #{o.id}",
                subtitle=f"Đơn hàng - {o.status}",
                type="order",
                link=f"/admin/orders/{o.id}",
                image_url=None
            ))

    return GlobalSearchResponse(results=results)
