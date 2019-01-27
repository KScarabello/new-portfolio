import React, { Component } from 'react';
import './App.css';
import styled from '../node_modules/@emotion/styled';
import tiles from './images/tiles.jpg';
import Header from './header/Header.js';

class App extends Component {
  render() {
    return (
      <AppContainer>
          <Header />
      </AppContainer>
    );
  }
}

export default App;

//styles

const AppContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  background-image: url(${tiles});

`
