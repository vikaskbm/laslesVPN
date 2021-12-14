import React from 'react'
import {Section, SectionLeft, SectionRight, SectionHeading, SectionText, SectionButton, SectionIllustration} from './IntroSection.elements';
import { BoldSpan, MediumSpan } from '../commonStyles';
import illustration from "../../assets/illustration.svg";

const IntroSection = () => {
    return (
        <Section>
            <SectionLeft>
                <SectionHeading>
                    Want anything to be easy with <BoldSpan>LaslesVPN</BoldSpan>
                </SectionHeading>
                <SectionText>
                    Provide a network for all your needs with ease and fun using{" "}
                    <MediumSpan>LaslesVPN</MediumSpan> discover interesting features from us.
                </SectionText>
                <SectionButton>Get Started</SectionButton>
            </SectionLeft>

            <SectionRight>
            <SectionIllustration src={illustration} alt="illustration"/>
            </SectionRight>
        </Section>
    )
}

export default IntroSection
