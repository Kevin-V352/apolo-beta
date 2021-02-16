/* <---Styled components dependencies---> */
import { createGlobalStyle } from 'styled-components'

/* <---Global colors---> */
import { backgroundColor } from '../styles/global-variables';

const GlobalStyles = createGlobalStyle`

    html {
        background: ${backgroundColor};
    }

    body {
        margin: 0;
        font-family: 'Red Hat Text', sans-serif;
    }

    * {
        -webkit-tap-highlight-color: transparent;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }  
`;
export default GlobalStyles;