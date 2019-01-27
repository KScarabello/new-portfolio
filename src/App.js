import React, { Component } from 'react';
import './App.css';
import styled from '../node_modules/@emotion/styled';
import Header from './header/Header.js';
import Body from './body/Body.js';
import moment from 'moment';
import succulents from './images/succulents.jpg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {today: null};

  }
  componentDidMount = () => {
    this.setState({today: moment().format('dddd').toLowerCase()})
  }
  render() {
    return (
      <div>
        { this.state.today ? (
          <AppContainer color="blue">
              <Header />
              <Body />
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


//styled-component
const AppContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  padding-top: 72px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${succulents});
  background-repeat: round;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

