import styled from "styled-components";

export const FooterBigLebowski = styled.section`
    background-color: var(--very-dark-blue);
`

export const FooterMainContainer = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;
    padding: 4rem 1rem 3rem 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1100px) {
        display: flex;
        padding: 5rem 0 3rem 0;
    }
` 

export const FooterLogo = styled.img`
    width: 50%;
    margin-bottom: 2.5rem;
    
    @media screen and (min-width: 768px) {
        width: 32%;
        margin-bottom: 2.3rem;
    }

    @media screen and (min-width: 1100px) {
        width: 12%;
        margin-bottom: 2rem;
    }
` 

export const FooterContainer = styled.div`
    @media screen and (min-width: 1100px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`

export const FooterContact = styled.div``

export const FooterContactWrapper = styled.div`
    display: flex;
    align-items: center;

    :last-of-type {
        margin-top: 0.8rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 1.1rem;
    }
`

export const FooterContactWrapperLogo = styled.img`
    margin-right: 1rem;
`

export const FooterContactText = styled.p`
    font-family: var(--body-font);
    font-weight: var(--body-font-regular);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    color: var(--light-grayish-blue);

    @media screen and (min-width: 768px) {
        font-size: 1.14rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 1rem;
    }
`

export const FooterList = styled.div`
    margin: 3.5rem 0;

    @media screen and (min-width: 768px) {
        display: flex;
        margin: 3.9rem 0 4.5rem 0;
    }

    @media screen and (min-width: 1100px) {
        margin: 0;
    }
`

export const FooterListWrapper = styled.ul`
    list-style-type: none;
    

    :last-of-type {
        margin-top: 3rem;
    }

    @media screen and (min-width: 768px) {
        :last-of-type {
            margin-top: 0;
            margin-left: 4rem;
        }
    }

    @media screen and (min-width: 768px) {
        :last-of-type {
            margin-left: 8rem;
        }
    }
`

export const FooterLink = styled.li`
    font-family: var(--body-font);
    letter-spacing: 0.5px;
    color: var(--light-grayish-blue);
    margin-bottom: 0.8rem;
    cursor: pointer;
    transition: var(--transition);

    :hover {
        color: var(--bright-blue);
    }


    @media screen and (min-width: 768px) {
        font-size: 1.15rem;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 1100px) {
        font-size: 1rem;
    }
`

export const FooterMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterMediaLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--light-grayish-blue);
    border-radius: 50%;
    padding: 0.5rem;
    color: var(--light-grayish-blue);
    cursor: pointer;
    transition: var(--transition);

    :nth-child(even) {
        margin: 0 1rem;
    }

    :hover {
        color: var(--bright-blue);
        border: 1px solid var(--bright-blue);
    }

    @media screen and (min-width: 768px) {
        padding: 0.6rem;
    }

    @media screen and (min-width: 1100px) {
        padding: 0.5rem;
    }
`