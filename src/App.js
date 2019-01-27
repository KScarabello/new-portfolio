import React, { Component } from 'react';
import './App.css';
import styled from '../node_modules/@emotion/styled';
import tiles from './images/tiles.jpg';
import Header from './header/Header.js';
import moment from 'moment';

class App extends Component {
  constructor(props){
    super();
    this.state = {today: null};
  }

  componentDidMount = () => {
    this.setState({today: moment().format('dddd')})
  }

  render() {
    return (
      <div>
        { this.state.today ? (
          <AppContainer>
              <Header />
          </AppContainer>
        ) : (
          <h1>loading</h1>
        )
        }
      </div>
    );
  }
}

export default App;

//styles

const AppContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  background-image: url(${tiles});
  padding-top: 96px;

`

