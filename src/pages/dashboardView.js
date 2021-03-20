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
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetchTasks(currentUser.uid).then((res) => {
			setTasks(res);
		});
	}, []);

	return (
		<>
			<Navbar />
			<div className='dashboard'>
				<TaskList tasks={tasks} />
				<CurrentTask
					displayedTask={{
						name: 'Current task name is really really long',
						subtasks: [
							{ id: 0, name: 'subtask1' },
							{ id: 1, name: 'subtask2' },
						],

						notes: [
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							'Maecenas porttitor eget purus sit amet commodo. Ut non interdum mi. Donec tortor eros, luctus rutrum purus eget, ultricies fringilla enim.',
						],
					}}
				/>
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
