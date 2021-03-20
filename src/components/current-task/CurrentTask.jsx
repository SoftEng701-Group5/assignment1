import React, { useState, useContext } from 'react';
import IconButton from '../global/IconButton';
import Button from '../global/Button';
import Task from '../global/Task/Task';
import CurrentTaskNotes from './CurrentTaskNotes';
import TimerConfig from './TimerConfig';
import CurrentTaskTimer from './CurrentTaskTimer';
import {
	BreakTimerContext,
	TimerContext,
	WorkTimerMemoryContext,
	BreakTimerMemoryContext,
	PlayContext,
} from '../timer-modal/TimerContextProvider';

function CurrentTask(props) {
	const { displayedTask } = props;

	const [, setWorkTimerMemory] = useContext(WorkTimerMemoryContext);
	const [, setBreakTimerMemory] = useContext(BreakTimerMemoryContext);
	const [, setPlay] = useContext(PlayContext);

	const [, setTimer] = useContext(TimerContext);
	const [, setBreakTimer] = useContext(BreakTimerContext);
	const [showConfig, setShowConfig] = useState(false);
	const [showTimer, setShowTimer] = useState(false);
	const [timerConfigValues, setTimerConfigValues] = useState({
		workMinutes: 25,
		workSeconds: 0,
		breakMinutes: 5,
		breakSeconds: 0,
		autoFullScreen: false,
	});

	const handleConfigButtonClicked = () => {
		setShowConfig(!showConfig);
	};

	const handleStartButtonClicked = () => {
		setShowConfig(false);
		setShowTimer(true);
		const workSec =
			timerConfigValues.workMinutes * 60 + timerConfigValues.workSeconds;
		const breakSec =
			timerConfigValues.breakMinutes * 60 +
			timerConfigValues.breakSeconds;
		setTimer({ seconds: workSec });
		setBreakTimer({ seconds: breakSec });

		setWorkTimerMemory({ seconds: workSec });
		setBreakTimerMemory({ seconds: breakSec });
		setPlay(true);
	};

	return (
		<div className='current-task'>
			<h1 className='current-task__title'> Current Task:</h1>
			{displayedTask ? (
				<div className='current-task__content'>
					{showConfig ? (
						<TimerConfig
							setTimerConfigValues={setTimerConfigValues}
						/>
					) : (
						<div className='current-task__info'>
							<Task
								expanded
								name='Current task name is really really long'
								subtasks={[
									{ id: 0, name: 'subtask1' },
									{ id: 1, name: 'subtask2' },
								]}
							/>
							<CurrentTaskNotes
								notes={[
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
									'Maecenas porttitor eget purus sit amet commodo. Ut non interdum mi. Donec tortor eros, luctus rutrum purus eget, ultricies fringilla enim.',
								]}
							/>
						</div>
					)}

					{showTimer ? (
						<CurrentTaskTimer
							timerConfigValues={timerConfigValues}
						/>
					) : (
						<div className='current-task__buttons'>
							<Button
								className='current-task__'
								text='START'
								height='3rem'
								fontSize='1.2rem'
								handleOnClick={handleStartButtonClicked}
							/>
							<div>
								<IconButton
									className='current-task__'
									icon='settings'
									onClick={handleConfigButtonClicked}
								/>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className='current-task__empty'>
					<h1>Click on a task from the left</h1>
				</div>
			)}
		</div>
	);
}

export default CurrentTask;
