import React, { useState } from 'react';
import { createPokemon } from '../api';
import { Button, Grid, TextField } from '@mui/material';

const FormPokemon = () => {
    const [name, setName] = useState('');
    const [pokedexNumber, setPokedexNumber] = useState('');
    const [imgName, setImgName] = useState('');
    const [generation, setGeneration] = useState('');
    const [evolutionStage, setEvolutionStage] = useState('');
    const [evolved, setEvolved] = useState('');
    const [familyID, setFamilyID] = useState('');
    const [crossGen, setCrossGen] = useState('');
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');
    const [weather1, setWeather1] = useState('');
    const [weather2, setWeather2] = useState('');
    const [statTotal, setStatTotal] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [sta, setSta] = useState('');
    const [legendary, setLegendary] = useState('');
    const [acquireable, setAcquireable] = useState('');
    const [spawns, setSpawns] = useState('');
    const [regional, setRegional] = useState('');
    const [raidable, setRaidable] = useState('');
    const [hatchable, setHatchable] = useState('');
    const [shiny, setShiny] = useState('');
    const [nest, setNest] = useState('');
    const [isNewPokemon, setIsNewPokemon] = useState('');
    const [notGettable, setNotGettable] = useState('');
    const [futureEvolve, setFutureEvolve] = useState('');
    const [maxCP40, setMaxCP40] = useState('');
    const [maxCP39, setMaxCP39] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const pokemon = {
            name,
            pokedexNumber,
            imgName,
            generation,
            evolutionStage,
            evolved,
            familyID,
            crossGen,
            type1,
            type2,
            weather1,
            weather2,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            acquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            isNewPokemon,
            notGettable,
            futureEvolve,
            maxCP40,
            maxCP39
        };
        await createPokemon(pokemon);
        // Limpar campos após salvar o pokemon
        setName('');
        setPokedexNumber('');
        setImgName('');
        setGeneration('');
        setEvolutionStage('');
        setEvolved('');
        setFamilyID('');
        setCrossGen('');
        setType1('');
        setType2('');
        setWeather1('');
        setWeather2('');
        setStatTotal('');
        setAtk('');
        setDef('');
        setSta('');
        setLegendary('');
        setAcquireable('');
        setSpawns('');
        setRegional('');
        setRaidable('');
        setHatchable('');
        setShiny('');
        setNest('');
        setIsNewPokemon('');
        setNotGettable('');
        setFutureEvolve('');
        setMaxCP40('');
        setMaxCP39('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} sx={
                {
                    px: 2,
                    py: 2
                }
            }>
                <Grid container spacing={2} alignItems="center" >
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="PokedexNumber" value={pokedexNumber} onChange={(e) => setPokedexNumber(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="imgName" value={imgName} onChange={(e) => setImgName(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Generation" value={generation} onChange={(e) => setGeneration(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Evolution Stage" value={evolutionStage} onChange={(e) => setEvolutionStage(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Evolved" value={evolved} onChange={(e) => setEvolved(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Family ID" value={familyID} onChange={(e) => setFamilyID(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Cross Generation" value={crossGen} onChange={(e) => setCrossGen(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Type 1" value={type1} onChange={(e) => setType1(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Type 2" value={type2} onChange={(e) => setType2(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Weather 1" value={weather1} onChange={(e) => setWeather1(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Weather 2" value={weather2} onChange={(e) => setWeather2(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Stat Total" value={statTotal} onChange={(e) => setStatTotal(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Attack" value={atk} onChange={(e) => setAtk(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Defense" value={def} onChange={(e) => setDef(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Stamina" value={sta} onChange={(e) => setSta(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Legendary" value={legendary} onChange={(e) => setLegendary(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Acquireable" value={acquireable} onChange={(e) => setAcquireable(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Spawns" value={spawns} onChange={(e) => setSpawns(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Regional" value={regional} onChange={(e) => setRegional(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Raidable" value={raidable} onChange={(e) => setRaidable(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Hatchable" value={hatchable} onChange={(e) => setHatchable(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Shiny" value={shiny} onChange={(e) => setShiny(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="Nest" value={nest} onChange={(e) => setNest(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField label="isNewPokemon" value={isNewPokemon} onChange={(e) => setIsNewPokemon(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="NotGettable" value={notGettable} onChange={(e) => setNotGettable(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="FutureEvolve" value={futureEvolve} onChange={(e) => setFutureEvolve(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="MaxCP40" value={maxCP40} onChange={(e) => setMaxCP40(e.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="MaxCP39" value={maxCP39} onChange={(e) => setMaxCP39(e.target.value)} fullWidth />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">Create Pokemon</Button>
            </form >
        </>
    );
};

export default FormPokemon;
