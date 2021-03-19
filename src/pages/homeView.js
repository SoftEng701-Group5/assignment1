import React from "react";
import Button from "../components/global/Button";
import TimerModal from "../components/timer-modal/TimerModal"

function homeView() {
  return (
    <div>
      <Button icon="rightArrow" text="Dashboard" path="/home" height="75px" fontSize="2rem" />
      <TimerModal />
    </div>
  );
}

export default homeView;
