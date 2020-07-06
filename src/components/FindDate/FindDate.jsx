import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import moment from "moment";
import PeriodToClaim from "../PeriodToClaim/PeriodToClaim";

const FindDate = (props) => {
  const [date, setDate] = useState(new Date());
  const [dateSetBack, setDaysBack] = useState();

  const [dateSelected, toggleDateSelected] = useState(false);
  const [firstTimeApplying, toggleFirstTimeApplying] = useState(false);

  useEffect(() => {
    let daysBack = new Date(date.setDate(date.getDate() - 26));
    setDaysBack(daysBack);
    // eslint-disable-next-line
  }, []);

  const handleChange = (dateValue) => {
    setDate(dateValue);
    toggleDateSelected(true);
    handleDateChange(dateValue);
  };

  const handleDateChange = (dateValue, firstTime) => {
    let dateV = new Date(dateValue);
    let amountOfDays = firstTime ? 14 : 28;
    let firstTimeApplyPeriod = dateV.setDate(
      dateV.getDate() - (amountOfDays - 2)
    );
    setDaysBack(new Date(firstTimeApplyPeriod));
  };

  const handleCheckbox = (e) => {
    toggleFirstTimeApplying(!firstTimeApplying);
    handleDateChange(date, !firstTimeApplying);
  };

  return (
    <div className="find-date-section" style={{ padding: "4%" }}>
      <div>Enter the date the client last worked</div>
      {/* Checkbox for 1st time that will change 14 to 28 days */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            label="Date client last worked"
            type="date"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="radio"
            label="First time applying"
            name="radio"
            onChange={(e) => handleCheckbox(e.target)}
          />

          <Form.Check
            type="radio"
            label="Client has previously applied for CERB"
            name="radio"
            defaultChecked={true}
            onChange={(e) => handleCheckbox(e.target)}
          />
        </Form.Group>
      </Form>

      <br />

      {dateSelected && (
        <div>
          Ask client: Have you made less than $1000 since{" "}
          {moment(dateSetBack).format("LL")}
        </div>
      )}

      {date && (
        <PeriodToClaim
          date={date}
          dateSelected={dateSelected}
          dateSetBack={dateSetBack}
        />
      )}
    </div>
  );
};

export default FindDate;
