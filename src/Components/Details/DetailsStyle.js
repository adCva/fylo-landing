import styled from "styled-components";

export const BigLebowski = styled.section`
    margin-top: 6rem;

    @media screen and (min-width: 1100px) {
        margin-top: 8rem;
    }
`

export const DetailsTopWave = styled.img`
    width: 100%;
    height: 50px;
    margin-bottom: -0.5rem;

    @media screen and (min-width:768px) {
        height: 100px;
    }

    @media screen and (min-width: 1100px) {
        height: 130px;
    }
`

export const DetailsBigLebowski = styled.div`
    background-color: var(--light-grayish-blue);
`

export const DetailsContainer = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1100px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 1.5rem 0;
    }
`

export const DetailsImg = styled.img`
    width: 80%;
    margin: 0 0 3rem 0;

    @media screen and (min-width: 768px) {
        width: 70%;
        margin: 0 0 6rem 0;
    }

    @media screen and (min-width: 1100px) {
        order: 1;
        width: 38%;
    }
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1100px) {
        align-items: flex-start;
    }
`

export const DetailsH2 = styled.h2`
    font-family: var(--headings-font);
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    text-align: center;
    color: var(--very-dark-blue);
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
        font-size: 1.6rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 2.2rem;
    }
`

export const DetailsP = styled.p`
    font-family: var(--body-font);
    font-weight: var(--body-font-regular);
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: var(--desaturated-blue);

    :first-of-type {
        margin-bottom: 0.7rem;
    }

    @media screen and (min-width: 768px) {
        width: 85%;
        font-size: 1.15rem;
    }

    @media screen and (min-width: 1100px) {
        width: 65%;
        font-size: 1rem;
    }
`

export const DetailsBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    margin: 3rem auto 4rem auto;
    font-family: var(--body-font);
    font-size: 1rem;
    color: var(--moderate-cyan);
    position: relative;
    cursor: pointer;
    transition: var(--transition);


    ::after {
        content: "________________________";
        position: absolute;
        top: 10px;
    }

    :hover {
        color: #6ed6c5;
    }


    @media screen and (min-width: 768px) {
        font-size: 1.15rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 1rem;
        margin: 1rem 0 3rem 0;
    }
`

export const DetailsCard = styled.div`
    width: 90%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 1.5rem;
    margin-bottom: 5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media screen and (min-width: 768px) {
        width: 63%;
        padding: 2rem;
    }

    @media screen and (min-width: 1100px) {
        width: 45%;
        padding: 1.5rem;
    }
`

export const DetailsCardImg = styled.img`

`

export const DetailsCardP = styled.p`
    font-family: var(--body-font);
    font-size: 0.85rem;
    letter-spacing: -0.5px;
    line-height: 1.3;
    color: var(--very-dark-blue);
    margin-top: 0.4rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 0.9rem;
    }
`

export const DetailsCardWrapper = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: left;
    align-items: center;
`

export const DetailsCardWrapperImg = styled.img`
    border-radius: 50%;
    height: 35px;
    margin-right: 0.7rem;

    @media screen and (min-width: 768px) {
        height: 47px;
    }

    @media screen and (min-width: 1100px) {
        height: 33px;
    }
`

export const DetailsCardWrapperText = styled.div``

export const DetailsCardName = styled.h5`
    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 1rem;
    }
`

export const DetailsCardTitle = styled.h6`
    color: var(--desaturated-blue);
    font-size: 0.6rem;
    font-family: var(--body-font);
    margin-top: 0.2rem;

    @media screen and (min-width: 768px) {
        font-size: 0.8rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 0.7rem;
    }
`