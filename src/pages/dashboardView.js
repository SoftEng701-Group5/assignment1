import React from 'react';
import CurrentTask from '../components/current-task/CurrentTask';
import TaskList from '../components/global/TaskList';
import Navbar from '../components/Navbar';

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
	return (
		<>
			<Navbar />
			<div className='dashboard'>
				<TaskList />
				<CurrentTask />
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
