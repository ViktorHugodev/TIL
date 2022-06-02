import React from 'react';
import { loadMovies } from '../../data/movies';
import { Card } from '../Card';

import { Container, ListStyle } from './styles';
const lists = loadMovies();
// const modulos = lists.sort((item, item2) =>
//   item.vote_average > item2.vote_average ? 1 : -1
// );
export function ListModulos({ index }) {
  return (
    <Container>
      <header>
        <h2>Modulos {index}</h2>
      </header>
      <ListStyle>
        {/* {modulos.map((list) => (
          <Card key={list.id} data={list} />
        ))} */}
      </ListStyle>
    </Container>
  );
}
