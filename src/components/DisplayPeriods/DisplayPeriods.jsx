import React from "react";
import moment from "moment";
import { myEventsList as periods } from "../../data/eventList";

const DisplayPeriods = () => {
  const periodElements = () =>
    periods.map((period, i) => {
      const { start, end, title } = period;
      return (
        <div className="period-item">
          {title}
          <p>
            {moment(start).format("MMMM Do YYYY")}-
            {moment(end).format("MMMM Do YYYY")}
          </p>
        </div>
      );
    });
  return <section className="period-section">{periodElements()}</section>;
};

export default DisplayPeriods;
