import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';

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

const StyledComponentAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-items: space-between;
    padding: 5rem 10rem;
    color: white;
`
const StyledComponentDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight:lighter;
    }
`

const StyledComponentImage = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const StyledComponentHide = styled.div`
    overflow: hidden;
`

export default AboutSection
