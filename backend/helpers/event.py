from marshmallow import Schema, fields, validate, validates, ValidationError,\
        validates_schema
from models.event import Event
class EventSchema(Schema):
    """Schema for Event Input."""
    description = fields.String(validate=validate.Length(1, 5000),
                           required=True)
    location = fields.String(validate=validate.Length(1, 300),
                                required=True)
    start_time = fields.DateTime(required=True)
    end_time = fields.DateTime(required=True)
    title = fields.String(required=True, validate=validate.Length(1,300))
    sync = fields.Boolean(required=False)
    id = fields.Integer(required=False)

    @validates_schema(pass_original=True)
    def check_time(self,data,data_orginal):
        """Checking if end time is less than start time."""
        if data['start_time'] > data['end_time']:
            raise ValidationError('event end time should be greater than start time.')

    @validates_schema
    def checkSync(self, data):
        """Check if cal event exists."""
        print data,"ASdaskjdgkajsg"
        if "sync" in data and data["sync"] and "id" not in data:
             event_count = Event.query.filter(Event.title == data["title"])\
                        .count()
             if event_count:
                raise ValidationError('Exists')
