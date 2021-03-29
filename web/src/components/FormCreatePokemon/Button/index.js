import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

function ButtonCreatePokemon({ label, onClick }) {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick} variant="contained" color="secondary" size="large">
      <Typography variant="subtitle" component="span">
        { label }
      </Typography>
    </Button>
  )
}

export default ButtonCreatePokemon;