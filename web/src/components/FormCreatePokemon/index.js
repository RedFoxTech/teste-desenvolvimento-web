import { FormControl } from "@material-ui/core";
import useStyles from "./styles";

function FormCreatePokemon({ children }) {
  const classes = useStyles();

  return (
    <FormControl style={{ width: '100%', maxWidth: '360px'}} className={classes.root} color='primary'>
      { children }
    </FormControl>
  )
}

export default FormCreatePokemon;