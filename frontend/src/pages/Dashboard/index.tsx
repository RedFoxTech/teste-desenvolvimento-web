import React from 'react';
import './dashboard.css';
import { Paper, Container, Button, Drawer, Table, TableBody, TableCell, TableFooter, TablePagination, TableRow, Typography, Avatar, Chip, Checkbox, TableHead } from '@mui/material';

interface ITableHeadRow {
  // id: string;
  // numeric: boolean | undefined;
  disablePadding: boolean | undefined;
  label: string;
}

interface IPokemon {
  name: string;
  pokedexNumber: number;
  type1: string;
  type2: string;
  weather1: string;
  weather2: string;
  atk: number;
  def: number;
  imageUrl: string | null;
}

const pokemons: IPokemon[] = [{
  name: 'Bulbasaur',
  pokedexNumber: 1,
  type1: 'grass',
  type2: 'poison',
  weather1: 'Sunny/clear',
  weather2: 'Cloudy',
  atk: 118,
  def: 118,
  imageUrl: null,
},{
  name: 'Ivysaur',
  pokedexNumber: 2,
  type1: 'grass',
  type2: 'poison',
  weather1: 'Sunny/clear',
  weather2: 'Cloudy',
  atk: 151,
  def: 151,
  imageUrl: null,
},{
  name: 'Venusaur',
  pokedexNumber: 3,
  type1: 'grass',
  type2: 'poison',
  weather1: 'Sunny/clear',
  weather2: 'Cloudy',
  atk: 198,
  def: 198,
  imageUrl: null,
},{
  name: 'Charmander',
  pokedexNumber: 4,
  type1: 'fire',
  type2: '',
  weather1: 'Sunny/clear',
  weather2: '',
  atk: 116,
  def: 96,
  imageUrl: null,
}];

const headRows: ITableHeadRow[] = [
  // { disablePadding: false, label: 'Foto' },
  { disablePadding: false, label: 'Nome' },
  { disablePadding: false, label: 'Nº Pokedex' },
  { disablePadding: false, label: 'Tipo 1' },
  { disablePadding: false, label: 'Tipo 2' },
  { disablePadding: false, label: 'Clima 1' },
  { disablePadding: false, label: 'Clima 2' },
  { disablePadding: false, label: 'ATK' },
  { disablePadding: false, label: 'DEF' },
];

export default function PokemonList() {
  return (
    <div className='pokedex-page-container'>
      <h1>PokemonList Page</h1>

      <Container>
        <Paper>
            <Table>
              <tbody>
                <tr>
                  <td>
                    {pokemons.length === 0 &&
                      <div>
                        {<Typography>{'Nenhum pokemon encontrado'}</Typography>}
                      </div>}
                  </td>
                </tr>
              </tbody>
            <TableHead style={{backgroundColor: '#EBEBE5'}}>
              <TableRow>
                {headRows.map(col => <TableCell key={col.label} align="right">{col.label}</TableCell>
                )}
              </TableRow>
            </TableHead>

            <TableBody>
            {pokemons.map((row) => (
              <TableRow
                key={row.name}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell align="right">
                {row.imageUrl ?
                  <Avatar
                    src={row.imageUrl}
                    style={{
                      fontSize: '0.8rem',
                      width: '2.75rem',
                      height: '2.75rem',
                      border: `2px solid black`,
                    }}
                  />
                  :
                  <Avatar
                    style={{
                    fontSize: '0.8rem',
                    width: '2.75rem',
                    height: '2.75rem',
                    border: `2px solid black`,
                    display: 'flex',
                    // marginLeft: '2rem',
                    }}
                      className='avatarSmallText'
                    >
                    FOTO
                  </Avatar>}
                </TableCell> */}
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.pokedexNumber ? row.pokedexNumber : '-'}</TableCell>
                <TableCell align="right">{row.type1 ? row.type1 : '-'}</TableCell>
                <TableCell align="right">{row.type2 ? row.type2 : '-'}</TableCell>
                <TableCell align="right">{row.weather1 ? row.weather1 : '-'}</TableCell>
                <TableCell align="right">{row.weather2 ? row.weather2 : '-'}</TableCell>
                <TableCell align="right">{row.atk ? row.atk : '-'}</TableCell>
                <TableCell align="right">{row.def ? row.def : '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>

            </Table>
        </Paper>
      </Container>

      
    </div>
  )
}