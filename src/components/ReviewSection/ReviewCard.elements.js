import styled from "styled-components";

export const Section = styled.div`
    border: 2px solid #dddddd;
    border-radius: 10px;
    transition: 0.3s;
    width: 30em;
    min-height: 14rem;
    margin: auto;
    background-color: white;
    padding: 1.1em;

    margin-right: 30px;

    &:hover {
        border: 2px solid #f53838;
    }

    & p {
        margin: 0;
    }

    @media screen and (max-width: 960px) {
        margin: auto;
        margin-top: 25px;
        max-width: 90%;
        min-height: 8rem;

	}
`;

export const CardHeader = styled.div`
    display: flex;
	align-items: center;
	margin-bottom: 1em;
    & p {
        line-height: inherit;
    }
`;

export const ReviewProfile = styled.div`
    margin-left: 1rem;
`;

export const ReviewName = styled.p`
	font-size: 1.1rem;
	font-weight: 500;
	color: #0b132a;
`;

export const ReviewLocation = styled.p`
	font-size: 0.9rem;
`;

export const ReviewStar = styled.div`
    display: flex;
    margin-left: auto;
    align-self: start;
    padding-top: .5rem;
`;

export const CardBody = styled.p`
	color: #0b132a;
	font-size: 1rem;
	margin-top: 2em;
    
    @media screen and (max-width: 960px) {
        line-height: 1.3rem;
	}
`;