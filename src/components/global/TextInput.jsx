import React from 'react';

function TextInput(props) {
	const {
		type,
		centered,
		label,
		textValue,
		placeholderValue,
		onChangeHandler,
	} = props;

	return (
		<div className='text-input'>
			{label && (
				// eslint-disable-next-line jsx-a11y/label-has-associated-control
				<label className='text-input__label'>{label}</label>
			)}
			<input
				placeholder={placeholderValue}
				type={type || "text"}
				value={textValue}
				onChange={(e) => onChangeHandler(e.target.value)}
				className={`text-input__input${centered ? '--centered' : ''}`}
			/>
		</div>
	);
}

export default TextInput;
