import React, { useState } from 'react';
import RightChevron from '../../../assets/icons/RightChevron';
import Subtask from './Subtask';

function Task(props) {
	const { name, checked, subtasks } = props;

	const [isChecked, setIsChecked] = useState(checked);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleCheckBoxClick = () => setIsChecked(!isChecked);
	const handleIconClick = () => setIsExpanded(!isExpanded);

	return (
		<div className={'task-container' + (isExpanded ? '--expanded' : '')}>
			<div className='task-header-container'>
				<div
					className={'task-checkbox' + (isChecked ? '--checked' : '')}
					onClick={handleCheckBoxClick}
				/>
				<span className={'task-title' + (isChecked ? '--checked' : '')}>
					{name}
				</span>
				<RightChevron
					handleOnClick={handleIconClick}
					isRotated={isExpanded}
				/>
			</div>

			<div
				className={
					'task-content-container' + (isExpanded ? '--expanded' : '')
				}
			>
				<div className='subtask-list-container'>
					{subtasks &&
						subtasks.map((subtask) => (
							<Subtask
								key={subtask.id}
								name={subtask.name}
								checked={subtask.checked}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
export default Task;
