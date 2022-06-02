import React, { useState, useContext } from 'react';
import { ListModulos } from '../ListModulos';
import { ListCurso } from '../ListCurso';
import produce from 'immer'
import { Container } from './styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { loadMovies } from '../../data/movies';
import DragContext from '../../context/dragContext';
const data = loadMovies();
//DndProvider por volta de tudo que for Draggable e dropable. Html5Backend é o backend que vai ser usado para o drag and drop
export function Board() {

  const [lists, setLists] = useState(data);
  function move(fromList,toList,from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].aulas[from]
      draft[fromList].aulas.splice(from, 1)
      draft[toList].aulas.splice(to, 0, dragged)
    }))
  }
  return (
    <DragContext.Provider value={{lists, move}}>
      <DndProvider backend={HTML5Backend}>
        <Container>
          {lists.map((list, index) => (
            <ListCurso key={list.title} data={list} index={index} />
          ))}
        </Container>
      </DndProvider>
    </DragContext.Provider>
  );
}
