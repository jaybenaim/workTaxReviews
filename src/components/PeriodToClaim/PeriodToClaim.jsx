import React, { useEffect } from "react";
import moment from "moment";
import { myEventsList as periods } from "../../data/eventList";

const PeriodToClaim = ({ dateSetBack, firstTimeApplying }) => {
  const calculatePeriodsToClaim = () => {
    let periodsQualifiedFor = periods.map((period, p) => {
      if (dateSetBack > period.start) {
        if (period.title !== "Period 1" || period.title !== "Period 2") {
          return !period.title.match(/[12]/) && period.title;
        }
      }
      return false;
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
  useEffect(() => {});
  return (
    <div className="" style={{ marginTop: "10px" }}>
      {" "}
      <strong>
        If the client said they made less than $1000 since{" "}
        {moment(dateSetBack).format("MMMM Do YYYY")}
      </strong>
      <div>
        The client can claim the following periods: <br /> {periodElements()}
      </div>
    </div>
  );
};

export default PeriodToClaim;
