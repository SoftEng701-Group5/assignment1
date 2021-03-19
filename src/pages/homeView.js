import React from "react";
import Button from "../components/global/Button";

function homeView() {
  return (
    <div>
      <Button icon="rightArrow" text="Dashboard" path="/home" height="75px" fontSize="2rem" />
    </div>
  );
}

export default homeView;
