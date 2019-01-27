import React from 'react';
import Me from '../images/me.jpg';
import styled from '../../node_modules/@emotion/styled';
import SVG from 'react-inlinesvg';

const Header = () => {
    return(
        <Hero>
            <div className="image" />
            <SVG src="../images/signature.svg" >
                <img src="../images/signature.svg" />
            </SVG>
        </Hero>
    )
};

export default Header;

//styles
const Hero = styled('div')`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    .image{
        height: 425px;
        width: 425px;
        background-image: url(${Me});
        background-size: contain;
        border-radius: 50%;
        border: 5px solid whitesmoke;
    }

`