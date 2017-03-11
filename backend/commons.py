"""Consists of commons functions."""
from config import *
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


def create_configuration():
    """Creating default configration for app."""
    app_config = {}
    app_config['GOOGLE_OAUTH_REDIRECT_URI'] = PROTOCAL+HOSTNAME+CALLBACK_URI
    app_config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
    app_config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS
    return app_config

db = SQLAlchemy()
migrate = Migrate()
