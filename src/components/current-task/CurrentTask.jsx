import React from 'react';
import Task from '../global/Task/Task';
import CurrentTaskNotes from './CurrentTaskNotes';

function CurrentTask() {
	return (
		<div className='current-task-container'>
			<div className='current-task-title-container'>
				<span className='current-task-title'>Current Task:</span>
			</div>
			<div className='current-task-content-container'>
				<span>
					<Task
						baseClass='current-task-current-task'
						name='Current task name is really longas asdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas'
						subtasks={[]}
					/>
					<CurrentTaskNotes />
				</span>
				<div className='current-task-stub-timer'></div>
			</div>
		</div>
	);
}

export default CurrentTask;
