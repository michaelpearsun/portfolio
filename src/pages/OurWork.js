import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';



const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <StyledComponentOurWork variants={pageAnimation} exit="exit" initial="hidden" animate="show" style={{ background: "#fff" }} >
            <motion.div variants={sliderContainer}>
                <StyledComponentFrame1 variants={slider}></StyledComponentFrame1>
                <StyledComponentFrame2 variants={slider}></StyledComponentFrame2>
                <StyledComponentFrame3 variants={slider}></StyledComponentFrame3>
                <StyledComponentFrame4 variants={slider}></StyledComponentFrame4>
            </motion.div>
            <StyledComponentMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <StyledComponentHide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </StyledComponentHide>
                </Link>
            </StyledComponentMovie>
            <StyledComponentMovie variants={fade} ref={element} animate={controls} initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer" >
                    <img src={theracer} alt="theracer" />
                </Link>
            </StyledComponentMovie>
            <StyledComponentMovie  variants={fade} ref={element2} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </StyledComponentMovie>
            <ScrollTop/>
        </StyledComponentOurWork>
    )
};

const StyledComponentOurWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledComponentMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledComponentHide = styled.div`
    overflow: hidden;
`;

const StyledComponentFrame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const StyledComponentFrame2 = styled(StyledComponentFrame1)`
    background: #ff8efb;
`;

const StyledComponentFrame3 = styled(StyledComponentFrame1)`
    background: #8ed2ff;
`;

const StyledComponentFrame4 = styled(StyledComponentFrame1)`
    background: #8effa0;
`;

export default OurWork
