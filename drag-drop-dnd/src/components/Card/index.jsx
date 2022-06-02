import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

//useDrag hook chamado no component que quer ser arrastado
import { Container } from './styles';
import DragContext from '../../context/dragContext';
export function Card({ data, index, listIndex }) {
  const { move } = useContext(DragContext);
  console.log('listIndex', listIndex);
  console.log('index', index)
  const ref = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      id: data.id,
      index,
      listIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListItem = item.listIndex;
      const targetListItem = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;
      if (draggedIndex === targetIndex && draggedListItem === targetListItem) {
        return;
      }
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.right - targetSize.left) / 2;

      //refact for calc width
      const draggedOffset = monitor.getClientOffset();
      const draggedLeft = draggedOffset.x - targetSize.left;

      if (draggedIndex < targetIndex && draggedLeft < targetCenter) {
        return;
      }
      if (draggedIndex > targetIndex && draggedLeft > targetCenter) {
        return;
      }
      move(draggedListItem,targetListItem, draggedIndex, targetIndex);
      item.index = targetIndex
      item.listIndex = listIndex
    },
  });
  //ITEM do tipo CARD são aceitos no dropRef
  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <p>{data.name}</p>
      <img
        src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
        alt='alt'
      />
    </Container>
  );
}
