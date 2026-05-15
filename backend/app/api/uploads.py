from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.storage import storage_service
from typing import List

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        content = await file.read()
        res = await storage_service.upload_file(
            content, 
            file.filename, 
            file.content_type
        )
        return res
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/upload-multiple")
async def upload_multiple_files(files: List[UploadFile] = File(...)):
    results = []
    for file in files:
        try:
            content = await file.read()
            res = await storage_service.upload_file(
                content, 
                file.filename, 
                file.content_type
            )
            results.append(res)
        except Exception as e:
            continue
    return results
