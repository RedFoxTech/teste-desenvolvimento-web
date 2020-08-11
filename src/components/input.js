import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  },
}));

export default function MyTextField(props) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      label={props.label}
      variant="outlined"
      name={props.name}
      fullWidth
      color="primary"
      type={props.type}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export function MyTextArea(props) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      label={props.label}
      variant="outlined"
      multiline
      rows="5"
      name={props.name}
      fullWidth
      color="primary"
      type={props.type}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
    />
  );
}