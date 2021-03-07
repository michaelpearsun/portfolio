import { motion } from 'framer-motion';
import React from 'react';
import { fade, titleAnim, photoAnim } from '../animation';
import home1 from '../img/home1.png';

import { StyledComponentAbout, StyledComponentDescription, StyledComponentImage, StyledComponentHide } from '../styles'
import Wave from './Wave';

const AboutSection = () => {

    return (
        <StyledComponentAbout>
            <StyledComponentDescription>
                <motion.div>
                    <StyledComponentHide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come 
                        </motion.h2>
                    </StyledComponentHide>
                    <StyledComponentHide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </StyledComponentHide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact me for any web dev or software engineer ideas that you have. I am open to work on your project today!
                </motion.p >
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledComponentDescription>
            <StyledComponentImage>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </StyledComponentImage>
            <Wave />
            </StyledComponentAbout>
    );
};



export default AboutSection
