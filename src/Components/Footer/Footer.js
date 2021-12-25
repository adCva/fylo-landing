import React from 'react';
import { FooterBigLebowski, FooterMainContainer, FooterLogo, FooterContainer, FooterContact, FooterContactWrapper, FooterContactWrapperLogo, FooterContactText, FooterList, FooterListWrapper, FooterLink, FooterMedia, FooterMediaLink } from "./FooterStyle";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = (props) => {

    const fakeLinkOnClick = () => {
        alert("The button is just for show");
    };

    return (
        <FooterBigLebowski>
            <FooterMainContainer>
                <FooterLogo src="./images/logo-footer.png"/>
                <FooterContainer>
                    <FooterContact>
                        <FooterContactWrapper>
                            <FooterContactWrapperLogo src="./images/icon-phone.svg" />
                            <FooterContactText>{props.phone}</FooterContactText>
                        </FooterContactWrapper>
                        <FooterContactWrapper>
                            <FooterContactWrapperLogo src="./images/icon-email.svg" />
                            <FooterContactText>{props.email}</FooterContactText>
                        </FooterContactWrapper>
                    </FooterContact>
                    <FooterList>
                        <FooterListWrapper>
                            <FooterLink onClick={fakeLinkOnClick}>About Us</FooterLink>
                            <FooterLink onClick={fakeLinkOnClick}>Jobs</FooterLink>
                            <FooterLink onClick={fakeLinkOnClick}>Press</FooterLink>
                            <FooterLink onClick={fakeLinkOnClick}>Blog</FooterLink>
                        </FooterListWrapper>
                        <FooterListWrapper>
                            <FooterLink onClick={fakeLinkOnClick}>Contact Us</FooterLink>
                            <FooterLink onClick={fakeLinkOnClick}>Terms</FooterLink>
                            <FooterLink onClick={fakeLinkOnClick}>Privacy</FooterLink>
                        </FooterListWrapper>
                    </FooterList>
                    <FooterMedia>
                        {/* An external link isn't a route in this context, so no react-route, just an a tag */}
                        <FooterMediaLink href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FaFacebookF /></FooterMediaLink>
                        <FooterMediaLink href="https://twitter.com/" rel="noreferrer" target="_blank"><FaTwitter /></FooterMediaLink>
                        <FooterMediaLink href="https://www.instagram.com/" rel="noreferrer" target="_blank"><FaInstagram /></FooterMediaLink>
                    </FooterMedia>
                </FooterContainer>
            </FooterMainContainer>
        </FooterBigLebowski>
    )
}

export default Footer;