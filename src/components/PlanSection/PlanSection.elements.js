import styled from 'styled-components';

export const Section = styled.div`
	background: #f6f6f6;
`;

export const SectionHeader = styled.div`
    max-width: 90%;
	margin: auto;
	text-align: center;
	padding: 3em 0;
    
    & h1 {
        font-weight: 500;
    }
`;

export const SectionBody = styled.div`
    width: 80%;
	margin: auto;
	display: flex;
	justify-content: space-evenly;
    
    @media screen and (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Plan = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	border: 2px solid #dddddd;
	border-radius: 10px;
	transition: 0.3s;
	padding: 4em;
    
	&:hover {
        border: 2px solid #f53838;
    }
	
    @media screen and (max-width: 960px) {
		margin-bottom: 2em;
	}
    
    @media screen and (max-width: 480px) {
		padding: 2em;
	}
`;

export const PlanImg = styled.img`
	margin: 2em 0;
`;

export const CheckImg = styled.img`
	margin-right: 1em;
`;

export const PlanMenu = styled.div`
	margin: 2em 0;

    & p {
        line-height: 0.8em;
    }
`;

export const PlanElement = styled.div`
	display: flex;
`;

export const PlanSelect = styled.div`
	width: 100%;
	text-align: center;
	margin-top: auto;

    @media screen and (max-width: 480px) {
		& h2 {
            font-size: 3rem;
        }
	}
`;

export const PlanSelectButton = styled.button`
	font-family: inherit;
	margin-top: 25px;
	background: #f53838;
	border: none;
	color: white;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	font-weight: bold;
    
    border-radius: 50px;
	padding: 1em;
	width: 100%;
	height: 4em;
`;

