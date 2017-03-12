import datetime
from commons import db

class Event(db.Model):
    """Calendar Event and methods."""
    __tablename__ = "event"
    id = db.Column(db.Integer, primary_key=True)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    location = db.Column(db.String(300))
    description = db.Column(db.String(5000), nullable=False)

    def __init__(self):
        self.start_time = datetime.datetime.utcnow()

    def get_by_id(self, id):
        """Get Event if Present"""
        oEvent = Event.query.get(id)
        if oEvent:
            return oEvent, None
        return None, "Event not Present"

    @classmethod
    def create(cls, data):
        """Creating Event."""
        oEvent = cls()
        oEvent.start_time = data["start_time"]
        oEvent.end_time = data["end_time"]
        oEvent.location = data["location"]
        oEvent.description = data["description"]
        db.session.add(oEvent)
        db.session.flush()
        return oEvent

    def delete(self):
        """Delete Event."""
        db.session.delete(self)
        db.session.commit()

    def update(self, data):
        """Updating Event."""
        self.start_time = data["start_time"]
        self.end_time = data["end_time"]
        self.location = data["location"]
        self.description = data["description"]
        db.session.commit()
        return self

    @classmethod
    def get_list(cls,start_time, end_time):
        """
        Return list of all calendar event in a peroid.

        @param start_time
        @param end_time
        """
        return cls.query.filter(cls.start_time > start_time)\
                .filter(cls.end_time < end_time).all()

    def as_dict(self):
        """Convert Event as dict."""
        return {
            "start_time" : self.start_time,
            "end_time" : self.end_time,
            "location" : self.location,
            "description" : self.description,
            "id" : self.id
        }

    @classmethod
    def get_events(cls, time_range):
        """
        Get all event between time_range.

        @param time_range keys present start_time, end_time.
        """
        now = datetime.datetime.utcnow()
        month = (now.month % 12) + 1
        start_time = time_range.get(
            'start_time',
            datetime.datetime(now.year,month,1)
            )
        end_time = time_range.get(
            'end_time',
            datetime.datetime(now.year,month + 1,1)
            )
        lEvent = cls.get_list(start_time, end_time)
        return [ oEvent.as_dict() for oEvent in lEvent ]
