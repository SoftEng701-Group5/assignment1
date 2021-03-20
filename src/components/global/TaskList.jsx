import React from 'react';
import NewTask from '../NewTask';
import Task from './Task/Task';

function TaskList(props) {
	const { tasks } = props;

	return (
		<div className='task-list'>
			<h1 className='task-list__title'>Today&apos;s Tasks:</h1>
			<div className='task-list__content'>
				<div className='task-list__tasks'>
					{tasks.map((t) => (
						<div key={t.Task_id}>
							<Task name={t.Name} />
						</div>
					))}
				</div>

				<div className='add-task-button-container'>
					<NewTask />
				</div>
			</div>
		</div>
	);
}

export default TaskList;
