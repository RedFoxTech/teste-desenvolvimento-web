import { FormControl } from "@material-ui/core";
import useStyles from "./styles";

function AuthForm({ children }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} color='primary'>
      { children }
    </FormControl>
  )
}

export default AuthForm;