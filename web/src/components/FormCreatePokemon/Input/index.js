import { TextField } from "@material-ui/core";
import { useEffect } from "react";

import useStyles from "./styles";

function InputCreatePokemon({ isFile, id, name, label, type, value, onChange }) {
  const classes = useStyles();

  return (
    <>
    { !isFile ? (
    <TextField
      InputLabelProps={{ required: false }} 
      variant="outlined"
      margin="normal"
      required
      fullWidth
      color="primary"
      size="small"
      className={classes.root}
      id={id}
      label={label}
      name={name}
      autoComplete={type}
      type={type}
      value={value}
      onChange={onChange}
    /> ) : (
      <>
        <input
          type="file" 
          className={`${classes.inputFile} imageName`}
          id={id}
          label={label}
          name={name}
          value={value}
          onChange={onChange}
        />
        <label id="imageFile" for={id} className={classes.labelFile}>Escolha uma imagem</label>
      </>
    )}
    </>
  )
}
export default InputCreatePokemon;