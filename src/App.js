import React, { Component } from 'react';
import './App.css';
import styled from '../node_modules/@emotion/styled';
import Header from './header/Header.js';
import Body from './body/Body.js';
import moment from 'moment';
import succulents from './images/succulents.jpg';
import colorfulDesign from './images/colorfulDesign.jpg';
import leaves from './images/leaves.jpg';
import graffiti from './images/graffiti.jpg';
import china from './images/china.jpg';
import colorfulDesign2 from './images/colorfulDesign2.jpg';
import mountainValley from './images/mountainValley.jpg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {today: null};

  }
  componentDidMount = () => {
    this.setState({today: moment().format('dddd').toLowerCase()})
  }

  render() {
    const { today } = this.state;
    return (
      <div>
        { today ? (
          <AppContainer imagePath={days[today].path}>
              <Header />
              <PhotoCreditContainer>
                    <p>Photograph by:  {'   '}
                      <a 
                        href={`https://unsplash.com/${days[today].photographer.unsplash}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        {days[today].photographer.name}
                        </a>
                    </p>
                </PhotoCreditContainer>
              <Body photographer={days[today].photographer} />
          </AppContainer>
        ) : (
          <h1>hi there</h1>
        )
        }
      </div>
    );
  }
}

export default App;

const days = {
  monday: {
        path:`${succulents}`,
        photographer:{
          name: 'Yousef Espanioly',
          unsplash: '@yespanioly'
        }
      },
  tuesday: {
        path: `${colorfulDesign}`,
        photographer: {
          name: 'Ashkan Forouzani',
          unsplash: '@ashkfor121'
        } 
  },
  wednesday: {
        path: `${leaves}`,
        photographer: {
          name: 'Kyle Loftus',
          unsplash: '@kalvisuals'
        }
  },
  thursday: {
        path: `${graffiti}`,
        photographer: {
          name: 'Renee Fisher',
          unsplash: '@reneefisherandco'
        }
  },
  friday: {
        path: `${china}`,
        photographer: {
          name: 'Zhu Hongzhi',
          unsplash: '@zhuzhutrain'
        }
  },
  saturday: {
        path: `${colorfulDesign2}`,
        photographer:{
          name: 'Prince Abid',
          unsplash: '@princeabid708'
        } 
  },
  sunday: {
        path: `${mountainValley}`,
        photographer: {
          name: 'Elias Arnar',
          unsplash: '@eliasarnars'
        }
  },
}

//styled-component
const AppContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${props => props.imagePath});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PhotoCreditContainer = styled('div')`
    width:80vw;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    color: whitesmoke;
    a{
      color: whitesmoke;
    }
`
