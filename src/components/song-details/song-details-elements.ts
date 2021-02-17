/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---Custom Scrollbar---> */
import Scrollbar from 'react-scrollbars-custom';

/* <---Global colors---> */
import { 
    white, 
    mattBlack 
} from '../../shared/styles/global-variables';

type CSBprops = {
    customheight: number;
}

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: center;
        align-items: inherit;     
    }
`;

export const LoaderContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DetailsHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: min-content;
    @media (min-width: 1280px) {
        width: 36%;
        margin-right: 3rem;
    }
    @media (min-width: 1440px) {
        width: 48%;
    }  
`;

export const DetailsImg = styled.img`
    width: 100%;
`;

export const PreviewInfo = styled.span`
    background-color: ${mattBlack};
    color: ${white};
    padding: .5rem;
    border-radius: 50px;
    margin-top: 1rem;
`;

export const DetailsInfo = styled.div`
    width: 90%;
    padding-bottom: 1rem;
    @media (min-width: 1280px) {
        width: 40%;
    };
`;

export const DetailsTitle = styled.h1`
    color: ${white};
    text-align: center;
    margin: 1rem 0;
    @media (min-width: 1280px) {
        background-color: rgba(0, 0, 0, .6);
        border-radius: 5px;
        margin: 0;    
    }
`;

export const DetailsSubtitle = styled.h3`
    color: ${white};
`;

export const DetailsLyrics = styled.span`
    color: ${white};
`;

export const CustomScrollbar = styled(Scrollbar)`
    margin: 0 !important;
    width: 100% !important;
    height: 30vh !important;
    @media (min-width: 1280px) {
        height: ${(props: CSBprops) => props.customheight}px !important;   
    }
`;



