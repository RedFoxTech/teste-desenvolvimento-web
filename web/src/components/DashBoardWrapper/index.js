import { AppBar, Box, Button } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TuneIcon from '@material-ui/icons/Tune';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";

import useTokenStore from "../../hooks/useTokenStore";

import ContainerComponent from "../Container";
import Logo from "../Logo";
import useStyles from "./styles";

import { FilterPokemonsContext } from "../../contexts/FilterPokemonsContext";

function DashboardWrapper({ children}) {
  const { handleOpenDialogFilter } = useContext(FilterPokemonsContext);

  const classes = useStyles();
  const { userLogout } = useTokenStore();
  let history = useHistory();

  function handleLogout() {
    userLogout();
    history.push('/');
  }

  return (
    <>
      <AppBar position="relative" className={classes.appBar}>
      <ContainerComponent>
        <Box component="main" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <div>
          <Logo />
          </div>
          <nav>  
            <Button
              onClick={handleLogout}
              variant="contained"
              color="primary"
              className={classes.buttonLogout}
              endIcon={<ExitToAppIcon style={{ color: "#F8FAFC", fontSize: 30}}>send</ExitToAppIcon>}
            >
             Sair
            </Button>
          </nav>
        </Box>
      </ContainerComponent>
      </AppBar>
      <AppBar position="static" className={classes.navBarApp}>
        <div className={classes.wrapperButtons}>
          <Button 
            variant="outlined" 
            className={classes.buttonStyle}
            endIcon={<AddCircleOutlineIcon  className={classes.iconStyle}></AddCircleOutlineIcon>}
          >
            <Link style={{ color: "#e68b04"}} to="/create">
              Adicionar
            </Link>
          </Button>
          <Button  
            onClick={handleOpenDialogFilter}
            variant="outlined" 
            className={classes.buttonStyle}
            endIcon={<TuneIcon className={classes.iconStyle}></TuneIcon>}
          >
            Filtro
          </Button>
        </div>
      </AppBar>
      <Box bgcolor="dark.main" minHeight="100vh" component="main" display="flex" flexDirection="column" alignItems="center">
        <ContainerComponent>
            { children }
        </ContainerComponent>
      </Box>
    </>
  )
}

export default DashboardWrapper;