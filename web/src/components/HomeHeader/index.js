import { AppBar, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ContainerComponent from '../Container';
import Logo from '../Logo';

import useStyles from './styles';

function HomeHeader({ registerRouter, loginRouter }) {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <ContainerComponent>
        <Box component="main" py="1rem" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Logo />
          <nav>    
            <Button className={`${classes.mr} ${classes.border2x}`} ml="1rem" variant="outlined" color="primary" size="medium"> 
              <Link className={`${classes.btnStyle} color-primary`} to={loginRouter} >Login</Link>
            </Button>    
            <Button variant="contained" color="primary" size="medium"> 
              <Link className={`${classes.btnStyle} color-white`} to={registerRouter}>Register</Link>
            </Button>  
          </nav>
        </Box>
      </ContainerComponent>
    </AppBar>
  )
}

export default HomeHeader;