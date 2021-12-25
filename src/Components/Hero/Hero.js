import React, { useState } from 'react';
import { HeroContainer, HeroImg, HeroWrapper, HeroH1, HeroP, HeroForm, HeroFormGroup, HeroInput, HeroLabel, HerpFormSubmit } from "./HeroStyle";

const Hero = (props) => {

    const [seeLabel, setSeeLabel] = useState(false);

    const displayFormLabel = event => {
        event.preventDefault();
        setSeeLabel(true)

        setTimeout(() => {
            setSeeLabel(false)
        },5000)
    }


    return (
        <HeroContainer>
            <HeroImg src="./images/illustration-1.svg" />
            <HeroWrapper>
                <HeroH1>{props.heroTitle}</HeroH1>
                <HeroP>{props.heroDescription}</HeroP>
                <HeroForm onSubmit={displayFormLabel}>
                    <HeroFormGroup>
                        <HeroInput type="text" name="email" placeholder="Enter your email..." />
                        <HeroLabel seeLabel={seeLabel}>Please check your email</HeroLabel>
                    </HeroFormGroup>
                    <HerpFormSubmit type="submit" value="Get Started" />
                </HeroForm>
            </HeroWrapper>
        </HeroContainer>
    )
}


export default Hero;