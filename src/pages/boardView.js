import React from "react";
import Column from "../components/global/Column";
import "../stylesheets/boardView.scss"

function BoardView() {
  return (

      <div className="row">
        <Column heading = "Backlog:"/>
        <Column heading = "In Progress:"/>
        <Column heading = "Todays Tasks:"/>
      </div>

    
  );
}

export default BoardView;
