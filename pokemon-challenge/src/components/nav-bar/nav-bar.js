import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import NavBarStyles from './nav-bar.styles'
import { navigate } from 'hookrouter';


export default function NavBar(props) {
  const classes = NavBarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {props.home && 
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="go Home"
              onClick={() => navigate('/')}
            >
              <HomeIcon />
            </IconButton>
          }
          <Typography className={classes.title} variant="h6" noWrap>
            {props.title}
          </Typography>
          {props.getSearchValue && <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => {
                props.getSearchValue(e)
              }}
            />
          </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
