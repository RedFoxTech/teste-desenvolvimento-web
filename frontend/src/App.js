import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import TemplateDefault from './templates/Default';
import SearchPokemon from './components/Search';
import PokemonGrid from './components/Grid';
import FormPokemon from './components/Form';

function App() {
    const [screenState, setScreenState] = useState('search');
    const [pokemonData, setPokemonData] = useState([]);

    const handleRegisterClick = () => {
        setScreenState('register');
    };

    const handleBackClick = () => {
        setScreenState('search');
    };

    const renderContent = () => {
        if (screenState === 'search') {
            return (
                <>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" sx={{ mb: '15px' }}>
                            Qual pokemon deseja encontrar
                        </Typography>
                        <SearchPokemon setPokemonData={setPokemonData} />
                    </Container>
                    <Container maxWidth="md" sx={{ mt: '50px' }} align="right">
                        <Button variant="contained" onClick={handleRegisterClick}>Registrar</Button>
                    </Container>
                    <Container maxWidth="lg" sx={{ mt: '30px' }}>
                        <Typography component="h2" variant="h4" align="center" color="textPrimary">
                            Pokemons
                        </Typography>
                    </Container>
                    <br />
                    <Container maxWidth="md">
                        <PokemonGrid searchedPokemons={pokemonData} />
                    </Container>
                </>
            );
        } else {
            return (
                <>
                    <Container maxWidth="md" align="right">
                        <Button variant="contained" onClick={handleBackClick}>Voltar</Button>
                    </Container>
                    <Container maxWidth="lg" sx={{ mt: '30px' }}>
                        <Typography component="h2" variant="h4" align="center" color="textPrimary">
                            Pokemons
                        </Typography>
                    </Container>
                    <br />
                    <Container maxWidth="md">
                        <FormPokemon />
                    </Container>
                </>
            );
        }
    };

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                {renderContent()}
            </Container>
        </TemplateDefault>
    );
}

export default App;
