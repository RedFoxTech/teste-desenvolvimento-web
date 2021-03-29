import { TextField } from "@material-ui/core";

import useStyles from "./styles";

function InputFilter({ id, name, label, type, value, onChange }) {
  const classes = useStyles();

  return (
    <TextField
    InputLabelProps={{ required: false }} 
      variant="outlined"
      margin="normal"
      required
      fullWidth
      color="secondary"
      size="small"
      className={classes.root}
      id={id}
      label={label}
      name={name}
      autoComplete={type}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}
export default InputFilter;