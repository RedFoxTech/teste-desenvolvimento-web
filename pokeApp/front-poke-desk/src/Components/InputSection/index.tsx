import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import Cards from '../cards/cards';
import { Content } from '../../Pages/Home/style'

const { data } = await axios.post("http://localhost:1337/pokemons", { amount: 4 })

interface Pokemon {
  Name: string,
  Pokedex_Number: number,
  Type_1: string,
  Type_2: string,
  STAT_TOTAL: string,
  ATK: string,
  DEF: string,
  STA: string
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function PokemonSearch() {
  const [PokemonsFiltrados, setPokemonsFiltrado] = React.useState<Pokemon[]>([])
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Pokemon[]>([]);
  const loading = open && options.length === 0;


  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...pokemons]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  function filtro(option: Pokemon) {
    if (PokemonsFiltrados.indexOf(option) == -1) {
      PokemonsFiltrados.push(option)
      console.log(PokemonsFiltrados)
      return "Pokemons exibidos: "
    } else {
      while (PokemonsFiltrados.length > 0) {
        PokemonsFiltrados.pop()
      }
      PokemonsFiltrados.push(option)
      console.log(PokemonsFiltrados)
      return "Pokemons exibidos: "
    }
  }

  return (
    <>
      <Autocomplete
        id="asynchronous-demo"
        groupBy={(option: Pokemon) => filtro(option)}
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.Name === value.Name}
        getOptionLabel={(option) => option.Name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pokemons"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}

                </React.Fragment>
              ),
            }}
          />
        )}
      />
      <Content>
        {PokemonsFiltrados.length > 0 ? PokemonsFiltrados.map((item: Pokemon) => <Cards pokemon={item} />) : data.map((item: Pokemon) => <Cards pokemon={item} />)}
      </Content>
      {/* <RENDERIZAPORRA pokemons={PokemonsFiltrados.length > 0 ? PokemonsFiltrados : data} /> */}
    </>
  );



  /* function RENDERIZAPORRA(props: any) {
    const [filteredPokemons, setfilteredPokemons] = React.useState<any>(props.pokemons ? props.pokemons : []);
    React.useEffect(() => {
      setfilteredPokemons(props.pokemons)
    }, [props])
    return (
      <Content>
        {filteredPokemons.map((item: Pokemon) => <Cards pokemon={item} />)}
      </Content>
  
    )
  }  */


}
const pokemons = [
  ...data
];


