import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '2rem',
    borderRadius: '5px',
    backgroundColor: theme.palette.white.main,
  },
  inputFile: {
    display: 'none',
  },
  labelFile: {
    width: '100%',
    height: '3.5rem',
    padding: '10px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.palette.white.main,
    border: '1px solid #ccc',
    fontSize: '1.6rem',
    color: 'gray',
    borderRadius: '5px',
    marginTop: '1rem',
  }
}))

export default useStyles;