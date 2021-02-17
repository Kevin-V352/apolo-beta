/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---Global colors---> */
import { 
    white, 
    lightBlue
} from '../../shared/styles/global-variables';

export const ResultsContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    justify-items: center;
    grid-template-columns: 100%;
    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 50%);
    };
    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 33.3%);
    };
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 25%);  
    };
`;

export const StartContainer = styled.div`
    width: 100%;
`;  

export const StartTitle = styled.h1`
    font-family: 'Megrim', cursive;
    font-size: 5rem;
    color: ${lightBlue};
    margin: 0;
    text-align: center;
`;

export const StartSubtitle = styled.h3`
    text-align: center;
    color: ${white};
    margin: 0;
`;