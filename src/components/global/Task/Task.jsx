import React, { useState } from 'react';
import RightChevron from '../../../assets/icons/RightChevron';
import Subtask from './Subtask';

function Task(props) {
	const { name, baseClass = 'task', checked, expanded, subtasks } = props;

	const [isChecked, setIsChecked] = useState(checked);
	const [isExpanded, setIsExpanded] = useState(expanded);

	const handleCheckBoxClick = () => setIsChecked(!isChecked);
	const handleIconClick = () => setIsExpanded(!isExpanded);

	return (
		<div
			className={
				baseClass + '-container' + (isExpanded ? '--expanded' : '')
			}
		>
			<div className={baseClass + '-header-container'}>
				<div
					className={
						baseClass + '-checkbox' + (isChecked ? '--checked' : '')
					}
					onClick={handleCheckBoxClick}
				/>
				<span
					className={
						baseClass + '-title' + (isChecked ? '--checked' : '')
					}
				>
					{name}
				</span>
				<RightChevron
					handleOnClick={handleIconClick}
					isRotated={isExpanded}
				/>
			</div>

			<div
				className={
					baseClass +
					'-content-container' +
					(isExpanded ? '--expanded' : '')
				}
			>
				<div className='subtask-list-container'>
					{subtasks.map((subtask) => (
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
