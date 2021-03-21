import React, { useContext, useState } from "react";
import TextInput from "../global/TextInput";
import { FullscreenContext } from "../timer-modal/TimerContextProvider";

const IntervalInput = (props) => {
  const {
    onMinutesChangeHandler,
    onSecondsChangeHandler,
    textValue,
    title,
  } = props;

  const [minutesValue, setMinutesValue] = useState(textValue);
  const [secondsValue, setSecondsValue] = useState("00");

  const handleMinutesChanged = (val) => {
    setMinutesValue(val);
    onMinutesChangeHandler(val);
  };

  const handleSecondsChanged = (val) => {
    setSecondsValue(val);
    onSecondsChangeHandler(val);
  };

  return (
    <div>
      <span>{title}</span>
      <div className="timer-config__interval-input">
        <TextInput
          centered
          className="timer-config__input-field"
          textValue={minutesValue}
          onChangeHandler={handleMinutesChanged}
        />
        <span className="timer-config__input-separator">:</span>
        <TextInput
          centered
          textValue={secondsValue}
          onChangeHandler={handleSecondsChanged}
        />
      </div>
    </div>
  );
};

function TimerConfig(props) {
  const { setTimerConfigValues } = props;

  const [isChecked, setIsChecked] = useContext(FullscreenContext);

  const handleWorkMinutesChanged = (val) => {
    setTimerConfigValues((prevState) => ({
      ...prevState,
      workMinutes: parseInt(val, 10),
    }));
  };
  const handleWorkSecondsChanged = (val) => {
    setTimerConfigValues((prevState) => ({
      ...prevState,
      workSeconds: parseInt(val, 10),
    }));
  };
  const handleBreakMinutesChanged = (val) => {
    setTimerConfigValues((prevState) => ({
      ...prevState,
      breakMinutes: parseInt(val, 10),
    }));
  };
  const handleBreakSecondsChanged = (val) => {
    setTimerConfigValues((prevState) => ({
      ...prevState,
      breakSeconds: parseInt(val, 10),
    }));
  };
  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
    setTimerConfigValues((prevState) => ({
      ...prevState,
      autoFullScreen: isChecked,
    }));
  };

  return (
    <div className="timer-config">
      <IntervalInput
        title="Work Interval"
        textValue="25"
        onMinutesChangeHandler={handleWorkMinutesChanged}
        onSecondsChangeHandler={handleWorkSecondsChanged}
      />
      <IntervalInput
        title="Break Interval"
        textValue="05"
        onMinutesChangeHandler={handleBreakMinutesChanged}
        onSecondsChangeHandler={handleBreakSecondsChanged}
      />
      <div className="timer-config__fullscreen-field">
        <div
          className={`timer-config__checkbox${isChecked ? "--checked" : ""}`}
          onClick={handleCheckBoxClick}
          onKeyDown={handleCheckBoxClick}
          role="checkbox"
          aria-label="checkbox"
          tabIndex="0"
          aria-checked={isChecked}
        />
        <span>Auto Fullscreen</span>
      </div>
    </div>
  );
}

export default TimerConfig;
