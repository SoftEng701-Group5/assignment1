import React, { useState } from 'react';
import RightChevron from '../../../assets/icons/RightChevron';
import Subtask from './Subtask';

function Task(props) {
	const { name, checked, expanded, subtasks } = props;

	const [isChecked, setIsChecked] = useState(checked);
	const [isExpanded, setIsExpanded] = useState(expanded);

	const handleCheckBoxClick = () => setIsChecked(!isChecked);
	const handleIconClick = () => setIsExpanded(!isExpanded);

	return (
		<div className={`task${isExpanded ? '--expanded' : ''}`}>
			<div className='task__header'>
				<div
					className={`task__checkbox${isChecked ? '--checked' : ''}`}
					onClick={handleCheckBoxClick}
					onKeyDown={handleCheckBoxClick}
					role='checkbox'
					aria-label='checkbox'
					tabIndex='0'
					aria-checked={isChecked}
				/>
				<span className={`task__title${isChecked ? '--checked' : ''}`}>
					{name}
				</span>
				<RightChevron
					handleOnClick={handleIconClick}
					isRotated={isExpanded}
				/>
			</div>

			<div className={`task__content${isExpanded ? '--expanded' : ''}`}>
				<div className='task__subtask-list'>
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
