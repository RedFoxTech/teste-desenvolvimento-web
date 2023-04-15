import { Button, Paper, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { getPokemonByName } from "../api";

export default function PokemonGrid({ setPokemonData }) {
    const [pokemonName, setPokemonName] = useState('');

    const handleSearch = async () => {
        const data = await getPokemonByName(pokemonName);
        setPokemonData(data);
    };

    return (
        <div>
            <Paper>
                <TextField
                    label='Ex.: Pikachu'
                    value={pokemonName}
                    fullWidth
                    onChange={(e) => setPokemonName(e.target.value)}
                    sx={{mb:'10px'}}
                />
                <Button onClick={handleSearch} variant="contained" color="primary" fullWidth>
                    BUSCAR
                </Button>
            </Paper>
        </div>
    );
}