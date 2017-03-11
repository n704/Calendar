from flask import Flask, request
from flask_migrate import MigrateCommand
from flask_script import Manager
from commons import create_configuration, db, migrate
from views.api.event import event_api

def create_app():
    """Creating app."""
    app = Flask(__name__,static_folder='./static')
    app.config.update(create_configuration())
    app.register_blueprint(event_api, url_prefix="/api/event")
    db.init_app(app)
    migrate.init_app(app, db)
    return app

if __name__ == '__main__':
    app = create_app()
    manager = Manager(app)
    manager.add_command('db', MigrateCommand)
    manager.run()
