import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Header, DivContainer, Table, Card, Button } from './Style';

const List = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    api.get(`/pokemon`).then((response) => {
      setPokemon(response.data);
      console.log(pokemon);
    });
  }, []);

  return (
    <>
      <main id="home-page">
        <Header>
          <h1>Lista de Pokemons</h1>
        </Header>
        <DivContainer>
          <Card>
            <div className="content clearfix">
              <div className="col-md-2">
                <Link to="/create">
                  <Button
                    type="submit"
                    className="btn btn-info btn-fill pull-right"
                  >
                    Cadastrar Pokemon
                  </Button>
                </Link>
              </div>
            </div>
            <div className="content table-responsive table-full-width">
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pokedex number</th>
                    <th>Generation</th>
                    <th>Evolution stage</th>
                    <th>Evolved</th>
                    <th>Family id</th>
                    <th>Type1</th>
                    <th>Type2</th>
                    <th>Weather1</th>
                    <th>Weather2</th>
                    <th>Stat total</th>
                    <th>Atk</th>
                    <th>Def</th>
                    <th>Sta</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.pokedex_number}</td>
                      <td>{item.generation}</td>
                      <td>{item.evolution_stage}</td>
                      <td>{item.evolved}</td>
                      <td>{item.family_id}</td>
                      <td>{item.type1}</td>
                      <td>{item.type2}</td>
                      <td>{item.weather1}</td>
                      <td>{item.weather2}</td>
                      <td>{item.stat_total}</td>
                      <td>{item.atk}</td>
                      <td>{item.def}</td>
                      <td>{item.sta}</td>
                      <td>
                        <Link to={`edit/${item.id}`}>
                          <Button
                            type="button"
                            rel="tooltip"
                            data-placement="left"
                            title=""
                          >
                            <FiEdit />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </DivContainer>
      </main>
    </>
  );
};

export default List;
