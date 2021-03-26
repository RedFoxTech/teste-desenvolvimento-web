import React, { useState } from 'react';
import { searchDescription } from '../helpers/searchers.js';
// import TransactionsDataService from '../services/TransactionsService';

import { Navbar } from 'react-materialize';

const SearchBar = ({ array, onDataChange }) =>
{
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearchTransaction = (searchName) =>
  {
    let transactionsSearchList = searchDescription(searchName, array);

    if (transactionsSearchList.length > 0)
    {
      onDataChange(searchName, transactionsSearchList);
    }
  };

  return (
    <Navbar
      className="brown lighten-1 z-depth-3"
      alignLinks="right"
      id="mobile-nav"
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      search
      placeholder="Buscar por descrição"
      value={searchTerm}
      onChange={(event) =>
      {
        if (event.target.value.length >= 3)
        {
          setSearchTerm(event.target.value);
          onChangeSearchTransaction(event.target.value);
        } else
        {
          setSearchTerm(event.target.value);
          onDataChange('', []);
        }
      }}
    ></Navbar>
  );
};

export default SearchBar;

