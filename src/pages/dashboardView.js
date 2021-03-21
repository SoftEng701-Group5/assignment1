import React, { useContext, useState, useEffect } from 'react';
import CurrentTask from '../components/current-task/CurrentTask';
import TaskList from '../components/global/TaskList';
import Navbar from '../components/Navbar';

import { fetchTasks } from '../services/databaseService';
import { AuthContext } from '../services/providers/authProvider';

const DashboardPlaceholder = (props) => {
	const { title } = props;
	return (
		<div className='dashboard__placeholder-section'>
			<h1 className='dashboard__placeholder-title'>{title}</h1>
			<div className='dashboard__placeholder-content' />
		</div>
	);
};

function DashboardView() {
	const { currentUser } = useContext(AuthContext);
	const [currentTask, setCurrentTask] = useState();
	const [tasks, setTasks] = useState([]);

	const handleTaskClick = (task) => {
		setCurrentTask(task);
	};

	useEffect(() => {
		fetchTasks(currentUser.uid).then((res) => {
			setTasks(res);
		});
	}, []);

	return (
		<>
			<Navbar />
			<div className='dashboard'>
				<TaskList
					tasks={tasks}
					selectedTask={currentTask}
					onTaskClick={handleTaskClick}
				/>
				<CurrentTask displayedTask={currentTask} />
				<div className='dashboard__placeholder-column'>
					<DashboardPlaceholder title='Stats:' />
					<br />
					<DashboardPlaceholder title='Goals:' />
				</div>
			</div>
		</>
	);
}

export default DashboardView;
