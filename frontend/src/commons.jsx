import 'whatwg-fetch'
import React, { Component} from 'react'
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import 'react-widgets/lib/less/react-widgets.less'
// import  '../public/react-widgets.js'
// import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
export const HOST = "http://127.0.0.1:5000"
momentLocalizer(moment)
export const API_URL = {
  add_event : HOST + "/api/event/",
  get_event : (id) => HOST + "/api/event/" + id,
  update_event: (id) => HOST + "/api/event/" + id,
  delete_event: (id) => HOST + "/api/event/" + id,
  get_event_list : HOST + '/api/event/'
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
    console.log(result)
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
export function deleteApi(url, callback){
  let params = makeParameters("delete");
  fetch(url, params).then(function(response) {
    return response.json()
  }).then(function(result) {
    callback(result);
  });
  // TODO return error on failure
}
// export const DateTime = React.createClass({
//   propTypes : {
//     errors: React.PropTypes.array,
//     value: React.PropTypes.object,
//     label: React.PropTypes.string.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     disabled : React.PropTypes.bool
//   },
//
//   getDefaultProps: function(){
//     return {
//       value: new Date(),
//       disabled : false
//     }
//   },
//
//   render: function() {
//     return <div className="form-group">
//       <label>{this.props.label}</label>
//      <span className="has-error">
//       <DateTimePicker
//         disabled={this.props.disabled}
//         step={5}
//         value={this.props.value}
//         onChange={date => this.props.onChange(date)}
//         format="DD MMM YYYY hh:mm a"
//       />
//       {this.props.errors ? <span className="help-block">{this.props.errors.join(' ')}</span> : null}
//     </span>
//   </div>
//   }
// });
export class DateTime extends Component {
  static PropTypes = {
    label : React.PropTypes.string,
    value : React.PropTypes.object,
    onChange : React.PropTypes.func.isRequired
  }
  static defaultProps = {
    value : new Date(),
    label : ''
  }
  constructor(props){
    super(props)
    this.updateDate = this.updateDate.bind(this)
    this.updateTime = this.updateTime.bind(this)
    this.state = {
      datetime : props.value
    }
  }
  updateDate(date){
    date.setHours(this.state.datetime.getHours())
    date.setMinutes(this.state.datetime.getMinutes())
    this.setState({ datetime : date})
    this.props.onChange(date)
  }
  updateTime(time){
    let date  = new Date(this.state.datetime)
    date.setHours(time.getHours())
    date.setMinutes(time.getMinutes())
    this.setState({datetime : date})
    this.props.onChange(date)
  }
  render(){
    return (
      <div>
        <label>{this.props.label}</label>
        <DatePicker
          hintText="Date"
          value={this.state.datetime}
          onChange={ (e,date)=> this.updateDate(date)}
          />
        <TimePicker
          hintText="Time"
          value={this.state.datetime}
          onChange={ (e,time) => this.updateTime(time)}
          />
      </div>
    )
  }
}
