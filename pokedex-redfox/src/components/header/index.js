import React from 'react';
import {Header} from './styles';
import FoxLogo from '../../img/redfox-logo.png';
import { useHistory } from 'react-router-dom'
import PokeHomeIcon from '../../img/pokemon-home.png'



function HeaderFox(props) {

  const history = useHistory()

  const handleHomeButton = () => {
    history.push('/')
  }

    return (
      <Header>
       <img src={FoxLogo} alt="Fox-Logo"/>
       <button onClick={handleHomeButton}><img src={PokeHomeIcon} alt="Pokeball"></img></button>

      </Header>
    );
  }
  export default HeaderFox;