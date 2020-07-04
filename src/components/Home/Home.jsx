import React from "react";
import Calendar from "../Calendar/Calendar";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Home</h3>
          <Calendar />
        </div>
      </div>
    </main>
  );
};
export default Home;
