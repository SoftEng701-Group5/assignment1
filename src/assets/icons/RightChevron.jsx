import React from "react";

function RightChevron(props) {
  const { handleOnClick, isRotated } = props;

  return (
    <svg
      className={`right-chevron${  isRotated ? "--rotated" : ""}`}
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 407.436 407.436"
      onClick={handleOnClick}
    >
      <polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 " />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
}

export default RightChevron;
