import { makeStyles } from '@material-ui/core/styles';


const NavBarStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      display: 'flex',
      position: 'relative',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexGrow: 0.5,
      borderRadius: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
    },
  }));

  export default NavBarStyles