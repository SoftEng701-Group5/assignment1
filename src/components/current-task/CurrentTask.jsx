import React, { useState } from 'react';
import Task from '../global/Task/Task';
import CurrentTaskNotes from './CurrentTaskNotes';

function CurrentTask() {
	// const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className='current-task'>
			<CurrentTaskNotes />
		</div>
	);
}

export default CurrentTask;
