import React from "react";
import moment from "moment";

import { Calendar as BigCalender, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  let period1Start = new Date(2020, 4, 10);
  let period1End = new Date(2020, 5, 7);
  const myEventsList = [
    {
      start: period1Start,
      end: period1End,
      title: "Period 1",
      allDay: false,
    },
  ];
  return (
    <div className="container" style={{ height: "100%", width: "100%" }}>
      <BigCalender
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
