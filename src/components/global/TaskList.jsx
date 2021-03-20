import React, { useContext, useState, useEffect } from 'react';
import NewTask from '../NewTask';
import Task from './Task/Task';

import { fetchTasks } from '../../services/databaseService';
import { AuthContext } from '../../services/providers/authProvider';

function TaskList() {
	const { currentUser } = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetchTasks(currentUser.uid).then((res) => {
			setTasks(res);
		});
	}, []);

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
