import React, {useEffect, useState} from 'react';
import { BigLebowski, DetailsBigLebowski, DetailsTopWave, DetailsContainer, DetailsImg, DetailsWrapper, DetailsH2, DetailsP, DetailsBtn, DetailsCard, DetailsCardImg, DetailsCardP, DetailsCardWrapper, DetailsCardWrapperImg, DetailsCardWrapperText,DetailsCardName, DetailsCardTitle } from "./DetailsStyle";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Details = (props) => {

    const [seeMobileWave, setSeeMobileWave] = useState("./images/bg-curve-mobile.svg");

    const responsiveWave = () => {
        if (window.scrollY > 768) {
            setSeeMobileWave("./images/bg-curve-desktop.svg");
        } else {
            setSeeMobileWave("./images/bg-curve-mobile.svg");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', responsiveWave);
    });

    const displayBtnMessageOnClick = () => {
        alert("The button is just for show");
    };


    return (
        <BigLebowski>
            <DetailsTopWave src={seeMobileWave} />
            <DetailsBigLebowski>
            <DetailsContainer>
                <DetailsImg src="./images/illustration-2.svg" />
                <DetailsWrapper>
                    <DetailsH2>{props.detailsHeader}</DetailsH2>
                    <DetailsP>{props.detailsParagraphA}</DetailsP>
                    <DetailsP>{props.detailsParagraphB}</DetailsP>
                    <DetailsBtn onClick={displayBtnMessageOnClick}>{props.detailsBtn} &nbsp; <BsFillArrowRightCircleFill /></DetailsBtn>
                    <DetailsCard>
                        <DetailsCardImg src="./images/icon-quotes.svg" />
                        <DetailsCardP>{props.detailsCardParagraph}</DetailsCardP>
                        <DetailsCardWrapper>
                            <DetailsCardWrapperImg src="./images/avatar-testimonial.jpg" />
                            <DetailsCardWrapperText>
                                <DetailsCardName>{props.detailsCardName}</DetailsCardName>
                                <DetailsCardTitle>{props.detailsCardTitle}</DetailsCardTitle>
                            </DetailsCardWrapperText>
                        </DetailsCardWrapper>
                    </DetailsCard>
                </DetailsWrapper>
            </DetailsContainer>
        </DetailsBigLebowski>
        </BigLebowski>
    )
}

export default Details;