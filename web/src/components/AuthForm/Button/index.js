import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

function AuthButton({ label, onClick }) {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick} variant="contained" color="primary" size="large">
      <Typography variant="subtitle" component="span">
        { label }
      </Typography>
    </Button>
  )
}

export default AuthButton;