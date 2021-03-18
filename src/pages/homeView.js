import React from "react";
import Button from "../components/global/Button";

function homeView() {
  return (
    <div>
      <Button icon="rightArrow" text="Dashboard" path="/home" handleOnClick={() => {console.log('asda')}}/>
    </div>
  );
}

export default homeView;
