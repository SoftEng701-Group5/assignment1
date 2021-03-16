function TextInput(props) {
  const { label, inputName, textValue, placeholderValue, onChangeHandler } = props;
  
  return (
    <div className="text-input">
      {label && 
        <label htmlFor={inputName} className="text-input--label">
          {label}
        </label>
      }
      <input placeholder={placeholderValue} type="text" name={inputName} value={textValue} onChange={e => onChangeHandler(e.target.value)} className="text-input--input" />
    </div>
  );
}

export default TextInput;
