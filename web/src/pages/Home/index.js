import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import bgImg from "../../assets/images/bgPokemon.png";

import ContainerComponent from '../../components/Container';
import HomeHeader from '../../components/HomeHeader';
import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <>
      <HomeHeader 
        registerRouter="/register"
        loginRouter="/login"
      />
      <Box bgcolor="darkLight.main" minHeight="100vh" component="main" py="6rem">
        <ContainerComponent >
          <Box display="flex" minHeight="100vh" justifyContent='center' alignItems='center'>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography className={classes.fontTitleMain} color="secondary" variant="h2" component="h1">
                  PokeStore registre seus pokemons favoritos!
                </Typography>
                
                <Typography className={classes.text} variant="body1" component="p">
                  Com o PokeStore você poderá salvar os dados de todos os pokemons que você conhece! além de poder gerenciar de um jeito simples e intuitivo.
                </Typography>

                <Button className={classes.btn} variant="contained" color="primary" size="medium">
                  <Link className={`${classes.btnStyles} color-white`} to='/register'>Começar</Link>
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" justifyContent="center" alignItems="center" height='360px'>
                  <img className={classes.bgImgStyles} src={bgImg} alt="Pokemon" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ContainerComponent>
      </Box>
    </>
  )
}

export default Home;