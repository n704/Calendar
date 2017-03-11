from flask import jsonify, make_response, request, Blueprint, render_template
from models.event import Event


event_api = Blueprint('event_api', __name__)

@event_api.route('/',methods=["get"])
def get_event():
    # return make_response(jsonify({"hello" : "world"}))
    return render_template(
    'index.html'
    )
