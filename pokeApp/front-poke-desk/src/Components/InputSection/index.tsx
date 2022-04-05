import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import PokemonsDisplay from "../../Components/pokemons/pokemons"
import { POKEMONS_PER_PAGE } from "../../utils/constants";
import DeletePokemonModal from "../deletePokemonModal/index"
import CreatePokemonModal from "../createPokemonModal/index"
import { Content } from '../../Pages/Home/style'

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
  const [PokemonsFiltrados, setPokemonsFiltrados] = React.useState<Pokemon[]>([])
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Pokemon[]>([]);

  const [data, setData] = React.useState([])
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const loading = open && options.length === 0;

  const handleClick = (num: any) => {
    setPage(num);
  }

  const dados = async () => {
    const res = await axios.post("http://localhost:1337/pokemon")
    setData(res.data)
    setTotalPages(Math.ceil(res.data.length / POKEMONS_PER_PAGE));
  }

  React.useEffect(() => {
    dados()
  }, [])

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
      handleClick(1)
    }
  }, [open]);

  function filtro(option: Pokemon) {
    if (PokemonsFiltrados.indexOf(option) == -1) {
      PokemonsFiltrados.push(option)
      return "Pokemons exibidos: "
    } else {
      setPokemonsFiltrados([])
      PokemonsFiltrados.push(option)
      return "Pokemons exibidos: "
    }

  }

  return (
    <>
      <Content>
        <DeletePokemonModal />
        <CreatePokemonModal />
      </Content>
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
      {PokemonsFiltrados.length > 0 ? <PokemonsDisplay pokemons={PokemonsFiltrados} page={page} totalPages={totalPages} handleClick={handleClick} /> : <PokemonsDisplay pokemons={data} page={page} totalPages={totalPages} handleClick={handleClick} />}
    </>
  );

}


