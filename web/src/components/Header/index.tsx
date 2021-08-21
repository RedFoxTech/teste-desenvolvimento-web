import React from 'react';

import SearchInput from '../SearchInput';

import logo from '../../assets/pokebola.png'

const Header: React.FC = () => {
    return (
        <header className="header-container">
          <SearchInput />

          <section className="logo-container">
              <h1 className="text-xl md:text-4xl text-yellow-400 font-bold text-shadow-blue">
                  Pokedex
              </h1>

              <img
                className="w-16 pl-4 md:w-20 md:pl-4"
                src={logo} 
                alt="logo"
              />
          </section>
        </header>
    );
};

export default Header;