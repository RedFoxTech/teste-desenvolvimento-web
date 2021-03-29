import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
   
    backgroundColor: theme.palette.dark.main,
    boxShadow: '0 0 3px 3px rgba(244, 244, 244, 0.080)'
  },
  media: {
    height: 240,
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;