from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def sayHi():
    return {"message": "Machine Learning provider"}