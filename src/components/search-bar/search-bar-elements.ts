/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import { IoSearch } from 'react-icons/io5';

/* <---Global colors---> */
import { 
    white, 
    mattBlack,
    lightBlue,
    transparentGray,
    backgroundColor 
} from '../../shared/styles/global-variables';

/* <---Toast notification---> */
import { ToastContainer } from 'react-toastify';

export const SearchContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    position: sticky;
    top: 0;
    background: ${backgroundColor};
    z-index: 1;
`;

export const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border: 2px solid ${white};
    border-radius: 15px;
    vertical-align: middle;
    height: 2.5rem;
    width: 90%;
    overflow: hidden;
    @media (min-width: 600px) {
        height: 2.5rem;
        width: 50%; 
    } 
    @media (min-width: 900px) {
        height: 2.5rem;
        width: 30%; 
    }     
`;

export const SearchInput = styled.input`
    width: 85%;
    height: 86%;
    padding-left: 5%;
    font-size: 20px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: transparent;
    border: none;
    color: ${white};
    &:focus {
        outline: none;
    }
`;

export const SearchButton = styled.button`
    width: 15%;
    height: 100%;
    outline: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
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

export const SearchIcon = styled(IoSearch)`
    color: white;
    font-size: 200%
`;

export const CustomAlert = styled(ToastContainer).attrs({
    toastClassName: 'toast',
    progressClassName: 'progress'
})`
    .toast {
        font-family: 'Red Hat Text', sans-serif;
        background-color: ${mattBlack};
        color: ${white};
    }
    .progress {
        background-color: ${lightBlue};
    }
`;

