import React, { useState } from "react";
import moment from "moment";

const FindDate = () => {
  const [date, setDate] = useState(new Date());
  const [firstTimeApplyingPeriod, set14DaysBack] = useState();

  const handleChange = (dateValue) => {
    setDate(dateValue);

    let dateV = new Date(dateValue);
    let firstTimeApplyPeriod = dateV.setDate(dateV.getDate() - 12);
    set14DaysBack(firstTimeApplyPeriod);
  };

  return (
    <div className="find-date-section" style={{ padding: "4%" }}>
      <div>Enter the date the client last worked</div>
      {/* Checkbox for 1st time that will change 14 to 28 days */}
      <input type="date" onChange={(e) => handleChange(e.target.value)} />
      {firstTimeApplyingPeriod && (
        <div>
          Ask The customer if they have made less than $1000 since{" "}
          {moment(firstTimeApplyingPeriod).format("MMMM Do YYYY")}
        </div>
      )}
    </div>
  );
};

export default FindDate;
