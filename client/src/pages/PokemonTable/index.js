import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import history from '../../services/history';

import CustomButton from '../../components/CustomButton';

import { Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {
  selectFilter,
  Comparator,
  textFilter,
} from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

import renderColumnSelectOptions from '../../utils/renderColumnSelectOptions';
import renderColumnValues from '../../utils/renderColumnValues';

function PokemonTable() {
  const [pokemons, setPokemons] = useState([]);
  const [columns, setColumns] = useState();

  useEffect(() => {
    loadSelects();
    loadPokemons();
  }, []);

  async function loadSelects() {
    const generations = await api.get('generations');
    const types = await api.get('types');
    const weathers = await api.get('weathers');
    const evolution_stages = await api.get('evolution_stages');

    setColumns([
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
        formatter: (value) => (
          <p>
            {renderColumnValues({
              column: 'generations',
              columnOptions: generations.data,
              value: value,
            })}
          </p>
        ),
        filter: selectFilter({
          placeholder: 'Select',
          options: renderColumnSelectOptions({
            key: 'generations',
            selects: generations.data,
          }),
          comparator: Comparator.LIKE,
        }),
      },
      {
        dataField: 'evolution_stage_id',
        text: 'Evolution Stage',
        formatter: (value) => (
          <p>
            {renderColumnValues({
              column: 'evolution_stages',
              columnOptions: evolution_stages.data,
              value: value,
            })}
          </p>
        ),
        filter: selectFilter({
          placeholder: 'Select',
          options: renderColumnSelectOptions({
            key: 'evolution_stages',
            selects: evolution_stages.data,
          }),
          comparator: Comparator.LIKE,
        }),
      },
      {
        dataField: 'type_id_1',
        text: 'Type 1',
        formatter: (value) => (
          <p>
            {renderColumnValues({
              column: 'types',
              columnOptions: types.data,
              value: value,
            })}
          </p>
        ),
        filter: selectFilter({
          placeholder: 'Select',
          options: renderColumnSelectOptions({
            key: 'types',
            selects: types.data,
          }),
          comparator: Comparator.LIKE,
        }),
      },
      {
        dataField: 'type_id_2',
        text: 'Type 2',
        formatter: (value) => (
          <p>
            {renderColumnValues({
              column: 'types',
              columnOptions: types.data,
              value: value,
            })}
          </p>
        ),
        filter: selectFilter({
          placeholder: 'Select',
          options: renderColumnSelectOptions({
            key: 'types',
            selects: types.data,
          }),
          comparator: Comparator.LIKE,
        }),
      },
      {
        dataField: 'weather_id_1',
        text: 'Weather 1',
        formatter: (value) => (
          <p>
            {renderColumnValues({
              column: 'weathers',
              columnOptions: weathers.data,
              value: value,
            })}
          </p>
        ),
        filter: selectFilter({
          placeholder: 'Select',
          options: renderColumnSelectOptions({
            key: 'weathers',
            selects: weathers.data,
          }),
          comparator: Comparator.LIKE,
        }),
      },
      {
        dataField: 'weather_id_2',
        text: 'Weather 2',
        formatter: (value, row) => (
          <p>
            {renderColumnValues({
              column: 'weathers',
              columnOptions: weathers.data,
              value: value,
            })}
          </p>
        ),
        filter: selectFilter({
          placeholder: 'Select',
          options: renderColumnSelectOptions({
            key: 'weathers',
            selects: weathers.data,
          }),
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
          <CustomButton
            label="Details"
            onClick={() => {
              history.push({
                pathname: `/pokemon/${value}`,
                state: { pokemon: row },
              });
            }}
            variant="primary"
            type="button"
          />
        ),
      },
    ]);
  }

  async function loadPokemons() {
    const response = await api.get('pokemons');
    setPokemons(response.data);
  }

  return (
    <>
      <div
        style={{ width: '100vw' }}
        className="d-flex justify-content-between align-items-center"
      >
        <div></div>
        <h1 className="mb-5 mt-5">Pokemon</h1>
        <div className="mr-5">
          <CustomButton
            label="Add"
            onClick={() => history.push('/add/pokemon')}
            variant="primary"
            type="button"
          />
        </div>
      </div>

      {columns && (
        <BootstrapTable
          keyField="id"
          data={pokemons}
          columns={columns}
          pagination={paginationFactory()}
          filter={filterFactory()}
        />
      )}
    </>
  );
}

export default PokemonTable;
