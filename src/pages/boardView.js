import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/task-board/TaskBoardColumn";
import BoardImage from "../assets/images/BoardImage";
import TaskBoardSampleData from "../assets/TaskBoardSampleData";
import Navbar from "../components/Navbar";
import NewTask from "../components/NewTask";

function BoardView() {
  const [boardData, setBoardData] = useState(TaskBoardSampleData);

  const [sortListOpened, setSortListOpened] = useState(false);

  /**
   * Called when an item in the column sorting dropdown list is clicked
   * @param {*} column The column which is to be sorted
   * @param {*} sortBy The sorting arrangement selected
   * @param {*} revOrder A boolean for if the order should be reversed
   */
  const onSortListClick = (column, sortBy, revOrder) => () => {
    setSortListOpened(!sortListOpened);

    const sortedTasks = Object.values(boardData.tasks);
    // Sort the list in terms of the specified value e.g. title, date
    sortedTasks.sort((a, b) => {
      // If oldest date is first
      if (revOrder) {
        return b[sortBy].localeCompare(a[sortBy]);
      }
      // If increasing alphabetically or by date
      return a[sortBy].localeCompare(b[sortBy]);
    });

    const newTaskIds = [];
    sortedTasks.forEach((task) => {
      // Only add the tasks that are in the specified column
      if (boardData.columns[column].taskIds.includes(task.id)) {
        newTaskIds.push(task.id);
      }
    });

    // Update board data with the sorted column
    const sortedColumn = boardData.columns[column];
    sortedColumn.taskIds = newTaskIds;
    const newBoardData = boardData;
    newBoardData.columns[column] = sortedColumn;
    setBoardData({ ...newBoardData });
  };

  /**
   * Called when the user drops or 'lets go of' a draggable item.
   * @param {*} result Contains the source and destination columns of the drag, as well as the dragged items id
   */
  const onDragEnd = (result) => {
    // the destination and source positons, as well as the id of the dragged task
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    // If it's dropped in the same place do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = boardData.columns[source.droppableId];
    const finishColumn = boardData.columns[destination.droppableId];

    // Dragged within one column
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      // Update column task ids
      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };
      const newBoardData = boardData;
      newBoardData.columns[source.droppableId] = newColumn;
      setBoardData({ ...newBoardData });

      return;
    }

    // Start column different to destination
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);

    // Update the starting column with new task ids
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    // Update the destination column with the new task ids
    const newFinish = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    // Update board data
    const newBoardData = boardData;

    newBoardData.columns[source.droppableId] = newStart;
    newBoardData.columns[destination.droppableId] = newFinish;
    setBoardData({ ...newBoardData });
  };

  return (
    <>
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="taskboard_container">
          {boardData.columnOrder.map((columnId, index) => {
            const column = boardData.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => boardData.tasks[taskId]
            );
            return (
              <div>
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  subTasks={boardData.subTasks}
                  handleSortList={onSortListClick}
                />
                {!index ? <NewTask /> : null}
              </div>
            );
          })}
        </div>
      </DragDropContext>
      <div className="taskboard_background">
        <BoardImage />
      </div>
    </>
  );
}

export default BoardView;
