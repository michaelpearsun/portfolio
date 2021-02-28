import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import { StyledComponentAbout, StyledComponentDescription, StyledComponentImage, StyledComponentHide } from '../styles'

const AboutSection = () => {
    return (
        <StyledComponentAbout>
            <StyledComponentDescription>
                <div className="title">
                    <StyledComponentHide>
                        <h2>We work to make</h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <h2>
                            your <span>dreams</span> come 
                        </h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <h2>true.</h2>
                    </StyledComponentHide>
                </div>
                <p>
                    Contact me for any web dev or software engineer ideas that you have. I am open to work on your project today!
                </p>
                <button>Contact Us</button>
            </StyledComponentDescription>
            <StyledComponentImage>
                <img src={home1} alt="guy with a camera" />
            </StyledComponentImage>
            </StyledComponentAbout>
    );
};



export default AboutSection
