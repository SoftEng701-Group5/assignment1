import React, { useState } from 'react';
import RightChevron from '../../assets/icons/RightChevron';

function CurrentTaskNotes() {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleIconClick = () => setIsExpanded(!isExpanded);

	return (
		<div
			className={
				'current-task-notes-container' +
				(isExpanded ? '--expanded' : '')
			}
		>
			<div className='current-task-notes-header-container'>
				<span className='current-task-notes-title'>Notes</span>
				<RightChevron
					handleOnClick={handleIconClick}
					isRotated={isExpanded}
				/>
			</div>

			<div
				className={
					'current-task-notes-content-container' +
					(isExpanded ? '--expanded' : '')
				}
			>
				Some notes!
			</div>
		</div>
	);
}

export default CurrentTaskNotes;
