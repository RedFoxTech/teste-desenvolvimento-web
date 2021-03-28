import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mr: {
    marginRight: '1rem'
  },
  appBar: {
    backgroundColor: '#010c11',
    height: '6rem',
    boxShadow: "0 4px 10px 0 transparent"
  },
  border2x: {
    border: '2px solid'
  },
  btnStyle: {
    fontSize: "1.5rem", 
    fontWeight: 600,
  }
}));

export default useStyles;