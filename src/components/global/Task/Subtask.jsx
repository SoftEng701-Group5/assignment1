import React, { useState } from 'react';

function Subtask(props) {
	const { name, checked } = props;

	const [isChecked, setIsChecked] = useState(checked);
	const handleCheckBoxClick = () => setIsChecked(!isChecked);

	return (
		<div className='subtask'>
			<div
				className={`subtask__checkbox${isChecked ? '--checked' : ''}`}
				onClick={handleCheckBoxClick}
				onKeyDown={handleCheckBoxClick}
				role='checkbox'
				aria-label='checkbox'
				tabIndex='0'
				aria-checked={isChecked}
			/>
			<span className={`subtask__title${isChecked ? '--checked' : ''}`}>
				{name}
			</span>
		</div>
	);
}
export default Subtask;
