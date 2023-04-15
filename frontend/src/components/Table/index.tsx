import React,{ useState, useEffect } from 'react';
import Swal from "sweetalert2"
import Modal from 'react-modal';
import { Button, FormControl, Input, InputLabel,  Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './table.css';
import './Modal/modal.css';
import { api } from '../../services/api';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nome', width: 250}, // nome no db - nome da coluna
  { field: 'pokedexNumber', headerName: 'Numero da pokedex', width: 250},
  { field: 'type1', headerName: 'Tipo', width: 250},
  // { field: 'type2', headerName: 'Tipo 2', width: 100},
  // { field: 'weather1', headerName: 'Clima', width: 100},
  // { field: 'weather2', headerName: 'Clima 2', width: 100},
  // { field: 'atk', headerName: 'ATK', width: 100},
  // { field: 'def', headerName: 'DEF', width: 100},
];

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

export  function Datatable() {
  const [rowsSelected, setRowsSelected] = useState<GridRowId[]>([]);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  const [name, setName] = useState<string>("")
  const [pokedexNumber, setPokedexNumber] = useState<number>(0)
  const [type1, setType1] = useState<string>("")
  const [type2, setType2] = useState<string | null>(null)
  const [weather1, setWeather1] = useState<string>("")
  const [weather2, setWeather2] = useState<string | null>(null)
  const [atk, setAtk] = useState<number>(0)
  const [def, setDef] = useState<number>(0)

  const navigate = useNavigate();

  async function getPokemons() {
    const token = localStorage.getItem('pokedex-user-token');
    if(token) {
      const result = await api.get<IPokemon[]>("/pokemons/", { headers: { Authorization: 'Bearer ' + token } })
      setPokemons(result.data)

      api.defaults.headers.common.authorization = 'Bearer ' + token;
    } else {
      navigate("/")
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const clearPokemonFields = () => {
    setName('')
    setPokedexNumber(0)
    setType1('')
    setType2(null)
    setWeather1('')
    setWeather2(null)
    setAtk(0)
    setDef(0)
  }

  const openCreatePokemonModal = () => {
    setCreateModalIsOpen(true);
  }

  const closeCreatePokemonModal = () => {
    clearPokemonFields();
    setCreateModalIsOpen(false);
  }

  const openEditPokemonModal = () => {
    const pokemon = pokemons.find(pokemon => pokemon.id === rowsSelected[0]) as IPokemon;
    console.log(pokemon)

    setName(pokemon.name)
    setPokedexNumber(pokemon?.pokedexNumber)
    setType1(pokemon?.type1)
    setType2(pokemon.type2 || null)
    setWeather1(pokemon?.weather1)
    setWeather2(pokemon.weather2 || null)
    setAtk(pokemon?.atk)
    setDef(pokemon?.def)
    setEditModalIsOpen(true);
  }

  const closeEditPokemonModal = () => {
    setEditModalIsOpen(false);
    clearPokemonFields();
  }

  

  const deletePokemon = async(isSinglePokemon: boolean) => {
    const swalResponse = await Swal.fire({
      title: isSinglePokemon ? 'Tem certeza que deseja excluir esse Pokémon?' : 'Tem certeza que deseja excluir esses Pokémons?',
      text: isSinglePokemon ? 'Ele será deletado permanentemente' : 'Eles serão deletados permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
    })
      if(swalResponse.isConfirmed) {
        await api.delete("/pokemons/", { data: { ids: rowsSelected } })
        await getPokemons();
        Swal.fire(
          'Deletado!',
          'Pokémon deletado com sucesso.',
          'success'
        )
      }
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userId = localStorage.getItem("pokedex-user-id");
    await api.post("/pokemons", { name, pokedexNumber, type1, type2, weather1, weather2, atk, def, userId })
    await getPokemons();
    Swal.fire({
      title: 'Pokemon Adicionado',
      text: "Seu Pokémon foi criado com sucesso!",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    })
    
    clearPokemonFields();
    closeCreatePokemonModal();
  }

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userId = localStorage.getItem("pokedex-user-id");
    await api.put(`/pokemons/${rowsSelected[0]}`, { name, pokedexNumber, type1, type2, weather1, weather2, atk, def, userId })
    await getPokemons();
    Swal.fire({
      title: 'Pokemon Editado',
      text: "Seu Pokémon foi editado com sucesso!",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    })
    
    clearPokemonFields();
    closeEditPokemonModal();
  }

  return (
    <>
      <section>
        <div className='add-pokemon-box'>
          <AddCircle fontSize='large' className='add-pokemon-icon' onClick={openCreatePokemonModal} />
        </div>

        <div>
          {(rowsSelected.length == 1 && pokemons.length > 0) && (
            <div>          
              <Button variant="text" onClick={openEditPokemonModal}>Editar</Button>
              <Button variant="text" onClick={async() => { await deletePokemon(true)}}>Excluir</Button>
            </div> 

          )}
          {(rowsSelected.length >= 2 && pokemons.length > 0) && <Button onClick={async() => { await deletePokemon(false)}}>Excluir</Button>}

        </div>
          <div style={{ height: 400, zIndex: -1}}>
            {pokemons.length > 0 ?<DataGrid
              rows={pokemons}
              columns={columns}
              onRowClick={(e) => navigate(`/pokemonlist/details/${e.row.id}`)}
              checkboxSelection
              disableRowSelectionOnClick
              onRowSelectionModelChange={(item) => {
                setRowsSelected(item)
              }}
            />
          : <Typography variant='h5' align='center'>Adicione seu primeiro Pokémon clicando no ícone verde</Typography>}
          </div>

        
      </section>

      <div>
      <Modal
        isOpen={createModalIsOpen}
        onRequestClose={closeCreatePokemonModal}
      >
        <div className='modal-container'>
          <header className='header-title'>
            <p>Adicione um Pokémon</p>
            <HighlightOffIcon fontSize='large' color='error' onClick={closeCreatePokemonModal} />
          </header>

          <form className='modal-form' onSubmit={handleAdd}>
            <FormControl>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="pokedexNumber">Número na Pokedéx</InputLabel>
              <Input required id="pokedexNumber" type="number" value={pokedexNumber} onChange={(e) => setPokedexNumber(parseInt(e.target.value))} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type1">Tipo 1</InputLabel>
              <Input required id="type1" value={type1} onChange={(e) => setType1(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type2">Tipo 2</InputLabel>
              <Input id="type2" value={type2} onChange={(e) => setType2(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather1">Clima 1</InputLabel>
              <Input required id="weather1" value={weather1} onChange={(e) => setWeather1(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather2">Clima 2</InputLabel>
              <Input id="weather2" value={weather2} onChange={(e) => setWeather2(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="atk">Ataque</InputLabel>
              <Input required id="atk" type="number" value={atk} onChange={(e) => setAtk(parseInt(e.target.value))} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="def">Defesa</InputLabel>
              <Input required id="def" type="number" value={def} onChange={(e) => setDef(parseInt(e.target.value))} />
            </FormControl>
          
          <Button
              type="submit"
              color='success'
              variant="contained"
            >
              Salvar
            </Button>
          </form>
        </div>
      </Modal>


      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditPokemonModal}
      >
        <div className='modal-container'>
          <header className='header-title'>
            <p>Edite seu Pokémon</p>
            <HighlightOffIcon fontSize='large' color='error' onClick={closeEditPokemonModal} />
          </header>

          <form className='modal-form' onSubmit={handleEdit}>
          <FormControl>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="pokedexNumber">Número na Pokedéx</InputLabel>
              <Input required id="pokedexNumber" type="number" value={pokedexNumber} onChange={(e) => setPokedexNumber(parseInt(e.target.value))} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type1">Tipo 1</InputLabel>
              <Input required id="type1" value={type1} onChange={(e) => setType1(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type2">Tipo 2</InputLabel>
              <Input id="type2" value={type2} onChange={(e) => setType2(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather1">Clima 1</InputLabel>
              <Input required id="weather1" value={weather1} onChange={(e) => setWeather1(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather2">Clima 2</InputLabel>
              <Input id="weather2" value={weather2} onChange={(e) => setWeather2(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="atk">Ataque</InputLabel>
              <Input required id="atk" type="number" value={atk} onChange={(e) => setAtk(parseInt(e.target.value))} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="def">Defesa</InputLabel>
              <Input required id="def" type="number" value={def} onChange={(e) => setDef(parseInt(e.target.value))} />
            </FormControl>
          
          <Button
              type="submit"
              color='success'
              variant="contained"
            >
              Salvar
            </Button>
          </form>
        </div>
      </Modal>
      </div>
    </>
   
  );
}