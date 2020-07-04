import React, { useState } from "react";
import { Form } from "react-bootstrap";
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
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            label="Date client last worked"
            type="date"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="radio"
            label="First time applying"
            onChange={(e) => handleCheckbox(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox2">
          <Form.Check
            type="radio"
            label="Second time applying"
            onChange={(e) => handleCheckbox(e.target.value)}
          />
        </Form.Group>
      </Form>

      <br />

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
