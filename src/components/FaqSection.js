import React from 'react';
import styled from 'styled-components';
import { StyledComponentAbout } from '../styles'

const FaqSection = () => {
    return (
        <StyledComponentFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h2>How Do I Start?</h2>
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h2>Daily Schedule</h2>
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h2>Different Payment Methods</h2>
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h2>What Prodcts do you offer?</h2>
                <div className="answer">
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme.</p>
                    <p>Lorem Ipsum Mumbo Jumbo Sumpreme Super Caga Fraga Listic Expe</p>
                </div>
                <div className="faq-line"></div>
            </div>
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
