import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { StyledComponentAbout } from '../styles';
import {AnimateSharedLayout} from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledComponentFaq variants={ scrollReveal } animate={controls} ref={element} initial="hidden" >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                <div className="answer">
                    <p>I call it work so I get paid, but to be honest, I love doing it</p>
                    <p>Anybody can set up a Website. I build strategic, engaging experiences that reinforce credibility, communicate key messages and turn prospects into profits. I start by listening and let that shape our design process, with my clients as partners every step of the way</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            <AnimateSharedLayout>
            <Toggle title="Daily Schedule">
                <div className="answer">
                    <p>I start my day when I wake up</p>
                    <p>I work until I am finished</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            <AnimateSharedLayout>
            <Toggle title="What Is A Full Stack Developer">
                <div className="answer">
                    <p>I am a full stack Developer</p>
                    <p>A full stack web developer is a person who can develop both client and server software</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            <AnimateSharedLayout>
            <Toggle title="What Services do you offer?">
                <div className="answer">
                    <p>Web design, web dev, consultancy & support</p>
                    <p>In addition I can optimize your sites for search engines and get you started with a social presence</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </StyledComponentFaq>
    )
}

const StyledComponentFaq = styled(StyledComponentAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection
