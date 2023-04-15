import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import PokeballImage from '../../assets/pokeball-png-0.png';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate, useParams } from 'react-router-dom';
import './pokemondetails.css';
import { api } from '../../services/api';

interface IPokemon {
  id: string
  name: string
  pokedexNumber: number
  type1: string
  type2?: string
  weather1: string
  weather2?: string
  atk: number
  def: number
  userId: string;
}

export default function PokemonDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    const token = localStorage.getItem('pokedex-user-token');
    api.get<IPokemon>(`/pokemons/${id}`, { headers: { Authorization: 'Bearer ' + token } })
    .then(res => {
      if(res.data) {
        setPokemon(res.data)
      } else {
        navigate("/pokemonlist")
      }
    })
    .catch(() => navigate("/"))
  }, [])

  console.log(pokemon)

  return (
    <div className='pokemon-details-page'>
      <p className='pokemon-details-title'>Detalhes do Pokémon</p>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: 300,
            height: 500,
          },
        }}
      >

        <Paper className='pokemon-card-box'>
          <main className='pokemon-card'>
            <div className='pokemon-card-go-back'><UndoIcon style={{cursor: 'pointer'}} color='info' onClick={() => navigate(`/pokemonlist`)} /></div>
            
            <img src={PokeballImage} height={80} width={80} className='pokemon-image' />

            <Typography><b>Nome:</b> {pokemon?.name ? pokemon?.name : '-'}</Typography>
            <Typography><b>Nº da Pokedéx:</b> {pokemon?.pokedexNumber ? pokemon.pokedexNumber : '-'}</Typography>
            <Typography><b>Tipo 1:</b> {pokemon?.type1 ? pokemon.type1 : '-'}</Typography>
            <Typography><b>Tipo 2:</b> {pokemon?.type2 ? pokemon?.type2 : <b>não informado</b>}</Typography>
            <Typography><b>Clima 1:</b> {pokemon?.weather1 ? pokemon.weather1 : '-'}</Typography>
            <Typography><b>Clima 2:</b> {pokemon?.weather2 ? pokemon?.weather2 : <b>não informado</b>}</Typography>
            <Typography><b>ATK:</b> {pokemon?.atk ? pokemon?.atk : '-'}</Typography>
            <Typography><b>DEF:</b> {pokemon?.def ? pokemon?.def : '-'}</Typography>
          </main>
        </Paper>

    </Box>
    </div>
  )
}
