import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  pagination: { 
    maxWidth: '380px', 
    margin: '3rem auto',
    padding: '10px 0', 
    borderRadius: '5px', 
    backgroundColor: theme.palette.white.main, 
    color: theme.palette.white.main,
  },
  titleNotPoke: { 
    fontWeight: 600, 
    textAlign: 'center', 
    fontSize: '3rem'
  },
}));

export default useStyles;