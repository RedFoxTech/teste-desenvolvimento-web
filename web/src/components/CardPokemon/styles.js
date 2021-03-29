import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    backgroundColor: theme.palette.dark.main,
    boxShadow: '0 0 3px 2px rgba(244, 244, 244, 0.080)'
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonView: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.white.main,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    }
  },
  buttonDelete: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.white.main,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    }
  },
  buttonUpdate: {
    backgroundColor: theme.palette.blue.main,
    color: theme.palette.white.main,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.blue.main,
    }
  },
  buttonImage: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white.main,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    }
  },
  iconStyle: {
    fontSize: '30px',
  }
}));

export default useStyles;