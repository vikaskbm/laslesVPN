import styled from "styled-components";

export const Section = styled.div`
	background-color: #e7e7e7;
`

export const FooterMain = styled.div`
	width: 80%;
	display: flex;
	margin: auto;
	justify-content: space-around;
	padding: 5em 0 3em 0;

    @media screen and (max-width: 960px) {
		flex-direction: column;
		padding: 3em 0 2em 0;
	}
`

export const FooterLeft = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`

export const FooterLogo = styled.div`
	display: flex;
	align-items: center;
`

export const FooterCopyright = styled.p`
	color: #afb5c0;

    @media screen and (max-width: 960px) {
        text-align: center;
	}
`


export const FooterRight = styled.div`
	flex: 2;
	display: flex;
	justify-content: space-around;

    & h2 {
        margin: 0 0 1.5em 0;
    }

    @media screen and (max-width: 960px) {
		margin-top: 2em;

        & h2 {
            font-size: 1rem;
        }
	}
`

export const FooterColumn = styled.div`
    @media screen and (max-width: 960px) {
		align-items: center;
		flex: 1;
	}
`

export const FooterLinks = styled.div`
    display: flex;
	flex-direction: column;

    & a {
        margin-bottom: 2em;
	    color: #4f5665;
    }
`