import React, { useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import { myEventsList as periods } from "../../data/eventList";
import "../../assets/stylesheets/displayPeriods.css";

const DisplayPeriods = () => {
  const [showPeriods, togglePeriods] = useState(false);
  const periodElements = () =>
    periods.map((period, i) => {
      const { start, end, title } = period;
      return (
        <div className="period-item" key={i}>
          {title}
          <p>
            {moment(start).format("MMM Do ")}-{moment(end).format("MMM Do ")}
          </p>
        </div>
      );
    });
  return (
    <section className="period-section">
      <Button
        variant="outline-secondary"
        onClick={() => togglePeriods(!showPeriods)}
      >
        {!showPeriods ? "Show" : "Hide"} All Periods{" "}
      </Button>
      {showPeriods && periodElements()}
    </section>
  );
};

export default DisplayPeriods;
