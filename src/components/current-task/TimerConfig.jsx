import React, { useState } from 'react';
import TextInput from '../global/TextInput';

const IntervalInput = (props) => {
	const { textValue, title } = props;

	return (
		<div>
			<span>{title}</span>
			<div className='timer-config__interval-input'>
				<TextInput
					centered
					className='timer-config__input-field'
					textValue={textValue}
				/>
				<span className='timer-config__input-separator'>:</span>
				<TextInput centered textValue='00' />
			</div>
		</div>
	);
};

function TimerConfig() {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxClick = () => setIsChecked(!isChecked);

	return (
		<div className='timer-config'>
			<IntervalInput title='Work Interval' textValue='25' />
			<IntervalInput title='Break Interval' textValue='05' />
			<div className='timer-config__fullscreen-field'>
				<div
					className={`timer-config__checkbox${
						isChecked ? '--checked' : ''
					}`}
					onClick={handleCheckBoxClick}
					onKeyDown={handleCheckBoxClick}
					role='checkbox'
					aria-label='checkbox'
					tabIndex='0'
					aria-checked={isChecked}
				/>
				<span>Auto Fullscreen</span>
			</div>
		</div>
	);
}

export default TimerConfig;
