import { AppBar, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ContainerComponent from '../Container';
import Logo from '../Logo';

import useStyles from './styles';

function HomeHeader({ registerRouter, loginRouter, isRouterHome }) {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <ContainerComponent>
        <Box component="main" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <div>
          <Logo />
          </div>
          <nav>  
            {  !isRouterHome ? (
              <>
                <Button className={`${classes.mr} ${classes.border2x}`} variant="outlined" color="primary" size="small"> 
                  <Link className={`${classes.btnStyle} color-primary`} to={loginRouter} >Login</Link>
                </Button>    
                <Button variant="contained" color="primary" size="small"> 
                  <Link className={`${classes.btnStyle} color-white`} to={registerRouter}>Register</Link>
                </Button>  
              </>
              ) : (
                <Button variant="contained" color="primary" size="small"> 
                  <Link className={`${classes.btnStyle} color-white`} to='/'>Início</Link>
                </Button>  
              )
            }
          </nav>
        </Box>
      </ContainerComponent>
    </AppBar>
  )
}

export default HomeHeader;