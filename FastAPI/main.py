from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse

from dotenv import load_dotenv
import uvicorn
import os
import sys

# Loading environment variables and declaring FastAPI instance before local imports
load_dotenv()
app = FastAPI()

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from routers import assistant

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(assistant.router)

@app.get("/", response_class=PlainTextResponse, include_in_schema=False)
async def root():
    return "Welcome to the API! For documentation, please add /docs to this URL."

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)