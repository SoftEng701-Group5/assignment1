import React from "react";

import DarkModeContext from "../../services/theme-context";

/**
 * This component is a customisable text input
 * @param type Optional input type, e.g 'password'. If left out, 'text' will be used
 * @param centered Flag used to center-align text
 * @param label Optional ext used for label element (appears above input)
 * @param textValue Variable used to link to input value
 * @param placeholderValue Optional placeholder value for textinput
 * @param onChangeHandler Function to call when input is changed
 */
function TextInput(props) {
  const {
    type,
    centered,
    label,
    textValue,
    placeholderValue,
    onChangeHandler,
  } = props;

  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? "text-input" : "text-input light"}>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="text-input__label">{label}</label>
      )}
      <input
        placeholder={placeholderValue}
        type={type || "text"}
        value={textValue}
        onChange={(e) => onChangeHandler(e.target.value)}
        className={`text-input__input${centered ? "--centered" : ""}`}
      />
    </div>
  );
}

export default TextInput;
