import React, { useState } from 'react';
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
			<span className='current-task__title'>Current Task:</span>
			<div className='current-task__content'>
				{showConfig ? (
					<TimerConfig />
				) : (
					<span>
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
					</span>
				)}
				<div
					className='current-task__stub-timer'
					onClick={handleConfigButtonClicked}
					onKeyDown={handleConfigButtonClicked}
					role='button'
					aria-label='button'
					tabIndex='0'
				/>
			</div>
		</div>
	);
}

export default CurrentTask;
