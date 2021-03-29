import { 
  Button, Dialog, DialogActions, DialogContent, 
  DialogTitle, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography
 } from "@material-ui/core";
import { useContext, useState } from "react";
import Draggable from 'react-draggable';
import { FilterPokemonsContext } from "../../contexts/FilterPokemonsContext";
import InputFilter from "./InputFilter";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function FilterPokemons() {
  const { openDialogFilter, handleCloseDialogFilter, setQueries } = useContext(FilterPokemonsContext);
  const [ stat, setStat ] = useState('');
  const [ type, setType ] = useState('');
  const [ weather, setWeather ] = useState('');

  function handlerSave() {
    setQueries(`${stat}type=${type}&weather=${weather}`);
    handleCloseDialogFilter();
  }

  return (
    <div>
      <Dialog
        open={openDialogFilter}
        onClose={handleCloseDialogFilter}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
         Filtros
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="span" component="span" style={{ fontSize: '1.8rem', color: 'gray'}}>Stat entre: </Typography>
              <RadioGroup style={{ margin: "10px 0 0 0", paddingBottom: '10px', borderBottom: '1px solid #ccc'}} aria-label='stat' name='stat' value={stat} onChange={(e) => setStat(e.target.value)}>
                <FormControlLabel style={{ fontSize: '1rem', color: 'gray'}} value={'min_stat=0&max_stat=300&'} control={<Radio style={{ width: 36, height: 36 }} color="primary"  size="small"/>} label='0 - 300' />
                <FormControlLabel style={{ fontSize: '1rem', color: 'gray'}} value={'min_stat=300&max_stat=600&'} control={<Radio style={{ width: 36, height: 36 }} color="primary"  size="small"/>} label='300 - 600' />
                <FormControlLabel style={{ fontSize: '1rem', color: 'gray'}} value={'min_stat=600&max_stat=1000&'} control={<Radio style={{ width: 36, height: 36 }} color="primary"  size="small"/>} label='600 - 1000' />
                <FormControlLabel style={{ fontSize: '1rem', color: 'gray'}} value={'above_stat=1000&'} control={<Radio style={{ width: 36, height: 36 }} color="primary"  size="small"/>} label='Acima de 1000' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>     
              <InputFilter id="type" name="type" label="Type" value={type} onChange={(e) => setType(e.target.value)}/> 
              <InputFilter id="weather" name="weather" label="Weather" value={weather} onChange={(e) => setWeather(e.target.value)}/>
            </Grid>
          </Grid>     
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handlerSave} color="primary">
            Salvar filtros
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
export default FilterPokemons;