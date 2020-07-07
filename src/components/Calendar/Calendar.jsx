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
    let fourteenDayMark = [
      {
        title: "14 Day Mark",
        start: new Date(2020, 4, 24),
        end: new Date(2020, 4, 24),
        allDay: "true",
      },
      {
        title: "14 Day Mark",
        start: new Date(2020, 5, 21),
        end: new Date(2020, 5, 21),
        allDay: "true",
      },
      {
        title: "14 Day Mark",
        start: new Date(2020, 6, 19),
        end: new Date(2020, 6, 19),
        allDay: "true",
      },
    ];
    let newEventsList = myEventsList;
    newEventsList.push(...fourteenDayMark);
    return newEventsList.map((event, i) => {
      event.start = new Date(event.start);
      event.end = new Date(event.end);
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
