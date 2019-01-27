import React, { Component } from 'react';
import './App.css';
import styled from '../node_modules/@emotion/styled';
import Header from './header/Header.js';
import moment from 'moment';
import tiles from './images/tiles.jpg';
import pinkleaves from './images/pinkleaves.jpg';
import coffee from './images/coffee.jpg';
import graffiti from './images/graffiti.jpg';
import hearts from './images/hearts.jpg';
import ferns from './images/ferns.jpg';
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
    console.log('hello', images[this.state.today])
    console.log('appcontainer', AppContainer.__emotion_styles)
    return (
      <div>
        { this.state.today ? (
          <AppContainer color="blue">
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
  padding-top: 96px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${succulents});
  background-repeat: round;
  // filter: brightness(50%);
`


const images = {
  sunday:'pinkleaves',
  monday:"coffee",
  tuesday:"ferns",
  wednesday:'hearts',
  thursday:"graffiti",
  friday:'succulents',
  saturday:'pinkleaves'
}
