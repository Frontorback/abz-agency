import React from "react";
import SecondSection from "./Second/SecondSection";
import FirstSection from "./First/FirstSection";
import Users from "./Users/Users";
import Register from "./Register/Register";
import Request from "./APIRequests/Request";

const Main = () => {
  return (
    <main>
      <Request>
        <FirstSection />
        <SecondSection />
        <Users />
        <Register />
      </Request>
    </main>
  );
};
export default Main;
