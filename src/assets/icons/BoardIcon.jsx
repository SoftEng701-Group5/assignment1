import React from "react";

function BoardIcon() {
  return (
    <svg
      className="navbar__icon"
      width="60%"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="5"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M5 7.5C5 5.567 6.567 4 8.5 4V4C10.433 4 12 5.567 12 7.5V27.5C12 29.433 10.433 31 8.5 31V31C6.567 31 5 29.433 5 27.5V7.5Z"
        fill="white"
      />
      <path
        d="M14 8C14 5.79086 15.7909 4 18 4V4C20.2091 4 22 5.79086 22 8V20C22 22.2091 20.2091 24 18 24V24C15.7909 24 14 22.2091 14 20V8Z"
        fill="white"
      />
      <path
        d="M24 7.5C24 5.567 25.567 4 27.5 4V4C29.433 4 31 5.567 31 7.5V24.5C31 26.433 29.433 28 27.5 28V28C25.567 28 24 26.433 24 24.5V7.5Z"
        fill="white"
      />
    </svg>
  );
}

export default BoardIcon;
