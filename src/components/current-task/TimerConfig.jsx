import React, { useState } from 'react';
import TextInput from '../global/TextInput';

const IntervalInput = (props) => {
	const {
		onMinutesChangeHandler,
		onSecondsChangeHandler,
		textValue,
		title,
	} = props;

	return (
		<div>
			<span>{title}</span>
			<div className='timer-config__interval-input'>
				<TextInput
					centered
					className='timer-config__input-field'
					textValue={textValue}
					onChangeHandler={onMinutesChangeHandler}
				/>
				<span className='timer-config__input-separator'>:</span>
				<TextInput
					centered
					textValue='00'
					onChangeHandler={onSecondsChangeHandler}
				/>
			</div>
		</div>
	);
};

function TimerConfig(props) {
	const { setTimerConfigValues } = props;

	const [isChecked, setIsChecked] = useState(false);

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
		<div className='timer-config'>
			<IntervalInput
				title='Work Interval'
				textValue='25'
				onMinutesChangeHandler={handleWorkMinutesChanged}
				onSecondsChangeHandler={handleWorkSecondsChanged}
			/>
			<IntervalInput
				title='Break Interval'
				textValue='05'
				onMinutesChangeHandler={handleBreakMinutesChanged}
				onSecondsChangeHandler={handleBreakSecondsChanged}
			/>
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
