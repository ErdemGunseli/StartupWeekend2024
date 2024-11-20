from fastapi import APIRouter, status as st, Form
import uuid  # Import the uuid module
from services import assistant_service

router = APIRouter(prefix="/assistant", tags=["Assistant"])

@router.post("/fast_completion", status_code=st.HTTP_200_OK)
async def fast_completion(text: str = Form(...)):
    # Call the service to get the completion
    completion_text = assistant_service.fast_completion(text)
    # Generate a UUID
    unique_id = str(uuid.uuid4())
    return {"id": unique_id, "type": "assistant", "text": completion_text}




