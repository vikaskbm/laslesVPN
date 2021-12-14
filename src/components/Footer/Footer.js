import React from 'react'

import logo from "../../assets/logo.svg";

import {
    Section,
    FooterMain,
    FooterLeft,
    FooterLogo,
    FooterCopyright,
    FooterRight,
    FooterColumn,
    FooterLinks
} from './Footer.elements';

import {
    SiteLogo,
    SiteName,
    BoldSpan,
    Div,
    Paragraph,
    MediumSpan,
    Heading2,
    Anchor
} from '../commonStyles';

const Footer = () => {
    return (
        <Section>
            <FooterMain>
                <FooterLeft>
                    <FooterLogo>
                    <SiteLogo src={logo} alt="logo" />
                        <SiteName to="/">
                            Lasles <BoldSpan>VPN</BoldSpan>
                        </SiteName>
                    </FooterLogo>
                    <Div>
                        <Paragraph>
                            <MediumSpan>LaslesVPN</MediumSpan> is a private virtual network that has unique features and has high security.
                        </Paragraph>
                    </Div>
                    <FooterCopyright>©2021LaslesVPN</FooterCopyright>
                </FooterLeft>
                <FooterRight>
                    <FooterColumn>
                        <Heading2>Product</Heading2>
                        <FooterLinks>
                            <Anchor to="/">Download</Anchor>
                            <Anchor to="/">Pricing</Anchor>
                            <Anchor to="/">Locations</Anchor>
                            <Anchor to="/">Server</Anchor>
                            <Anchor to="/">Countries</Anchor>
                            <Anchor to="/">Blog</Anchor>
                        </FooterLinks>
                    </FooterColumn>
                    <FooterColumn>
                        <Heading2>Engage</Heading2>
                        <FooterLinks>
                            <Anchor to="/">LaslesVPN ?</Anchor>
                            <Anchor to="/">FAQ</Anchor>
                            <Anchor to="/">Tutorials</Anchor>
                            <Anchor to="/">About Us</Anchor>
                            <Anchor to="/">Privacy Policy</Anchor>
                            <Anchor to="/">Terms of Service</Anchor>
                        </FooterLinks>
                    </FooterColumn>
                    <FooterColumn>
                        <Heading2>Earn Money</Heading2>
                        <FooterLinks>
                            <Anchor to="/">Affiliate</Anchor>
                            <Anchor to="/">Become Partner</Anchor>
                        </FooterLinks>
                    </FooterColumn>
                </FooterRight>
            </FooterMain>
        </Section>
    )
}

export default Footer
