import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  navBarApp: {
    backgroundColor: theme.palette.white.main,
    boxShadow: "0 0 0 0 transparent"
  },
  wrapperButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttonLogout: {
    fontSize: '1.2rem',
  },
  appBar: {
    backgroundColor: theme.palette.dark.main,
    height: '5rem',
    boxShadow: "0 0 0 0 transparent"
  },
  buttonStyle: {
    width: '180px',
    maxWidth: '200px',
    fontSize: '1rem',
    color: theme.palette.secondary.main,
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
  },
  iconStyle: {
    color: theme.palette.secondary.main,
    fontSize: 30,
  }
}));

export default useStyles;