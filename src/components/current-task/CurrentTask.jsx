import React, { useState } from 'react';
import IconButton from '../global/IconButton';
import Button from '../global/Button';
import Task from '../global/Task/Task';
import CurrentTaskNotes from './CurrentTaskNotes';
import TimerConfig from './TimerConfig';

function CurrentTask() {
	const [showConfig, setShowConfig] = useState(true);

	const handleConfigButtonClicked = () => {
		setShowConfig(!showConfig);
	};

	return (
		<div className='current-task'>
			<h1 className='current-task__title'> Current Task:</h1>
			<div className='current-task__content'>
				{showConfig ? (
					<TimerConfig />
				) : (
					<div className='current-task__info'>
						<Task
							expanded
							name='Current task name is really really long'
							subtasks={[
								{ id: 0, name: 'subtask1' },
								{ id: 1, name: 'subtask2' },
							]}
						/>
						<CurrentTaskNotes
							notes={[
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
								'Maecenas porttitor eget purus sit amet commodo. Ut non interdum mi. Donec tortor eros, luctus rutrum purus eget, ultricies fringilla enim.',
							]}
						/>
					</div>
				)}
				<div className='current-task__buttons'>
					<Button
						className='current-task__'
						text='START'
						height='3rem'
						fontSize='1.2rem'
						handleOnClick={handleConfigButtonClicked}
					/>
					<div>
						<IconButton
							icon='settings'
							onClick={handleConfigButtonClicked}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentTask;
