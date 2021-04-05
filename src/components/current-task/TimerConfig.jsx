import React, { useContext, useState } from "react";
import TextInput from "../global/TextInput";
import { FullscreenContext } from "../timer-modal/TimerContextProvider";

/**
 * This function handles the configuration of the Timer component used in the
 * Current Task component. The user is able to input their desired minutes
 * and seconds values.
 */
const IntervalInput = (props) => {
  const {
    onMinutesChangeHandler,
    onSecondsChangeHandler,
    textValue,
    title,
    isInvalidTime,
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
      <div className="timer-config__input-header">
        <span>{title}</span>
        {isInvalidTime ? (
          <span className="timer-config__input-warning">
            *Invalid Time input
          </span>
        ) : (
          <div />
        )}
      </div>
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

/**
 * This function represents the Timer Configuration component that makes
 * up the Current Task component. This component uses the timer configuration
 * handler above to configure the timer according to user input if the default
 * timer values are not desired.
 */
function TimerConfig(props) {
  const { setTimerConfigValues } = props;

  const [isChecked, setIsChecked] = useContext(FullscreenContext);
  const [isInvalidWorkTime, setIsInvalidWorkTime] = useState(false);
  const [isInvalidBreakTime, setIsInvalidBreakTime] = useState(false);

  // Helper function to check if inputs are integers or not, if not, the state is set to NaN
  const validated = (val, field) => {
    if (/^\d+$/.test(val)) {
      setTimerConfigValues((prevState) => ({
        ...prevState,
        [field]: parseInt(val, 10),
      }));
      return true;
    }
    setTimerConfigValues((prevState) => ({
      ...prevState,
      [field]: NaN,
    }));
    return false;
  };

  const handleWorkMinutesChanged = (val) => {
    if (validated(val, "workMinutes")) {
      setIsInvalidWorkTime(false);
    } else {
      setIsInvalidWorkTime(true);
    }
  };
  const handleWorkSecondsChanged = (val) => {
    if (validated(val, "workSeconds")) {
      setIsInvalidWorkTime(false);
    } else {
      setIsInvalidWorkTime(true);
    }
  };
  const handleBreakMinutesChanged = (val) => {
    if (validated(val, "breakMinutes")) {
      setIsInvalidBreakTime(false);
    } else {
      setIsInvalidBreakTime(true);
    }
  };
  const handleBreakSecondsChanged = (val) => {
    if (validated(val, "breakSeconds")) {
      setIsInvalidBreakTime(false);
    } else {
      setIsInvalidBreakTime(true);
    }
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
        isInvalidTime={isInvalidWorkTime}
      />
      <IntervalInput
        title="Break Interval"
        textValue="05"
        onMinutesChangeHandler={handleBreakMinutesChanged}
        onSecondsChangeHandler={handleBreakSecondsChanged}
        isInvalidTime={isInvalidBreakTime}
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
