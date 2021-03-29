import { AppBar, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import ContainerComponent from "../Container";
import Logo from "../Logo";
import useStyles from "./styles"

function GoBackDashBoardHeader() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <ContainerComponent>
        <Box component="main" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <div>
            <Logo />
          </div>
          <nav>  
            <Button variant="contained" color="primary" size="small"> 
              <Link className={`${classes.btnStyle} color-white`} to='/dashboard'>Voltar</Link>
            </Button>
          </nav>
        </Box>
      </ContainerComponent>
    </AppBar>
  )
}

export default GoBackDashBoardHeader;