import React from "react";
import moment from "moment";

import { Calendar as BigCalender, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/stylesheets/calendar.css";
const localizer = momentLocalizer(moment);

const Calendar = () => {
  const myEventsList = [
    {
      start: new Date(2020, 2, 15),
      end: new Date(2020, 3, 10),
      title: "Period 1",
      allDay: false,
    },
    {
      start: new Date(2020, 3, 12),
      end: new Date(2020, 4, 10),
      title: "Period 2",
      allDay: false,
    },
    {
      start: new Date(2020, 4, 10),
      end: new Date(2020, 5, 7),
      title: "Period 3",
      allDay: false,
    },
    {
      start: new Date(2020, 5, 7),
      end: new Date(2020, 6, 5),
      title: "Period 4",
      allDay: false,
    },
    {
      start: new Date(2020, 6, 5),
      end: new Date(2020, 7, 2),
      title: "Period 5",
      allDay: false,
    },
    {
      start: new Date(2020, 7, 2),
      end: new Date(2020, 7, 30),
      title: "Period 6",
      allDay: false,
    },
  ];
  const onSelectEvent = (e) => {
    console.log(e);
  };
  return (
    <div className="container" style={{ height: "100%", width: "100%" }}>
      <BigCalender
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
      />
    </div>
  );
};

export default Calendar;
