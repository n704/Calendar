import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {getApi, API_URL, postApi} from '../commons'
import CalendarCss from 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);
/*global gapi*/
class GoogleCalendar extends Component {
  static propTypes = {
    events : React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func
  }
  static defaultProps = {
    // default onChange function.
    onChange: () => {},
    onSync : () => {}
  }
  constructor(props){
  	super(props);
    this.signInOrOut = this.signInOrOut.bind(this)
    this.getEvents = this.getEvents.bind(this)
  	this.state = {
      message : "SignIn"
    };
  }
  getEvents(cb){
    const date = new Date()
    const start_time = date.toISOString()
    const end_time = (new Date(date.getFullYear(),(date.getMonth()+ 1)%12 ),1).toISOString()
    gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': start_time,
          'timeMax': end_time,
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;
          if(cb){
            cb(events)
          }
        })
  }

  signInOrOut(){
    if(this.state.message == "SignIn"){
      gapi.auth2.getAuthInstance().signIn();
      this.getEvents(this.props.onChange)
      this.setState({message : "Logout"})
    }else{
      gapi.auth2.getAuthInstance().signOut();
      this.setState({message : "SignIn"})
    }
  }
  render(){
    return(
      <button onClick={e => this.signInOrOut()}>{this.state.message}</button>
    );
  }
}
export default class Calendar extends Component {
    constructor(props){
    	super(props);
      this.getData = this.getData.bind(this)
      this.addEvents = this.addEvents.bind(this)
      this.postEvents = this.postEvents.bind(this)
    	this.state = {
        events : []
      };
    }
    getData(){
      getApi(API_URL.get_event_list, {}, res =>{
        if(res.error){
          console.log(res.error)
        }else{
          this.setState({ events : res.data})
        }
      })
    }
    postEvents(events){
      this.state.events.map( event => {
        console.log(event)
        if(!event.sync){
          var new_event = {
            start : {
              dateTime : ( new Date(event.start_time)).toISOString()
            },
            end : {
              dateTime : (new Date(event.end_time)).toISOString()
            },
            location : event.location,
            summary : event.description,
            description : event.title
          }
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': new_event
          });
          request.execute( res => {
            event.sync = true
            postApi(API_URL.update_event(event.id),event, res => {
              console.log(res)
            })
          })
        }
      })
    }
    addEvents(events){
      events.map( event => {
        let new_event = {
          sync : true,
          start_time :(new Date(event.start.dateTime)).toISOString(),
          location : event.location,
          description: event.summary,
          title : event.description,
          end_time: (new Date(event.end.dateTime)).toISOString()
        }
        postApi(API_URL.add_event,new_event, res => {
          console.log(res)
        })
      })
      this.getData()
    }
    componentWillMount() {
      this.getData()
  	}
    componentWillReceiveProps(nextProps) {
        this.getData()
    }
    render() {
      return (<div style={{ height: "500px"}}>
        <GoogleCalendar
          events={this.state.events}
          onChange={ (events) => {
            this.addEvents(events)
            this.getData()
            this.postEvents()
          }}
        />
        <BigCalendar
          selectable
          views={['month']}
          events={this.state.events}
          defaultDate={new Date()}
          onSelectEvent={ (event,e) =>  this.props.history.push('/updateEvent/'+event.id)}
          onSelectSlot={(slotInfo) => this.props.history.push('/newEvent?start_time='+slotInfo.start.toLocaleString())}
        />
      </div>)
    }
}
