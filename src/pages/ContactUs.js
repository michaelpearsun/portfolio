import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <StyledComponentContact variants={pageAnimation} exit="exit" initial="hidden" animate="show" style={{ background: "#fff" }}>
            <StyledComponentTitle>
                <StyledComponentHide>
                    <motion.h2 variants={titleAnim} >Get in touch.</motion.h2>
                </StyledComponentHide>
            </StyledComponentTitle>
            <div>
                <StyledComponentHide>
                    <StyledComponentSocial variants={titleAnim}>
                        <StyledComponentCircle />
                        <h2>Send Us A Message</h2>
                    </StyledComponentSocial>
                </StyledComponentHide>
                <StyledComponentHide>
                    <StyledComponentSocial variants={titleAnim}>
                        <StyledComponentCircle />
                        <h2>SSend an email</h2>
                    </StyledComponentSocial>
                </StyledComponentHide>
                <StyledComponentHide>
                    <StyledComponentSocial variants={titleAnim}>
                        <StyledComponentCircle />
                        <h2>Social Media</h2>
                    </StyledComponentSocial>
                </StyledComponentHide>
            </div>
        </StyledComponentContact>
    )
};

const StyledComponentContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const StyledComponentTitle = styled.div`
    margin-bottom: 4rem;
    color: black;
`;

const StyledComponentHide = styled.div`
    overflow: hidden;
`;

const StyledComponentCircle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const StyledComponentSocial = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`

export default ContactUs;
