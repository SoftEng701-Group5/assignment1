import React, { useState, useEffect } from "react";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function DateTime() {
  const [dayName, setDayName] = useState("Monday");
  const [date, setDate] = useState("01/01/21");
  const [time, setTime] = useState("12:00AM");

  const getDateInfo = () => {
    const d = new Date();

    setDayName(DAYS[d.getDay()]);
    setDate(`${d.getDate()  }/${  d.getMonth() + 1  }/${  d.getFullYear()}`);
    setTime(
      d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  };

  useEffect(() => {
    getDateInfo();

    const interval = setInterval(() => {
      getDateInfo();
    }, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page--date-time-container">
      <h1 className="home-page--date-time">
        <span>{dayName}</span>
        <br />
        <span>{date}</span>
        <br />
        <span>{time}</span>
      </h1>
    </div>
  );
}

export default DateTime;
