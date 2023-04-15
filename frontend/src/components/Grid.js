import { useEffect, useState } from 'react';
import { getPokemons } from '../api';
import Card from './Card';
import { Grid, Box, Button, Typography } from '@mui/material';

const POKEMONS_PER_PAGE = 12;

export default function PokemonGrid({ searchedPokemons }) {
    const [pokemons, setPokemons] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const loadPokemons = async () => {
        const response = await getPokemons();
        const total = Math.ceil(response.length / POKEMONS_PER_PAGE);
        setTotalPages(total);
        setPokemons(response.slice(0, total * POKEMONS_PER_PAGE)); // atualiza pokemons com a lista correspondente à página atual
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        loadPokemons();
    }, [pageNumber]); // adiciona pageNumber como dependência do useEffect

    const handlePrevPageClick = () => {
        setPageNumber(pageNumber - 1);
    };

    const handleNextPageClick = () => {
        setPageNumber(pageNumber + 1);
    };

    const renderPokemon = (pokemon) => (
        <Card key={pokemon._id} pokemon={pokemon} onUpdate={loadPokemons} />
    );

    const renderPokemons = () => {
        const start = pageNumber * POKEMONS_PER_PAGE;
        const end = start + POKEMONS_PER_PAGE;
        return (
            <>
                {
                    searchedPokemons.length ?
                        <Grid container spacing={2}>
                            {searchedPokemons.map(renderPokemon)}
                        </Grid>
                        : <Grid container spacing={2}>
                            {pokemons.slice(start, end).map(renderPokemon)}
                        </Grid>
                }
            </>
        );
    };

    return (
        <>
            {
                searchedPokemons.length ?
                    <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        {renderPokemons()}
                    </Box>
                    : <Box>
                        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                            <Button onClick={handlePrevPageClick} disabled={pageNumber === 0} variant="contained" color="primary">
                                Anterior
                            </Button>
                            <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: '0 20px' }}>
                                <Typography variant="body1">
                                    {pageNumber + 1} | {totalPages + 1}
                                </Typography>
                            </Box>
                            <Button onClick={handleNextPageClick} disabled={pageNumber === totalPages - 1} variant="contained" color="primary">
                                Próxima
                            </Button>
                        </Box>
                        {renderPokemons()}
                    </Box>
            }
        </>
    );
};