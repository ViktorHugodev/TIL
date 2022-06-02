import React from 'react'
import { Header } from './components/Header';
import { Board } from './components/Board/index';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
    <Header />
    <Board />
    <GlobalStyle />
    </>
  );
}

export default App;
