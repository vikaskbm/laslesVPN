import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

import { 
    Section, 
    Brand,
    NavbarMenu,
    NavItem,
    NavLink,
    NavUser,
    SignIn,
    SignUp,
    MobileView
} from './Navbar.elements';
import { SiteLogo, SiteName, BoldSpan } from '../commonStyles';

import logo from "../../assets/logo.svg";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return ( 
        <Section>
            <Brand>
                <SiteLogo src={logo} />
                <SiteName to="/">
                    Lasles
                    <BoldSpan>VPN</BoldSpan>
                </SiteName>
            </Brand>
            <MobileView onClick={handleClick}>
                { click ? <FaTimes/> : <FaBars/> }
            </MobileView>
            <NavbarMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLink to="/">
                        Pricing
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">
                        Testimonials
                    </NavLink>
                </NavItem>
                <NavUser>
                    <SignIn to="/">Sign In</SignIn>
                    <SignUp to="/">
                        <BoldSpan>Sign Up</BoldSpan>
                    </SignUp>
                </NavUser>
            </NavbarMenu>
        </Section> 
    )
}

export default Navbar;