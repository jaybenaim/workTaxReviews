import React, { useState, useEffect } from "react";
import moment from "moment";

const FindDate = () => {
  const [date, setDate] = useState(new Date());
  const [firstTimeApplyingPeriod, setDaysBack] = useState();
  const [firstTimeApplying, toggleFirstTimeApplying] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleChange = (dateValue, firstTime) => {
    setDate(dateValue);

    let dateV = new Date(dateValue);
    let amountOfDays = firstTime ? 14 : 28;
    let firstTimeApplyPeriod = dateV.setDate(
      dateV.getDate() - (amountOfDays - 2)
    );
    setDaysBack(new Date(firstTimeApplyPeriod));
  };

  const handleCheckbox = (value) => {
    setCheckboxValue(!checkboxValue);
    toggleFirstTimeApplying(!firstTimeApplying);
    handleChange(date, !firstTimeApplying);
  };

  return (
    <div className="find-date-section" style={{ padding: "4%" }}>
      <div>Enter the date the client last worked</div>
      {/* Checkbox for 1st time that will change 14 to 28 days */}
      <input type="date" onChange={(e) => handleChange(e.target.value)} />
      <br />
      <label htmlFor="checkbox">First Time applying</label>{" "}
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={(e) => handleCheckbox(e.target.value)}
      />
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
