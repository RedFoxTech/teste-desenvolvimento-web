import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mr: {
    marginRight: '10px'
  },
  appBar: {
    backgroundColor: theme.palette.dark.main,
    height: '5rem',
    boxShadow: "0 4px 10px 0 transparent"
  },
  border2x: {
    border: '2px solid'
  },
  btnStyle: {
    fontSize: "1rem", 
    fontWeight: 600,
  }
}));

export default useStyles;