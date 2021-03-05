import { motion } from 'framer-motion';
import React from 'react';
import home1 from '../img/home1.png';

import { StyledComponentAbout, StyledComponentDescription, StyledComponentImage, StyledComponentHide } from '../styles'

const AboutSection = () => {

    const titleAnim = {
        hidden: {opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    };

    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } },
    };

    return (
        <StyledComponentAbout>
            <StyledComponentDescription>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <StyledComponentHide>
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show" >We work to make</motion.h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <h2>
                            your <span>dreams</span> come 
                        </h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <h2>true.</h2>
                    </StyledComponentHide>
                </motion.div>
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
