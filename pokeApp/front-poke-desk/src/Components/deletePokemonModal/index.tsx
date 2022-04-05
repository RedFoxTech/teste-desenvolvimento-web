import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, Modal } from '@mui/material';
import api from '../../services/api';
import Cards from '../cards/cards';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [pokemon, setPokemon] = React.useState();

  React.useEffect(() => {
    props.pokemon ? setPokemon(props.pokemon[0]) : null
    console.log(pokemon)
  },[props])

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deletarPokemon = ()=>{  
      console.log("pokebas", pokemon)
      api.post("deletePokemon", {pokedexNumber : pokemon.Pokedex_Number})

  }

  return (
    <>
      <Button onClick={handleOpen} disabled={pokemon ? false : true}>Deletar</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h1>Deseja Deletar o pokemon {props.pokemon ? props.pokemon[0].Name : "selecionado"} ?</h1>
          <Button onClick={()=>{handleClose(),deletarPokemon()}}>SIM</Button>
          <Button onClick={handleClose}>NÃO</Button>
        </Box>
      </Modal>
    </>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [pokemonToSearch, setPokemonToSearch] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(true)
  const [pokemonFinded, sePokemonFinded] = React.useState<any>();
 
  const littleApi = async (pokemon: any) => {
    const { data } = await api.post("pokemon", { name: pokemon })
    sePokemonFinded(data)
    setLoading(false)
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const clickButton = () => {
    littleApi(pokemonToSearch)
    console.log(pokemonFinded)
  }
  return (
    <>
      <Button onClick={handleOpen}>Deletar Pokemon</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Grid sx={{ ...style, width: 400, alignItems: "center" }} container spacing={1} direction="column">
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Procure um pokemon" variant="outlined" onChange={event => setPokemonToSearch(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={clickButton}>Procurar pokemon</Button>
          </Grid>
          <Grid item xs={12}>
            {loading ? <p>Procure um pokemon para deletar</p> : <Cards pokemon={pokemonFinded[0]} /> }
          </Grid>
          <Grid item xs={12}>
            <ChildModal pokemon={pokemonFinded}/>
          </Grid>

        </Grid>
      </Modal>
    </>
  );
}