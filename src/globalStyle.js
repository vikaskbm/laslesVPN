import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

    body {
        margin: 0;
        padding: 0;
        font-family: "Rubik", sans-serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: #0b132a;
    }

    ul {
        list-style-type: none;
    }

    p {
        line-height: 30px;
        color: #4f5665;
    }

    @media screen and (max-width: 960px) {
            body {
            overflow-x: hidden;
        }
    }

    @media screen and (max-width: 480px) {
        p, h2 {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyle;