import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/global/Column";
import BoardImage from "../assets/images/BoardImage";
import TaskBoardSampleData from "../assets/TaskBoardSampleData";
import Navbar from "../components/Navbar";
import NewTask from "../components/NewTask";

function BoardView() {
  const [boardData, setBoardData] = useState(TaskBoardSampleData);

  const [open, setOpened] = useState(false);

  const onListClick = (column, sortBy, revOrder) => () => {
    setOpened(!open);
    const sorted = Object.values(boardData.tasks);
    // sort the list in terms of the specified value e.g. title, date
    sorted.sort((a, b) => {
      // if oldest date is first
      if (revOrder) {
        return b[sortBy].localeCompare(a[sortBy]);
        // if increasing alphabetically or by date
        // eslint-disable-next-line no-else-return
      } else {
        return a[sortBy].localeCompare(b[sortBy]);
      }
    });
    const newTaskIds = [];
    sorted.forEach((task) => {
      if (boardData.columns[column].taskIds.includes(task.id)) {
        newTaskIds.push(task.id);
      }
    });

    const sortedColumn = boardData.columns[column];
    sortedColumn.taskIds = newTaskIds;

    const newBoardData = boardData;
    newBoardData.columns[column] = sortedColumn;
    setBoardData({ ...newBoardData });
  };

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

    const start = boardData.columns[source.droppableId];
    const finish = boardData.columns[destination.droppableId];

    if (start === finish) {
      // Dragged within one column
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      // Update column task ids
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newBoardData = boardData;
      newBoardData.columns[source.droppableId] = newColumn;
      setBoardData({ ...newBoardData });

      return;
    }

    // Start column different to destination
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    // Update the column with the new task ids
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

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
                  handleList={onListClick}
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
