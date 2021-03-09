import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { StyledComponentAbout, StyledComponentDescription, StyledComponentImage } from '../styles';
import { useScroll } from './useScroll';
import { fade } from '../animation';
 
const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledComponentServices variants={fade} initial="hidden" ref={element}  >
            <StyledComponentDescription>
                <h2>High <span>Quality</span> services</h2>
                <StyledComponentCards>
                    <StyledComponentCard>
                        <div className="icon">
                            <img alt="icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Agile Mindset</p>
                    </StyledComponentCard>
                    <StyledComponentCard>
                        <div className="icon">
                            <img alt="icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>No person is an island</p>
                    </StyledComponentCard>
                    <StyledComponentCard>
                        <div className="icon">
                            <img alt="icon" src={diaphragm} />
                            <h3>Frontend</h3>
                        </div>
                        <p>CSS3, HTML5 & Javascript</p>
                    </StyledComponentCard>
                    <StyledComponentCard>
                        <div className="icon">
                            <img alt="icon" src={money} />
                            <h3>Backend</h3>
                        </div>
                        <p>Mongo, SQL & Content Management</p>
                    </StyledComponentCard>
                </StyledComponentCards>
                <StyledComponentImage>
                    <img alt="camera" src={home2} />
                </StyledComponentImage>
            </StyledComponentDescription>
        </StyledComponentServices>
    )
}

const StyledComponentServices = styled(StyledComponentAbout)`
    h2{
        padding-bottom: 5rem
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const StyledComponentCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
    }
`

const StyledComponentCard = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServicesSection
