import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 64,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(60),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '30%',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  }
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color='primary' position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" >
          {props.pageName} 
        </Typography>
        {props.onChangeSearchInputValue && 
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            title="Buscar Pokemon"
            placeholder="Buscar Pokemon"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={props.searchValue}
            onChange={props.onChangeSearchInputValue}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>}
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar