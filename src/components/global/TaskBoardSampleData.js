const TaskBoardSampleData = {
    tasks: {
        'task1': {id: 'task1', content: '701 Meeting', expanded: false, checked: false, subTasks: ['subTask1', 'subTask2', 'subTask3']},
        'task2': {id: 'task2', content: 'Part 4 meeting', expanded: false, checked: false, subTasks: ['subTask4']},
        'task3': {id: 'task3', content: 'Town', expanded: false, checked: false, subTasks: ['subTask5', 'subTask6']},
        'task4': {id: 'task4', content: 'Demo', expanded: false, checked: false, subTasks: []},
        'task5': {id: 'task5', content: 'Testing', expanded: false, checked: false, subTasks: []},
        'task6': {id: 'task6', content: 'Another one', expanded: false, checked: false, subTasks: []},
        'task7': {id: 'task7', content: 'Walmart', expanded: false, checked: false, subTasks: []},
        'task8': {id: 'task8', content: 'Decks', expanded: false, checked: false, subTasks: []},
        'task9': {id: 'task9', content: 'Bar101', expanded: false, checked: false, subTasks: []},
        'task10': {id: 'task10', content: 'Task 10', expanded: false, checked: false, subTasks: []},
        'task11': {id: 'task11', content: 'Sample', expanded: false, checked: false, subTasks: []},
        'task12': {id: 'task12', content: 'Headphones', expanded: false, checked: false, subTasks: []},
        'task13': {id: 'task13', content: 'Meal Prep', expanded: false, checked: false, subTasks: []},
        'task14': {id: 'task14', content: 'Texas', expanded: false, checked: false, subTasks: []},
        'task15': {id: 'task15', content: 'Scooter', expanded: false, checked: false, subTasks: []},
        'task16': {id: 'task16', content: 'Scooter', expanded: false, checked: false, subTasks: []},
        'task17': {id: 'task17', content: 'Scooter', expanded: false, checked: false, subTasks: []},
        'task18': {id: 'task18', content: 'Scooter', expanded: false, checked: false, subTasks: []},
        'task19': {id: 'task19', content: 'Scooter', expanded: false, checked: false, subTasks: []},
        'task20': {id: 'task20', content: 'Scooter', expanded: false, checked: false, subTasks: []},
    },

    subTasks: {
        'subTask1' : { id: "subTask1", name: "Extra task 1", checked: false },
        'subTask2' : { id: "subTask2", name: "Extra task 2", checked: false },
        'subTask3' : { id: "subTask3", name: "Extra task 3", checked: false },
        'subTask4' : { id: "subTask4", name: "Extra task 4", checked: false },
        'subTask5' : { id: "subTask5", name: "Extra task 5", checked: false },
        'subTask6' : { id: "subTask6", name: "Extra task ", checked: false },
    },

    // Todo make selection state one of the props

    columns: {
        'Backlog': {
            id: 'Backlog',
            title: 'Backlog',
            taskIds: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10'],
        },
        'In Progress': {
            id: 'In Progress',
            title: 'In Progress',
            taskIds: ['task11', 'task12'],
        },
        'Today\'s Tasks': {
            id: 'Today\'s Tasks',
            title: 'Today\'s Tasks',
            taskIds: ['task13', 'task14', 'task15', 'task16', 'task17', 'task18', 'task19', 'task20'],
        },
    },

    columnOrder: ['Backlog', 'In Progress', 'Today\'s Tasks'],
};

export default TaskBoardSampleData;