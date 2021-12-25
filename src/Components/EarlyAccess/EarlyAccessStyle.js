import styled from "styled-components";

export const EarlyAccessBigLebowski = styled.section`
    background-color: var(--desaturated-blue);
`

export const EarlyAccessContainer = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;
    text-align: center;
    padding: 3.2rem 0 4.3rem 0;

    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;
    }
`

export const EarlyAccessWrapper = styled.div`
    @media screen and (min-width: 1000px) {
        text-align: left;
    }
`

export const EarlyAccessH2 = styled.h2`
    font-family: var(--headings-font);
    font-weight: var(--headings-font-bold);
    font-size: 1.25rem;
    color: var(--light-grayish-blue);

    @media screen and (min-width: 768px) {
        font-size: 1.4rem;
    }

    @media screen and (min-width: 1000px) {
        font-size: 1.7rem;
    }
`

export const EarlyAccessP = styled.p`
    font-family: var(--body-font);
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    line-height: 1.3;
    width: 90%;
    margin: 1.2rem auto 2rem auto;
    color: var(--light-grayish-blue);

    @media screen and (min-width: 768px) {
        width: 80%;
        font-size: 1.1rem;
        margin: 1.6rem auto 2.4rem auto;
    }

    @media screen and (min-width: 1000px) {
        width: 70%;
        font-size: 1.05rem;
        margin: 1.3rem 0 0rem 0;
    }
`

export const EarlyAccessForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 50%;
    }
`

export const EarlyAccessFormInput = styled.input`
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 0.6rem;
    color: var(--light-gray);

    :focus {
        border: 0.5px solid red;
    }

    @media screen and (min-width: 1000px) {
        padding: 0.8rem;
        width: 100%;
    }
`

export const EarlyAccessFormLabel = styled.label`
    color: var(--light-gray);
    font-size: 0.8rem;
    text-align: left;
    display: ${({seeFormLabel}) => (seeFormLabel ? "block" : "none")};

    @media screen and (min-width: 768px) {
        font-size: 0.9rem;
    }
`

export const EarlyAccessFormSubmit = styled.input`
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 0.6rem;
    margin-top: 0.5rem;
    background-color: var(--bright-blue);
    color: var(--light-grayish-blue);
    font-family: var(--body-font);
    font-size: 0.7rem;
    cursor: pointer;
    transition: var(--transition);

    :hover {
        background-color: #6c91f8;
    }

    @media screen and (min-width: 768px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 1100px) {
        width: 50%;
        padding: 0.8rem;
    }
`