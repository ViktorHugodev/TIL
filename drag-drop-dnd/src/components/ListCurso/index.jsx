import React from 'react';
import { loadMovies } from '../../data/movies';
import { Card } from '../Card';

import { Container, ListStyle } from './styles';

export function ListCurso({data, index: listIndex}) {
  console.log('listcurso',data)
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>
      <ListStyle>
        {data.aulas.map((list, index) =>  <Card 
        key={list.title} 
        data={list} 
        index={index}
        listIndex={listIndex}
        />)}
       
      </ListStyle>
    </Container>
  );
}
