import React from "react";
import BoardImage from '../assets/images/BoardImage';
import Column from "../components/global/Column";
import "../stylesheets/boardView.scss"

function BoardView() {
  return (
    <>
      <div className="backgroundImage"><BoardImage /></div>
      <div className="row">
        <Column heading = "Backlog:"/>
        <Column heading = "In Progress:"/>
        <Column heading = "Todays Tasks:"/>
      </div>
      </>
  );
}

export default BoardView;
