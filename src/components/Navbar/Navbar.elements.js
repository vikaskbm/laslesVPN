import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Section = styled.div`
	height: 130px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	margin: auto;
    

	@media screen and (max-width: 960px) {
		width: 70%;
		height: 100px;
	}

	
    @media screen and (max-width: 420px) {
		width: 50%;
		height: 100px;
	}

`;


export const Brand = styled.div`
    flex: 1;
    display: flex;
    /* align-items: center; */
`

export const NavbarMenu = styled.ul`
    display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top:80px;
		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: white;
	}
`;

export const NavItem = styled.li`
	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const NavLink = styled(Link)`
	margin-left: 40px;
	font-size: 16px;
	color: #4f5665;

	@media screen and (max-width: 960px) {
		margin: auto;
		padding: 2rem 0rem;
		width: 100%;
		display: table;
	}
`;

export const NavUser = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media screen and (min-width: 1000px) {
		margin-left: 7rem;
	}
	
	@media screen and (max-width: 960px) {
		flex-direction: column;
	}
`

export const SignIn = styled.button`
	height: 65px;
	width: 150px;
	background-color: transparent;
	border: 0;
	cursor: pointer;
`;

export const SignUp = styled.button`
	height: 45px;
	width: 150px;
	border: 2px solid #f53855;
	background-color: white;
	border-radius: 25px;
	text-align: center;
	font-weight: 500;
	cursor: pointer;
    color: #f53855;
	font-size: 16px;

    @media screen and (max-width: 480px) {
        width: 100%;
		padding: 0 2em;
        font-size: 0.9rem;
	}
`

export const MobileView = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 1rem;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
	}
`;