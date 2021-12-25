import styled from "styled-components";

export const HeroContainer = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    @media screen and (min-width: 768px) {
        margin-top: 7rem;
    }

    @media screen and (min-width: 1100px) {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const HeroImg = styled.img`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 70%;
    }

    @media screen and (min-width: 1100px) {
        width: 46%;
        order: 1;
    }
`

export const HeroWrapper = styled.div`
    text-align: center;
    margin-top: 2rem;

    @media screen and (min-width: 1100px) {
        margin-top: 0;
    }
`

export const HeroH1 = styled.h1`
    font-family: var(--headings-font);
    font-weight: var(--headings-font-bold);
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--very-dark-blue);
    margin-bottom: 1.5rem;

    @media screen and (min-width: 768px) {
        width: 80%;
        font-size: 1.8rem;
        margin: 0 auto 1.5rem auto;
    }

    @media screen and (min-width: 1100px) {
        text-align: left;
        margin: 0;
        font-size: 2.2rem;
    }
`

export const HeroP = styled.p`
    width: 90%;
    margin: 0 auto;
    font-family: var(--body-font);
    font-weight: var(--body-font-regular);
    font-size: 1rem;
    letter-spacing: -0.5px;
    line-height: 1.5;
    color: var(--very-dark-blue);

    
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1100px) {
        width: 85%;
        margin: 1rem 0 0 0;
        text-align: left;
        font-size: 1.1rem;
    }
`

export const HeroForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1.2rem auto 0 auto;

    @media screen and (min-width: 768px) {
        width: 55%;
    }

    @media screen and (min-width: 1100px) {
        width: 85%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 1.2rem 0 0 0;
    }
`

export const HeroFormGroup = styled.div`
    width: 100%;

    @media screen and (min-width: 1100px) {
        position: relative;
        margin-right: 1rem;
    }
`

export const HeroInput = styled.input`
    width: 100%;
    border: 1px solid var(--very-dark-blue);
    outline: none;
    border-radius: 3px;
    padding: 1rem 1rem;

    :focus {
        border: 0.5px solid red;
    }

    @media screen and (min-width: 1100px) {
        padding: 0.8rem 1rem;
    }
`

export const HeroLabel = styled.label`
    font-family: var(--body-font);
    font-weight: var(--body-font-regular);
    color: red;
    text-align: left;
    display: ${({seeLabel}) => (seeLabel ? "block" : "none")};

    @media screen and (min-width: 1100px) {
        position: absolute;
        top: 45px;
        font-size: 0.9rem;
    }
`

export const HerpFormSubmit = styled.input`
    border: none;
    outline: none;
    border-radius: 3px;
    font-size: 1.1rem;
    background-color: var(--bright-blue);
    color: var(--light-grayish-blue);
    padding: 0.7rem 1rem;
    margin-top: 1rem;
    transition: var(--transition);
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    :hover {
        background-color: #6c91f8;
    }

    @media screen and (min-width: 1100px) {
        width: 50%;
        padding: 0.8rem 1rem;
        margin-top: 0;
        font-size: 0.9rem;
    }
`