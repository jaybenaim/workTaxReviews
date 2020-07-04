﻿import React from "react";
import Calendar from "../Calendar/Calendar";
import FindDate from "../FindDate/FindDate";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <Calendar />
          <FindDate />
        </div>
      </div>
    </main>
  );
};
export default Home;
