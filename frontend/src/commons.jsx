import 'whatwg-fetch'
import React from 'react'
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import 'react-widgets/lib/less/react-widgets.less'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
export const HOST = "http://127.0.0.1:5000"
momentLocalizer(moment)
export const API_URL = {
  add_event : HOST + "/api/event/",
  get_event_by_id :  (id) => HOST + "/api/event/" + id
}

function urlString( obj ) {
  return '?'+Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&')
}
function makeParameters(method){
  return {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

export function getApi(url, query = {}, callback){
  url = Object.keys(query).length ? url + urlString(query) : url;
  fetch(url, makeParameters("get")).then(function(response) {
    return response.json()
  }).then(function(result) {
    callback(result);
  });
  // TODO return error on failure
}

export function postApi(url, body = {}, callback){
  let params = makeParameters("post");
  params.body = JSON.stringify(body);
  fetch(url, params).then(function(response) {
    return response.json()
  }).then(function(result) {
    callback(result);
  });
  // TODO return error on failure
}

export const DateTime = React.createClass({
  propTypes : {
    errors: React.PropTypes.array,
    value: React.PropTypes,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    disabled : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      value: null,
      disabled : false
    }
  },

  render: function() {
    return <div className="form-group">
      <label>{this.props.label}</label>
     <span className="has-error">
      <DateTimePicker
        disabled={this.props.disabled}
        step={5}
        value={this.props.value}
        onChange={date => this.props.onChange(date)}
        format="DD MMM YYYY hh:mm a"
      />
      {this.props.errors ? <span className="help-block">{this.props.errors.join(' ')}</span> : null}
    </span>
  </div>
  }
});
