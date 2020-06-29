import React from 'react';
import {Header, NavBar, NavItem} from './styles';
import FoxLogo from '../../img/redfox-logo.png';


function HeaderFox() {

    return (
      <Header>
       <img src={FoxLogo} alt="Fox-Logo"/>
       <NaviBar>
         <NaviItem icon="🔥" />
         <NaviItem icon="🍃" />
         <NaviItem icon="💧" />
       </NaviBar>
      </Header>
    );
  }

function NaviBar (props) {
  return (
    <div>
      <NavBar>
        <ul>
          {props.children}
        </ul>
      </NavBar>
    </div>
  )
}

function NaviItem (props){
  return (
    <NavItem>
      <a href="#">
        {props.icon}
      </a>
    </NavItem>

  );
}
  export default HeaderFox;