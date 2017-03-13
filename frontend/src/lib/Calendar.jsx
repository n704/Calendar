import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CalendarCss from 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }

    render() {
      console.log(this.props)
      return (<div style={{ height: "500px"}}>
        <BigCalendar
          selectable
          views={['month']}
          events={[]}
          defaultDate={new Date()}
          onSelectSlot={(slotInfo) => this.props.history.push('/newEvent?start_time='+slotInfo.start.toLocaleString())}
        />
      </div>)
    }
}
