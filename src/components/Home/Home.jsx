import React from "react";
import Calendar from "../Calendar/Calendar";
import FindDate from "../FindDate/FindDate";
import DisplayPeriods from "../DisplayPeriods/DisplayPeriods";
import ClockPanel from "../ClockPanel/ClockPanel";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-4">
          <DisplayPeriods />
          <Calendar />
          <FindDate />
          <ClockPanel />
        </div>
      </div>
    </main>
  );
};
export default Home;
