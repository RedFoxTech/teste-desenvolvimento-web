import React,{ useState } from 'react';
import Swal from "sweetalert2"
import Modal from 'react-modal';
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowId } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './table.css';
import './Modal/createModal.css';

/**
 * 

 name: 'Ivysaur',
 pokedexNumber: 2,
 type: 'grass',
 weather1: 'Sunny/clear',
 atk: 151,
 def: 151,
 imageUrl: null,
 */
const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nome', width: 100}, // nome no db - nome da coluna
  { field: 'pokedexNumber', headerName: 'Numero da pokedex', width: 100},
  { field: 'type1', headerName: 'Tipo 1', width: 100},
  { field: 'type2', headerName: 'Tipo 2', width: 100},
  { field: 'weather1', headerName: 'Clima 1', width: 100},
  { field: 'weather2', headerName: 'Clima 2', width: 100},
  { field: 'atk', headerName: 'ATK', width: 100},
  { field: 'def', headerName: 'DEF', width: 100},
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  // }
];

const rows = [
  { id: 1, name: 'Pikachu', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  { id: 2, name: 'Charmander', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  // { name: 'Pikachu', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  // { name: 'Pikachu', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  // { name: 'Pikachu', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  // { name: 'Pikachu', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  // { name: 'Pikachu', pokedexNumber: 1, type1: 'grass', type2: 'poison', weather1: 'Sunny/clear', weather2: 'Cloudy', atk: 999, def: 10  },
  
];

export  function Datatable() {
  const [rowsSelected, setRowsSelected] = useState<GridRowId[]>([]);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  const navigate = useNavigate();

  const openCreatePokemonModal = () => {
    setCreateModalIsOpen(true);
  }

  const closeCreatePokemonModal = () => {
    setCreateModalIsOpen(false);
  }

  const openEditPokemonModal = () => {
    setEditModalIsOpen(true);
  }

  const closeEditPokemonModal = () => {
    setEditModalIsOpen(false);
  }

const deletePokemon = (isSinglePokemon: boolean) => {
  Swal.fire({
    title: isSinglePokemon ? 'Tem certeza que deseja excluir esse Pokémon?' : 'Tem certeza que deseja excluir esses Pokémons?',
    text: isSinglePokemon ? 'Ele será deletado permanentemente' : 'Eles serão deletados permanentemente',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deletado!',
        'Pokémon deletado com sucesso.',
        'success'
      )
    }
  })
}

  return (
    <section>
      <div className='add-pokemon-box'>
        <AddCircle fontSize='large' className='add-pokemon-icon' onClick={openCreatePokemonModal} />
      </div>

       <div>
        {rowsSelected.length == 1 && (
          <div>          
            <Button variant="text" onClick={openEditPokemonModal}>Editar</Button>
            <Button variant="text" onClick={() => { deletePokemon(true)}}>Excluir</Button>
          </div> 

        )}
        {rowsSelected.length >= 2 && <Button onClick={() => { deletePokemon(false)}}>Excluir</Button>}

       </div>
      <div style={{ height: 400}}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={(e) => navigate(`/pokemonlist/details/${e.row.id}`)}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(item) => {
            setRowsSelected(item)
          }}
        />
      </div>

      <Modal
        isOpen={createModalIsOpen}
        onRequestClose={closeCreatePokemonModal}
      >
        <div className='create-modal-container'>
          <header className='header-title'>
            <p>Adicione um Pokémon</p>
            <HighlightOffIcon fontSize='large' color='error' onClick={closeCreatePokemonModal} />
          </header>

          <form className='create-modal-form'>
            <FormControl>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input id="name" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="pokedexNumber">Número na Pokedéx</InputLabel>
              <Input id="pokedexNumber" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type1">Tipo 1</InputLabel>
              <Input id="type1" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type2">Tipo 2</InputLabel>
              <Input id="type2" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather1">Clima 1</InputLabel>
              <Input id="weather1" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather2">Clima 2</InputLabel>
              <Input id="weather2" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="atk">Ataque</InputLabel>
              <Input id="atk" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="def">Defesa</InputLabel>
              <Input id="def" />
            </FormControl>
          
          <Button
              type="submit"
              color='success'
              variant="contained"
              // onClick={}
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
        <div className='create-modal-container'>
          <header className='header-title'>
            <p>Edite seu Pokémon</p>
            <HighlightOffIcon fontSize='large' color='error' onClick={closeEditPokemonModal} />
          </header>

          <form className='create-modal-form'>
            <FormControl>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input id="name" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="pokedexNumber">Número na Pokedéx</InputLabel>
              <Input id="pokedexNumber" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type1">Tipo 1</InputLabel>
              <Input id="type1" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="type2">Tipo 2</InputLabel>
              <Input id="type2" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather1">Clima 1</InputLabel>
              <Input id="weather1" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="weather2">Clima 2</InputLabel>
              <Input id="weather2" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="atk">Ataque</InputLabel>
              <Input id="atk" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="def">Defesa</InputLabel>
              <Input id="def" />
            </FormControl>
          
          <Button
              type="submit"
              color='success'
              variant="contained"
              // onClick={}
            >
              Salvar
            </Button>
          </form>
        </div>
      </Modal>
    </section>
   
  );
}