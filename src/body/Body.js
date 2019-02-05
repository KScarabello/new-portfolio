import React from 'react';
import styled from '../../node_modules/@emotion/styled';
import TimeLine from './TimeLine.js';
import About from './About.js';
import WorkingOn from "./WorkingOn.js";
import Projects from './Projects.js';
import Art from './Art.js';

const Body = (photographer) => (
    <Container>
        <Tabs photogName={photographer.name} photogLink={photographer.unsplash} />
    </Container>
);
export default Body

class Tabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTab: 'about'
        
        
        }
    }

    tabSelect = (tabselected) => {this.setState({selectedTab: tabselected})};
    render(){
        console.log('photographer', this.props.photogName)
        return(
            <div>
                <TabStyles>
                    <li onClick={() => this.tabSelect('about')}>About</li>
                    <li onClick={() => this.tabSelect('workingOn')}>What am I working on?</li>
                    <li onClick={() => this.tabSelect('timeline')}>My Life Story</li>                
                    <li onClick={() => this.tabSelect('projects')}>My Projects</li>
                    <li onClick={() => this.tabSelect('art')}>Art</li>
                </TabStyles>
                { tabIndex[this.state.selectedTab] }

            </div>
        )
    }
}

const tabIndex = {
    about: <About />,
    workingOn: <WorkingOn />,
    timeline: <TimeLine />,
    projects: <Projects />,
    art: <Art />
}


//styled-components
const Container = styled('div')`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const TabStyles = styled('ul')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    list-style: none;
    background-color: #2C232D;
    color: whitesmoke;
    height: 72px;
`
