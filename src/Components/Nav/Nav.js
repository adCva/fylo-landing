import React from 'react';
import { NavContainer, IconContainer, NavList, NavLink } from "./NavStyle";

const Nav = () => {

    const displayMessageOnClick = () => {
        alert("The button is just for show");
    }

    return (
        <NavContainer>
            <IconContainer src="./images/logo.svg" />
            <NavList>
                <NavLink onClick={displayMessageOnClick}>Features</NavLink>
                <NavLink onClick={displayMessageOnClick}>Team</NavLink>
                <NavLink onClick={displayMessageOnClick}>Sign In</NavLink>
            </NavList>
        </NavContainer>
    )
}

export default Nav