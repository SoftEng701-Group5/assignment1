import React from 'react';
import TextInput from '../global/TextInput';

const IntervalInput = (props) => {
	const { textValue, title } = props;
	return (
		<div>
			{title}
			<div className='timer-config__interval-input'>
				<TextInput
					className='timer-config__input-field'
					textValue={textValue}
				/>
				<span className='timer-config__input-separator'>:</span>
				<TextInput textValue='00' />
			</div>
		</div>
	);
};

function TimerConfig() {
	return (
		<div className='timer-config'>
			<IntervalInput title='Work Interval' textValue='25' />
			<IntervalInput title='Break Interval' textValue='05' />
		</div>
	);
}

export default TimerConfig;
