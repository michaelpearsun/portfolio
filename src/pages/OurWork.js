import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from '../animation';



const OurWork = () => {
    return (
        <StyledComponentOurWork variants={ pageAnimation } exit="exit" initial="hidden" animate="show" style={{ background: "#fff" }} >
            <StyledComponentMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </StyledComponentMovie>
            <StyledComponentMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer" >
                    <img src={theracer} alt="theracer" />
                </Link>
            </StyledComponentMovie>
            <StyledComponentMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </StyledComponentMovie>
        </StyledComponentOurWork>
    )
}

const StyledComponentOurWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`

const StyledComponentMovie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork
