import React from "react";
import Clock from "../Clock/Clock";

import "../../assets/stylesheets/clockPanel.css";

const ClockPanel = () => {
  const provinces = [
    { name: "British Columbia", tz: -3 },
    { name: "Yukon", tz: -3 },
    { name: "Alberta", tz: -2 },
    { name: "North West Territories", tz: -2 },
    { name: "Saskatchewan", tz: -2 },
    { name: "Manitoba", tz: -1 },
    { name: "Newfoundland", tz: 1.5 },
    { name: "Nova Scotia", tz: 1 },
    { name: "New Brunswick", tz: 1 },
    { name: "Prince Edward Island", tz: 1 },
    { name: "Ontario", tz: 0 },
  ];

  const clockElements = () => {
    return provinces.map((province, i) => {
      let date = new Date();
      date.setHours(date.getHours() + province.tz);
      if (province.name === "Newfoundland") {
        date.setMinutes(date.getMinutes() + 30);
      }
      return (
        <>
          <strong>{province.name}</strong> <Clock key={i} date={date} />{" "}
        </>
      );
    });
  };
  return <div className="clock-panel">{clockElements()}</div>;
};

export default ClockPanel;
