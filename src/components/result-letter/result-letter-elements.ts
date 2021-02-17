/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---Routing---> */
import { Link } from 'react-router-dom';

/* <---Global colors---> */
import { 
    lightBlue, 
    mattBlack 
} from '../../shared/styles/global-variables';

export const LinkContainer = styled(Link)`
    text-decoration: none;
    width: 90%;
    transition: all .2s ease-in-out;
    @media (min-width: 1280px) {
        &:hover {
            transform: scale( 1.05 );
        };
    };
`;

export const CardContainer = styled.div`
    background-color: ${mattBlack};
    margin-bottom: 1rem;  
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const CardInfo = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    padding-top: .5rem;
    padding-bottom: 1rem; 
`;

export const CardTitle = styled.h3`
    margin: 0;
    color: white;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;
    margin: 0 5%;
`;

export const CardSubtitle = styled.span`
    color: ${lightBlue};
    margin: 0 5%;
`;