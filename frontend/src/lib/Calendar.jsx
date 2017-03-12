import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CalendarCss from 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);
const Calendar = props => (
  <div style={{ height: "500px"}}>
    <BigCalendar
      views={['month']}
      events={[]}
      defaultDate={new Date(2015, 3, 1)}
    />
  </div>
);

export default Calendar;
