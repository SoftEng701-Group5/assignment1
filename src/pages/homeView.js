import React from "react";
import Button from "../components/global/Button";

function homeView() {
  return (
    <div>
      <Button icon={"rightArrow"} text={"Dashboard"} path={"/home"} />
        Dashboard
    </div>
  );
}

export default homeView;
