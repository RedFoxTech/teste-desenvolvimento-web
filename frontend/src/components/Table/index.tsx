import React,{useState} from 'react';
import Swal from "sweetalert2"
import { Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowId } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();


const deletePokemon = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}




  return (
    <section>
      <div style={{
        textAlign: 'right',
        padding: 10,
      }}>
        <AddCircle style={{color: 'green'}} />
      </div>

       <div>
        {rowsSelected.length == 1 && (
          <>          
          <Button onClick={() => {
            const [id] = rowsSelected
            navigate(`/edit/${id}`)
          }}>Editar</Button>

          <Button onClick={() => { deletePokemon()}}>Excluir</Button>
          </> 

        )}
        {rowsSelected.length >= 2 && <Button>Excluir</Button>}

       </div>
      <div style={{ height: 400}}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(item) => {
            setRowsSelected(item)
          }}
        />
      </div>
    </section>
   
  );
}