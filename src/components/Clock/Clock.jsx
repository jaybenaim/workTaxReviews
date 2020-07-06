import React from "react";
import "../../assets/stylesheets/clock.css";
import moment from "moment";

const Clock = ({ date: time }) => {
  return <div className="clock-container">{moment(time).format("LT")}</div>;
};

export default Clock;
