import React from "react";
import moment from "moment";
import { myEventsList as periods } from "../../data/eventList";

const PeriodToClaim = ({ date, dateSetBack, dateSelected }) => {
  const calculatePeriodsToClaim = () => {
    let periodsQualifiedFor = periods.map((period, p) => {
      let titles = [];
      let newDate = new Date(date);

      if (newDate >= period.start) {
        !period.title.match(/[12]/) && titles.push(period.title);
      } else if (dateSetBack >= period.start) {
        !period.title.match(/[12]/) && titles.push(period.title);
      }

      return titles;
    });
    return periodsQualifiedFor;
  };

  const periodElements = () => {
    let periodsQualifiedFor = calculatePeriodsToClaim();
    return periodsQualifiedFor.map((period, i) => {
      return (
        period && (
          <div className="" key={i}>
            <strong>{period}</strong>
          </div>
        )
      );
    });
  };
  return (
    <div className="" style={{ marginTop: "10px" }}>
      {dateSelected && (
        <>
          <strong>
            If the client said they made less than $1000 since{" "}
            {moment(dateSetBack).format("MMMM Do YYYY")}
          </strong>
          <div>
            The client can claim the following periods: <br />{" "}
            {periodElements()}
          </div>
        </>
      )}
    </div>
  );
};

export default PeriodToClaim;
