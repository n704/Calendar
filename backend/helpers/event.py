from marshmallow import Schema, fields, validate, validates, ValidationError,\
        validates_schema

class EventSchema(Schema):
    """Schema for Event Input."""
    description = fields.String(validate=validate.Length(1, 5000),
                           required=True)
    location = fields.String(validate=validate.Length(1, 300),
                                required=True)
    start_time = fields.DateTime(required=True)
    end_time = fields.DateTime(required=True)

    @validates_schema(pass_original=True)
    def check_time(self,data,data_orginal):
        """Checking if end time is less than start time."""
        print data,data_orginal
        if data['start_time'] > data['end_time']:
            raise ValidationError('event end time should be greater than start time.')
