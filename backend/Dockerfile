FROM python:2.7-alpine
RUN mkdir /backend
COPY . /backend
RUN pip install -U pip
RUN pip install -r /backend/requirements.txt
WORKDIR /backend
RUN python /backend/app.py db upgrade
