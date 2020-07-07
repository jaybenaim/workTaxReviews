import React from "react";
import moment from "moment";
import { myEventsList } from "../../data/eventList";

import { Calendar as BigCalender, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/stylesheets/calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const onSelectEvent = (e) => {
    console.log(e);
  };
  const extendPeriodsToCoverLastDay = () => {
    return myEventsList.map((event, i) => {
      event.end.setDate(event.end.getDate() + 1);
      return event;
    });
  };
  return (
    <div
      className="container"
      style={{ height: "100%", width: "100%" }}
      id="calendar-section"
    >
      <BigCalender
        localizer={localizer}
        events={extendPeriodsToCoverLastDay()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
      />
    </div>
  );
};

export default Calendar;
