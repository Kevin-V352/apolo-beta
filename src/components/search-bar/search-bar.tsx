/* <---React---> */
import React, { useState, useContext, FC, KeyboardEvent } from 'react';

/* <---Styled components---> */
import { 
  SearchBox, 
  SearchIcon,
  SearchInput, 
  SearchButton,
  SearchContainer,
  CustomAlert
} from "./search-bar-elements";

/* <---Interfaces---> */
import { ContextDefaultValue } from '../../shared/interfaces/globalInterfaces';

/* <---Routing---> */
import { 
  useHistory,
  useLocation 
} from 'react-router-dom';

/* <---Contex---> */
import AppContex from '../../context/AppContex';

/* <---Toast notification---> */
import { toast } from 'react-toastify';

const SearchBar: FC = (): JSX.Element => {

  const history = useHistory();
  const location = useLocation();
  const [input, setInput] = useState<string>('');
  const { state, getSongsList } = useContext(AppContex) as ContextDefaultValue;

  const handlerSubmit = (): void => {
    if(input.trim() === '')  return alertInfo();
    if(location.pathname !== '/') history.push('/');
    getSongsList(input, state.token);
    setInput('');
  };

  const accesKey = (e: KeyboardEvent<HTMLInputElement>): void => {
    if(e.key === 'Enter') handlerSubmit();
  };

  const alertInfo = (): void => {
    toast.dark('Hmm, intenta escribir algo!', {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <>
      <SearchContainer>
        <SearchBox>
          <SearchInput 
            type='search'
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => accesKey(e)} 
            value={input}
          />
          <SearchButton onClick={handlerSubmit}>
            <SearchIcon/>
          </SearchButton>
        </SearchBox>
        <CustomAlert/>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
