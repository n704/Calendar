import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {getApi, API_URL} from '../commons'
import CalendarCss from 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
    constructor(props){
    	super(props);
      this.getData = this.getData.bind(this)
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
    componentWillMount() {
      this.getData()
  	}
    componentWillReceiveProps(nextProps) {
        this.getData()
    }
    render() {
      return (<div style={{ height: "500px"}}>
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
