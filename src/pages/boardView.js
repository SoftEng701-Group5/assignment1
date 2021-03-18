import React from "react";
import BoardImage from '../assets/images/BoardImage';

function BoardView() {
  return (
    <div className="boards" style={{
        position: "absolute",
        right: 200,
        bottom: 200
    }}>
        <BoardImage />
    </div>
  );
}

export default BoardView;
