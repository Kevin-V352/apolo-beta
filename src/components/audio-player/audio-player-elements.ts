/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import { 
    IoPlay, 
    IoPauseOutline,
    IoRefreshOutline
} from 'react-icons/io5';

/* <---Global colors---> */
import { 
    white, 
    lightBlue,
    transparentGray 
} from '../../shared/styles/global-variables';

/* <---Props types---> */
type Progress =  {
    width: number;
};

type Icon = {
    color: string;
};

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ProgressBar = styled.div`
    background-color: ${lightBlue};
    height: .2rem;
    width: ${(props: Progress) => props.width}%;
    transition: .3s;
`;

export const PlayerButtons = styled.div`
    display: flex; 
    justify-content: space-around;
    margin-top: .5rem;
`;

export const PlayerButton = styled.button`
    background-color: transparent;
    border: none;
    outline: inherit;
    cursor: pointer;
    border-radius: 100%;
    padding: .4rem;
    background-position: center;
    transition: background 0.8s;
    &:hover {
        background-image: radial-gradient(circle, transparent 1%, ${transparentGray} 1%);
        background-position: center;
        background-size: 15000%;
    }
    &:active {
        transition: 0s;
        background-color: ${transparentGray};
        background-size: 100%;
    }
`;

export const PauseIcon = styled(IoPauseOutline)`
    color: ${(props: Icon) => props.color};
    font-size: 200%;
`;

export const PlayIcon = styled(IoPlay)`
    color: ${(props: Icon) => props.color};
    font-size: 200%;
`;

export const ReloadIcon = styled(IoRefreshOutline)`
    color: ${white};
    font-size: 200%;
    &:active {
        color: ${lightBlue};
    };
`;
