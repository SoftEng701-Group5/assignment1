import React from "react";
import Button from "../components/global/Button";
import TimerModal from "../components/timer-modal/TimerModal"

function homeView() {
  return (
    <div>
      <Button icon="rightArrow" text="Dashboard" path="/home" />
      <TimerModal />
    </div>
  );
}

export default homeView;
