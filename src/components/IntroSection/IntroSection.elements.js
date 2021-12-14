import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	width: 80%;
	margin: auto;
	padding-bottom: 4em;
	align-items: center;
    
    @media screen and (max-width: 960px) {
		flex-direction: column;
	}
`;

export const SectionLeft = styled.div`
	text-align: center;
    
    @media screen and (max-width: 960px) {
		margin: 0;
	}
`;

export const SectionRight = styled.div`
	width: 95%;
    
    @media screen and (max-width: 960px) {
		display: none;
	}
`;

export const SectionHeading = styled.h1`
	font-weight: 500;
	font-size: 50px;
	line-height: 70px;
	width: 90%;
	margin-bottom: 15px;
    
    @media screen and (max-width: 960px) {
		margin: auto;
	}
`;

export const SectionText = styled.p``;


export const SectionButton = styled.button`
	font-family: inherit;
	margin-top: 25px;
	background: #f53838;
	width: 250px;
	height: 60px;
	border: none;
	border-radius: 10px;
	color: white;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	font-weight: bold;
	transition: 0.5s;
`;

export const SectionIllustration = styled.img`
    margin: auto;
`;