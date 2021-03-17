import React from "react";
import Button from "../components/global/Button";
import HomepageImage from "../assets/images/HomepageImage";
import DateTime from "../components/DateTime";

function homeView() {
  const getGreeting = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs < 12) return "Good Morning";
    else if (hrs >= 12 && hrs <= 17) return "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) return "Good Evening";

    return "Welcome";
  };

  return (
    <div className="home-page--root">
      <div className="home-page--welcome-container">
        <h1 className="home-page--welcome-message">
          <span>{getGreeting()}</span>
          <br />
          <span>John</span>
        </h1>
        <Button icon={"rightArrow"} text={"Dashboard"} path={"/home"} />
      </div>
      <DateTime />
      <HomepageImage />
    </div>
  );
}

export default homeView;
