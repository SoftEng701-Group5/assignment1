import React from "react";
import { Link } from "react-router-dom";
import getIcon from "./componentFunctions";

/**
 * Generic button component
 * @param className Optional string used as a prefix for all classnames
 * @param path Optional path for button to redirect to
 * @param text Text to display inside button
 * @param icon Icon to display inside button
 * @param height Height to use for element style
 * @param fontSize Fontsize style value
 * @param handleOnClick Function to call on button click
 */
function Button(props) {
  const {
    className = "",
    path,
    text,
    icon,
    height,
    fontSize,
    handleOnClick,
  } = props;

  /**
   * Called for any keypress while user is focused on the button
   * If the key pressed is enter, the supplied clickHandler function is called
   * @param e Keypress event
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && handleOnClick) {
      handleOnClick();
    }
  };

  const button = (
    <div
      className={`${className}button-container`}
      style={{ height }}
      role="button"
      tabIndex={0}
      onClick={handleOnClick}
      onKeyDown={handleKeyDown}
    >
      <span className={`${className}button-text`} style={{ fontSize }}>
        {text}
      </span>
      {getIcon(icon)}
    </div>
  );
  return (
    <>
      {path ? (
        <Link to={path} className={`${className}button-link`}>
          {button}
        </Link>
      ) : (
        button
      )}
    </>
  );
}

export default Button;
