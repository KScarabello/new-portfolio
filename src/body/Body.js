import React from 'react';
import styled from '../../node_modules/@emotion/styled';

const Body = () => (
    <Container>
        <Tabs />
    </Container>
);
export default Body


class Tabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {selectedTab: 'about'}
    }

    tabSelect = (tabselected) => {this.setState({selectedTab: tabselected})};
    render(){
        return(
            <TabStyles>
                <li onClick={() => this.tabSelect('about')}>About</li>
                <li onClick={() => this.tabSelect('journal')}>What am I working on?</li>
                <li onClick={() => this.tabSelect('lifeStory')}>My Life Story</li>                
                <li onClick={() => this.tabSelect('myProjects')}>My Projects</li>
                <li onClick={() => this.tabSelect('art')}>Art</li>
            </TabStyles>
        )
    }
}

//styled-components
const Container = styled('div')`
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2C232D;
`
const TabStyles = styled('ul')`
    display: flex;
    justify-content: space-between;
    width: 80%;
    list-style: none;
    color: whitesmoke;
`