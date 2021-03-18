import React from 'react';
import Task from '../global/Task/Task';
import CurrentTaskNotes from './CurrentTaskNotes';

function CurrentTask() {
	return (
		<div className='current-task'>
			<span className='current-task__title'>Current Task:</span>
			<div className='current-task__content'>
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
				<div className='current-task__stub-timer' />
			</div>
		</div>
	);
}

export default CurrentTask;
