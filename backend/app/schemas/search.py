from pydantic import BaseModel
from typing import List, Optional

class SearchResultItem(BaseModel):
    id: int
    title: str
    subtitle: Optional[str] = None
    type: str
    link: str
    image_url: Optional[str] = None

class GlobalSearchResponse(BaseModel):
    results: List[SearchResultItem]
