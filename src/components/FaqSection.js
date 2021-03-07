import React from 'react';
import styled from 'styled-components';
import Toggle from '../pages/Toggle';
import { StyledComponentAbout } from '../styles';
import {AnimateSharedLayout} from 'framer-motion';

const FaqSection = () => {
    return (
        <StyledComponentFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            <AnimateSharedLayout>
            <Toggle title="Daily Schedule">
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            <AnimateSharedLayout>
            <Toggle title="Different Payment Methods">
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            <AnimateSharedLayout>
            <Toggle title="What Prodcts do you offer?">
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
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
