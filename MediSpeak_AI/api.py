
import base64
import io

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image

from ai_reader import read_medicines_image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScanRequest(BaseModel):
    image: str
    language: str = "English"


@app.post("/api/identify-medicine")
async def identify_medicine_endpoint(req: ScanRequest):
    try:
        return read_medicines_image(req.image, req.language)

    except Exception as exc:
        import traceback
        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(exc)
        )