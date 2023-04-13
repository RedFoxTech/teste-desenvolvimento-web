import { Button, Container, Grid, IconButton, InputBase, Paper, Typography, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from './templates/Default';
import searchBox from './utils/searchBox';

const App = () => {
    const theme = useTheme();
    return (
        <>
            <TemplateDefault>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h3" align="center" color="textPrimary" sx={{ mb: '15px' }}>
                        Qual pokemon deseja encontrar
                    </Typography>
                    <Paper sx={searchBox(theme.spacing(0, 2))}>
                        <InputBase
                            placeholder='Ex:Pikachu'
                            fullWidth
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Container>
                <Container maxWidth="lg" sx={{ mt: '50px' }} align="right">
                    <Button variant="contained">Registrar</Button>
                </Container>
                <Container maxWidth="lg" sx={{ mt: '30px' }}>
                    <Typography component="h2" variant="h4" align="center" color="textPrimary">
                        Pokemons
                    </Typography>
                </Container>
                <br />
                <Grid container spacing={4}>

                </Grid>
            </TemplateDefault>
        </>
    )
}
export default App;