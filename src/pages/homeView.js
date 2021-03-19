import React from "react";
import Button from "../components/global/Button";
import HomepageImage from "../assets/images/HomepageImage";
import DateTime from "../components/DateTime";

function homeView() {
  const getGreeting = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs < 12) return "Good Morning";
    if (hrs < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="home-page--root">
      <div className="home-page--welcome-container">
        <h1 className="home-page--welcome-message">
          <span>{getGreeting()}</span>
          <br />
          <span>John</span>
        </h1>
        <Button icon="rightArrow" text="Dashboard" height="5rem" fontSize="2rem"/>
      </div>
      <DateTime />
      <HomepageImage />
    </div>
  );
}

export default homeView;
