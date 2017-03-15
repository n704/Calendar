# Calendar
This is calendar App that user can create event and sync with google calendar.

# Archiecture
Application uses MicroServices Archiecture for solution. It consists of 2 services 
* Backend
* Frontend
## Backend
It consist of python flask server running at port 5000.  Services exposes all api needed by the backend to frontend service.
## Frontend
It consist of nodejs server running at port 3000. This service server all the html page. Service is Designed in SPA using ReactJS.


# Database
Sqlite is used as database for the application. Intilize the database:
```
cd /Path/to/backend
python app.py db upgrade
```

# Installation
## Backend
```
cd /Path/to/Calendar/backend
pip install -r requirements.txt
python app.py runserver
```

## Frontend
```
cd /Path/to/Calendar/frontend
npm install
npm start
```
## Docker-Compose
Running application using docker container.

```
cd /Path/to/Calendar
docker-compose up
```
