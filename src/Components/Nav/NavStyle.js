import styled from 'styled-components';

export const NavContainer = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;

    @media (min-width: 768px) {
        padding: 2.3rem 0;
    }
`

export const IconContainer = styled.img`
    height: 27px;

    @media (min-width: 768px) {
        height: 35px;
    }

    @media (min-width: 1100px) {
        height: 39px;
    }
`

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
`

export const NavLink = styled.li`
    font-family: var(--body-font);
    font-weight: var(--body-font-regular);
    font-size: 1rem;
    letter-spacing: -0.5px;
    margin-left: 1rem;
    color: var(--very-dark-blue);
    transition: var(--transition);
    cursor: pointer;

    :hover {
        transform: scaleX(0.9)
    }

    :first-of-type {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        margin-left: 3rem;

        :first-of-type {
            margin-left: 0;
        }
    }
`