/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---Global colors---> */
import { 
    white, 
    lightBlue
} from '../../shared/styles/global-variables';

export const ResultsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const StartContainer = styled.div`
    width: 90%;
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