import { useState } from 'react';
import initialData from './data/inital-data';
import Column from './column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

function App() {
  const [tasks, setTasks] = useState(initialData.tasks);
  const [columns, setColumns] = useState(initialData.columns);
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);
  const [newCState, setCNewState] = useState([]);

  function onDragEnd(result) {
    console.log('before', columnOrder);
    const { destination, source, draggableId, type } = result;
    console.log(result);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);



      setColumnOrder(newColumnOrder);
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...columns,
        [newColumn.id]: newColumn,
      };

      setColumns(newState);
      return;
    }
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newState = {
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    };
    setColumns(newState);
  }
  function onDragStart() {}
  function onDragUpdate(update) {}

  //DragDropContext has 3 callbacks

  return (
    <DragDropContext
      onDragUpdate={onDragUpdate}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {columnOrder.map((columnId, index) => {
              const column = columns[columnId];
              const task = column.taskIds.map((taskId) => tasks[taskId]);

              return (
                <Column
                  key={column.id}
                  column={column}
                  task={task}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
