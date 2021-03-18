import React, { useState } from 'react';
import RightChevron from '../../assets/icons/RightChevron';

function CurrentTaskNotes(props) {
	const { notes } = props;
	const [isExpanded, setIsExpanded] = useState(false);

	const handleIconClick = () => setIsExpanded(!isExpanded);

	return (
		<div className={`current-task-notes${isExpanded ? '--expanded' : ''}`}>
			<div className='current-task-notes__header'>
				<span className='current-task-notes__title'>Notes</span>
				<RightChevron
					handleOnClick={handleIconClick}
					isRotated={isExpanded}
				/>
			</div>

			<div
				className={`current-task-notes__content${
					isExpanded ? '--expanded' : ''
				}`}
			>
				<ul className='current-task-notes__list'>
					{notes && notes.map((note) => <li>{note}</li>)}
				</ul>
			</div>
		</div>
	);
}

export default CurrentTaskNotes;
