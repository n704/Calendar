import datetime
from commons import db

class Event(db.Model):
    __tablename__ = "event"
    id = db.Column(db.Integer, primary_key=True)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    location = db.Column(db.String(300))
    description = db.Column(db.String(5000), nullable=False)

    def __init__(self):
        self.start_time = datetime.datetime.utcnow()
