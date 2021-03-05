import { motion } from 'framer-motion';
import React from 'react';
import home1 from '../img/home1.png';

import { StyledComponentAbout, StyledComponentDescription, StyledComponentImage, StyledComponentHide } from '../styles'

const AboutSection = () => {

    return (
        <StyledComponentAbout>
            <StyledComponentDescription>
                <motion.div>
                    <StyledComponentHide>
                        <motion.h2>We work to make</motion.h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <motion.h2>
                            your <span>dreams</span> come 
                        </motion.h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <motion.h2>true.</motion.h2>
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
