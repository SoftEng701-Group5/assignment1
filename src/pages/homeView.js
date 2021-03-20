import React from 'react';
import Button from "../components/global/Button";
import TimerModal from "../components/timer-modal/TimerModal";
import Navbar from '../components/Navbar';

function homeView() {

  return (
    <>
      <Navbar />
      <div>
        <Button icon="rightArrow" text="Dashboard" path="/dashboard" />
        <TimerModal />
      </div>
    </>
  );
}

export default homeView;
