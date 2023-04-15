import { useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Modal, Box, useTheme, CardActions, Button } from '@mui/material';
import { deletePokemon, getPokemonById } from '../api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: '80vw', // Define o tamanho máximo do modal
    maxHeight: '80vh', // Define a altura máxima do modal
    overflow: 'auto',
};

export default function Pokemon({ pokemon,onUpdate }) {
    const theme = useTheme();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleCardClick = async () => {
        const data = await getPokemonById(pokemon._id);
        setModalData(data);
        setModalOpen(true);
    }

    const handleDeleteClick = async () => {
        await deletePokemon(pokemon._id);
        onUpdate();
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <Grid key={pokemon._id} item xs={12} sm={6} md={4}>
                <Card sx={
                    {
                        px: 2,
                        py: 2
                    }
                }
                >
                    <CardMedia
                        component="img"
                        image={pokemon.image}
                        alt={pokemon.name}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <Button variant="contained" color="error" onClick={handleDeleteClick}>
                            Deletar
                        </Button>
                        <Button variant="outlined" color="primary">
                            Editar
                        </Button>
                        <Button variant="contained" onClick={handleCardClick}>
                            Dados
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Modal open={modalOpen} onClose={handleCloseModal}>
                <Box
                    sx={style}
                >

                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <h2>{modalData.name}</h2>
                            <img src={modalData.image} alt={modalData.name} />
                            <p>Pokedex Number: {modalData.pokedexNumber}</p>
                            <p>Generation: {modalData.generation}</p>
                            <p>Evolution Stage: {modalData.evolutionStage}</p>
                            <p>Evolved: {modalData.evolved ? 'Yes' : 'No'}</p>
                            <p>Family ID: {modalData.familyID}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Cross Gen: {modalData.crossGen ? 'Yes' : 'No'}</p>
                            <p>Type 1: {modalData.type1}</p>
                            <p>Type 2: {modalData.type2}</p>
                            <p>Weather 1: {modalData.weather1}</p>
                            <p>Weather 2: {modalData.weather2}</p>
                            <p>Stat Total: {modalData.statTotal}</p>
                            <p>Attack: {modalData.atk}</p>
                            <p>Defense: {modalData.def}</p>
                            <p>Stamina: {modalData.sta}</p>
                            <p>Legendary: {modalData.legendary ? 'Yes' : 'No'}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Acquireable: {modalData.acquireable ? 'Yes' : 'No'}</p>
                            <p>Spawns: {modalData.spawns ? 'Yes' : 'No'}</p>
                            <p>Regional: {modalData.regional ? 'Yes' : 'No'}</p>
                            <p>Raidable: {modalData.raidable ? 'Yes' : 'No'}</p>
                            <p>Hatchable: {modalData.hatchable ? 'Yes' : 'No'}</p>
                            <p>Shiny: {modalData.shiny ? 'Yes' : 'No'}</p>
                            <p>Nest: {modalData.nest ? 'Yes' : 'No'}</p>
                            <p>New Pokemon: {modalData.isnewPokemon ? 'Yes' : 'No'}</p>
                            <p>Not Gettable: {modalData.notGettable ? 'Yes' : 'No'}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Future Evolve: {modalData.futureEvolve ? 'Yes' : 'No'}</p>
                            <p>Max CP (Lv 40): {modalData.maxCP40}</p>
                            <p>Max CP (Lv 39): {modalData.maxCP39}</p>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
}
