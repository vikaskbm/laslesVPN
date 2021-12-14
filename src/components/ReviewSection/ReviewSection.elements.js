import styled from "styled-components";

export const Section = styled.div`
	background-color: #f6f6f6;
	padding-bottom: 5em;

    @media screen and (max-width: 480px) {
		padding-bottom: 10em;
	}
`

export const ReviewText = styled.div`
	text-align: center;
	padding: 2em 0;

    & h2 {
        font-size: 2rem;
    }

    @media screen and (max-width: 960px) {
		& p {
            width: 80%;
            margin: auto;
        }
	}
`

export const ReviewBody = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const ReviewButton = styled.div`
    margin: 80px auto ;
    display: flex;
    justify-content: space-between;
    width: 80%;
`

export const ScrollItem = styled.div`
    background-color: #f53838;
    width: 45px;
    height: 15px;
    border-radius: 20px;
    align-self: end;
    margin-bottom: 1.5rem;
`;

export const Circle = styled.div`
    background-color: #dde0e4;
    height: 15px;
    width: 15px;
    margin-left: 2px;
    border-radius: 50%;
    align-self: end;
    margin-bottom: 1.5rem;
`;

export const BorderedCircle = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid #f53838;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-right: 5px;
`;

export const RedCircle = styled.button`
    background-color: #f53838;
    border: 2px solid #f53838;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexDiv = styled.button`
    display: flex;
    background: trasnparent;
    border: 0px;
    background-color: inherit;
`;

