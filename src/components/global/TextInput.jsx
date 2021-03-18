import React from "react";

function TextInput(props) {
  const { label, textValue, placeholderValue, onChangeHandler, typeValue } = props;
  
  return (
    <div className="text-input">
      {label && 
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="text-input__label">
          {label}
        </label>
      }
      <input placeholder={placeholderValue} type={typeValue} value={textValue} onChange={e => onChangeHandler(e.target.value)} className="text-input__input" />
    </div>
  );
}

export default TextInput;
