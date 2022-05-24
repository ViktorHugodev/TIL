import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color:${props => props.isDragDisabled ? 'lightgray' : props.isDragging ? 'lightgreen': 'white'};

`;

export default function Task(props) {
  //Draggable -recebe duas propriedades 1- draggableId 2- index - 3 - isDragDisabled
  const isDragDisabled = props.task.id === 'task-1'
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
     {(provided, snapshot) => (
       <Container

       {...provided.draggableProps}
       {...provided.dragHandleProps}
       ref={provided.innerRef}
       isDragging={snapshot.isDragging}
       >
         {props.task.content}
         </Container>

     )}
    </Draggable>
  );
}
