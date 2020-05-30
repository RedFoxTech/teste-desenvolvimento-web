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

import { columns } from '../../components/Table/columns';

import './index.css';

function PokemonTable() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  async function loadPokemons() {
    const response = await api.get('pokemons');

    console.log(response.data);
    setPokemons(response.data);
  }

  const paginationOption = paginationFactory({
    sizePerPage: 5,
  });

  return (
    <Container fluid>
      <Row className="justify-content-md-center m-3">
        <h1 className="mb-5 mt-5">Pokemon</h1>
        <BootstrapTable
          keyField="id"
          data={pokemons}
          columns={columns}
          pagination={paginationOption}
          filter={filterFactory()}
        />
      </Row>
    </Container>
  );
}

export default PokemonTable;
