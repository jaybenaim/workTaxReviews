import React from "react";
import Clock from "../Clock/Clock";

import "../../assets/stylesheets/clockPanel.css";

const ClockPanel = () => {
  const provinces = [
    { name: "ON", tz: 0 },
    { name: "BC", tz: -3 },
    { name: "YT", tz: -3 },
    { name: "AB", tz: -2 },
    { name: "NT", tz: -2 },
    { name: "SK", tz: -2 },
    { name: "MB", tz: -1 },
    { name: "NL", tz: 1.5 },
    { name: "NS", tz: 1 },
    { name: "NB", tz: 1 },
    { name: "PE", tz: 1 },
    { name: "QC", tz: 0 },
  ];

  const clockElements = () => {
    return provinces.map((province, i) => {
      let date = new Date();
      date.setHours(date.getHours() + province.tz);
      if (province.name === "Newfoundland") {
        date.setMinutes(date.getMinutes() + 30);
      }
      return (
        <div key={i}>
          <strong>{province.name}</strong> <Clock date={date} />{" "}
        </div>
      );
    });
  };
  return (
    <div className="clock-panel">
      <div className="timezone-heading">Time Zones</div>
      {clockElements()}
    </div>
  );
};

export default ClockPanel;
