import React, { useState } from 'react';
import { EarlyAccessBigLebowski, EarlyAccessContainer, EarlyAccessWrapper, EarlyAccessH2, EarlyAccessP, EarlyAccessForm, EarlyAccessFormInput, EarlyAccessFormLabel, EarlyAccessFormSubmit } from "./EarlyAccessStyle"

const EarlyAccess = (props) => {

    const [seeFormLabel, setSeeFormLabel] = useState(false);


    const displayEarlyAcccesFormLabel = event => {
        event.preventDefault();
        setSeeFormLabel(true);

        setTimeout(() => {
            setSeeFormLabel(false)
        },5000)
    }

    return (
        <EarlyAccessBigLebowski>
            <EarlyAccessContainer>
                <EarlyAccessWrapper>
                    <EarlyAccessH2>{props.earlyAccessHeader}</EarlyAccessH2>
                    <EarlyAccessP>{props.earlyAccessParagraph}</EarlyAccessP>
                </EarlyAccessWrapper>
                <EarlyAccessForm onSubmit={displayEarlyAcccesFormLabel}>
                    <EarlyAccessFormInput type="text" name="earlyAccess" placeholder="email@example.com"/>
                    <EarlyAccessFormLabel seeFormLabel={seeFormLabel}>Please check your email</EarlyAccessFormLabel>
                    <EarlyAccessFormSubmit type="submit" value="Get Started For Free" />
                </EarlyAccessForm>
            </EarlyAccessContainer>
        </EarlyAccessBigLebowski>
    )
}


export default EarlyAccess;