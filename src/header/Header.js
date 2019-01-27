import React from 'react';
import Me from '../images/me.jpg';
import styled from '../../node_modules/@emotion/styled';






const Header = () => {
    return(
        <Hero>
            <div className="image" />
            <h1>Kimberly Scarabello</h1>
        </Hero>
    )
};

export default Header;

//background object


//styles
const Hero = styled('div')`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .image{
        height: 500px;
        width: 500px;
        background-image: url(${Me});
        background-size: contain;
        border-radius: 50%;
        border: 5px solid whitesmoke;

    }

`