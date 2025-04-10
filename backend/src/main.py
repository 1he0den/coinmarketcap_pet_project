from fastapi import FastAPI
from src.router import router as router_cripto
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(router_cripto)

origins = [
    "http://localhost:5174",
    "http://127.0.0.1:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

