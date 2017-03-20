# Download Base Container Python from hub.docker.com
FROM python:2.7-alpine
# Create base directory
RUN mkdir /backend
COPY . /backend
# Install depended Files
RUN pip install -U pip
RUN pip install -r /backend/requirements.txt
# Set Working directory for Docker
WORKDIR /backend
RUN python /backend/app.py db upgrade
