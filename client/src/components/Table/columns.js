import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {
  selectFilter,
  Comparator,
  textFilter,
} from 'react-bootstrap-table2-filter';
import paginationFactory, {
  PaginationProvider,
} from 'react-bootstrap-table2-paginator';

const selectOptions = {
  'Teste 2': 'Teste 2',
  '04': '04',
  '01': '01',
};

export const columns = [
  {
    dataField: 'pokedex_number',
    text: 'Pokedex Number',
    filter: textFilter({ placeholder: 'Search' }),
  },
  {
    dataField: 'name',
    text: 'Name',
    filter: textFilter({ placeholder: 'Search' }),
  },
  {
    dataField: 'generation_id',
    text: 'Generation',
    filter: selectFilter({
      placeholder: 'Select',
      options: selectOptions,
      comparator: Comparator.LIKE,
    }),
  },
  {
    dataField: 'type_id_1',
    text: 'Type 1',
    filter: selectFilter({
      placeholder: 'Select',
      options: selectOptions,
      comparator: Comparator.LIKE,
    }),
  },
  {
    dataField: 'type_id_2',
    text: 'Type 2',
    filter: selectFilter({
      placeholder: 'Select',
      options: selectOptions,
      comparator: Comparator.LIKE,
    }),
  },
  {
    dataField: 'weather_id_1',
    text: 'Weather 1',
    formatter: (value, row) => (
      <span>{value === 1 && <span> false</span>}</span>
    ),
    filter: selectFilter({
      placeholder: 'Select',
      options: selectOptions,
      comparator: Comparator.LIKE,
    }),
  },
  {
    dataField: 'weather_id_2',
    text: 'Weather 2',
    filter: selectFilter({
      placeholder: 'Select',
      options: selectOptions,
      comparator: Comparator.LIKE,
    }),
  },
  {
    dataField: 'stat_total',
    text: 'Total Stats',
    filter: textFilter({ placeholder: 'Search' }),
  },
  {
    dataField: 'id',
    text: '',
    formatter: (value, row) => (
      <button onClick={() => console.log(value)}>
        <span> false</span> teste
      </button>
    ),
  },
];
