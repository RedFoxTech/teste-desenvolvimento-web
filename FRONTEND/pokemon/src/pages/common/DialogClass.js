import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Autocomplete from '@material-ui/lab/Autocomplete'
import FormLabel from '@material-ui/core/FormLabel'

export default class DialogClass extends Component {

    render () {
        const { root, open, buttonName} = this.props
        const types = [
            { type: 'Normal' }, { type: 'Fire' }, { type: 'Water' }, { type: 'Grass ' }, { type: 'Eletric' }, { type: 'Ice' }, { type: 'Fighting' },
            { type: 'Poison' }, { type: 'Ground' }, { type: 'Flying' }, { type: 'Psychic' }, { type: 'Bug' }, { type: 'Rock' }, { type: 'Ghost' }, { type: 'Dark' }, { type: 'Dragon' }, { type: 'Steel' }, { type: 'Fairy' }]
        const weathers = [
            { weather: 'Sunny/Clear' }, { weather: 'Rainy' }, { weather: 'Wind' }, { weather: 'Snow' }, { weather: 'Fog' }, { weather: 'Cloudy' }, { weather: 'Partly cloudy' }
        ]
        const evolveds = [
            { evolved: '0' }, { evolved: '1' }, { evolved: '2' }, { evolved: '3' }, { evolved: 'Evolved' }, { evolved: 'Lower' }, { evolved: '' },
        ]
        return (
            <Dialog type="form" open={open} onClose={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Cadastrar Pokémon</DialogTitle>
                    <DialogContent>
                        <TextField
                            onChange={(event) => { root.handleChange('name', event) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            value={root.state.pokemon.name}
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('pokedexNumber', event) }}
                            margin="dense"
                            id="name"
                            label="Pokedex Number"
                            type="Number"
                            fullWidth
                            value={root.state.pokemon.pokedexNumber}
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('imgName', event) }}
                            value={root.state.pokemon.imgName}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="Img number"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('generation', event) }}
                            value={root.state.pokemon.generation}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="Generation"
                            fullWidth
                            required
                        />
                        <Autocomplete
                            defaultValue={root.state.pokemon.evolutionStage}
                            id="combo-box-demo"
                            options={evolveds}
                            getOptionLabel={(option) => option.evolved}
                            style={{ width: 300 }}
                            onChange={(event) => { root.handleChangeCmb('evolutionStage', event) }}
                            renderInput={(params) => <TextField {...params} label="Evolution Stage" variant="outlined" />}
                        />
                        <FormLabel component="legend">Evolved</FormLabel>
                        <RadioGroup
                            aria-label="Evolved"
                            name="evolved"
                            defaultValue={root.state.pokemon.evolved}
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="Yes"
                                onChange={(event) => { root.handleChange('evolved', event) }}
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="No"
                                onChange={(event) => { root.handleChange('evolved', event) }}
                            />
                        </RadioGroup>
                        <TextField
                            value={root.state.pokemon.FamilyID}
                            onChange={(event) => { root.handleChange('FamilyID', event) }}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="FamilyID"
                            fullWidth
                        />
                        <FormLabel component="legend">Cross Gen</FormLabel>
                        <RadioGroup
                            aria-label="Cross Gen"
                            name="crossGen"
                            defaultValue={root.state.pokemon.crossGen}
                        >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    onChange={(event) => { root.handleChange('crossGen', event) }}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    onChange={(event) => { root.handleChange('crossGen', event) }}
                                />
                        </RadioGroup>
                        <Autocomplete
                            defaultValue={root.state.pokemon.type1}
                            id="combo-box-demo"
                            onChange={(event) => { root.handleChangeCmb('type1', event) }}
                            options={types}
                            getOptionLabel={(option) => option.type}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField required {...params} label="Type 1" variant="outlined" />}
                        />
                        <Autocomplete
                            onChange={(event) => { root.handleChangeCmb('type2', event) }}
                            defaultValue={root.state.pokemon.type2}
                            id="combo-box-demo"
                            options={types}
                            getOptionLabel={(option) => option.type}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type 2" variant="outlined" />}
                        />
                        <Autocomplete
                            defaultValue={root.state.pokemon.weather1}
                            id="combo-box-demo"
                            onChange={(event) => { root.handleChangeCmb('weather1', event) }}
                            options={weathers}
                            getOptionLabel={(option) => option.weather}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField required {...params} label="Weather 1" variant="outlined" />}
                        />
                        <Autocomplete
                            onChange={(event) => { root.handleChangeCmb('weather2', event) }}
                            id="combo-box-demo"
                            defaultValue={root.state.pokemon.weather2}
                            options={weathers}
                            getOptionLabel={(option) => option.weather}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Weather 2" variant="outlined" />}
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('statTotal', event) }}
                            margin="dense"
                            value={root.state.pokemon.statTotal}
                            id="name"
                            type="Number"
                            label="Stat Total"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('atk', event) }}
                            margin="dense"
                            value={root.state.pokemon.atk}
                            id="name"
                            type="Number"
                            label="ATK"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('def', event) }}
                            margin="dense"
                            value={root.state.pokemon.def}
                            id="name"
                            type="Number"
                            label="DEF"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('sta', event) }}
                            margin="dense"
                            value={root.state.pokemon.sta}
                            id="name"
                            type="Number"
                            label="STA"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('legendary', event) }}
                            margin="dense"
                            value={root.state.pokemon.legendary}
                            id="name"
                            type="Number"
                            label="Lendary"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('aquireable', event) }}
                            margin="dense"
                            value={root.state.pokemon.aquireable}
                            id="name"
                            type="Number"
                            label="Aquireable"
                            fullWidth
                            required
                        />
                        <FormLabel component="legend">Spawns</FormLabel>
                        <RadioGroup
                            aria-label="Spawns"
                            name="Spawns"
                            defaultChecked={root.state.pokemon.spawns}
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="Yes"
                                onChange={(event) => { root.handleChange('spawns', event) }}
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="No"
                                onChange={(event) => { root.handleChange('spawns', event) }}
                            />
                        </RadioGroup>
                        <FormLabel component="legend">Regional</FormLabel>
                        <RadioGroup
                            aria-label="Regional"
                            name="Regional"
                            defaultValue={root.state.pokemon.regional}
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="Yes"
                                onChange={(event) => { root.handleChange('regional', event) }}
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="No"
                                onChange={(event) => { root.handleChange('regional', event) }}
                            />
                        </RadioGroup>
                        <TextField
                            onChange={(event) => { root.handleChange('raidable', event) }}
                            value={root.state.pokemon.raidable}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="Raidable"
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(event) => { root.handleChange('hatchable', event) }}
                            value={root.state.pokemon.hatchable}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="Hatchable"
                            fullWidth
                            required
                        />
                        <FormLabel component="legend">Shiny</FormLabel>
                        <RadioGroup
                            required
                            aria-label="Shiny"
                            name="Shiny"
                            defaultValue={root.state.pokemon.shiny}
                        >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    onChange={(event) => { root.handleChange('shiny', event) }}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    onChange={(event) => { root.handleChange('shiny', event) }}
                                />
                        </RadioGroup>
                        <FormLabel component="legend">Nest</FormLabel>
                        <RadioGroup
                            required
                            aria-label="Nest"
                            name="Nest"
                            defaultValue={root.state.pokemon.nest}
                        >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    onChange={(event) => { root.handleChange('nest', event) }}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    onChange={(event) => { root.handleChange('nest', event) }}
                                />
                        </RadioGroup>
                        <FormLabel component="legend">New</FormLabel>
                        <RadioGroup
                            required
                            aria-label="pokemonNew"
                            name="pokemonNew"
                            defaultValue={root.state.pokemon.pokemonNew}
                        >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    onChange={(event) => { root.handleChange('pokemonNew', event) }}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    onChange={(event) => { root.handleChange('pokemonNew', event) }}
                                />
                        </RadioGroup>
                        <FormLabel component="legend">Not-Gettable</FormLabel>
                        <RadioGroup
                            required
                            aria-label="notGettable"
                            name="notGettable"
                            defaultValue={root.state.pokemon.notGettable}
                        >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    onChange={(event) => { root.handleChange('notGettable', event) }}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    onChange={(event) => { root.handleChange('notGettable', event) }}
                                />
                        </RadioGroup>
                        <FormLabel component="legend">Future Evolve</FormLabel>
                        <RadioGroup
                            required
                            aria-label="futureEvolve"
                            name="futureEvolve"
                            defaultValue={root.state.pokemon.futureEvolve}
                        >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    onChange={(event) => { root.handleChange('futureEvolve', event) }}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    onChange={(event) => { root.handleChange('futureEvolve', event) }}
                                />
                        </RadioGroup>
                        <TextField
                            onChange={(event) => { root.handleChange('calculation40', event) }}
                            value={root.state.pokemon.calculation40}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="100% CP @ 40"
                            fullWidth
                            required
                        />
                         <TextField
                            onChange={(event) => { root.handleChange('calculation39', event) }}
                            value={root.state.pokemon.calculation39}
                            margin="dense"
                            id="name"
                            type="Number"
                            label="100% CP @ 39"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="img-file"
                            type="file"
                            fullWidth
                            onChange={(event) => { root.insertImage(event) }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={ () => root.closeDialog() }
                            color="primary">Cancelar
                        </Button>
                        <Button
                            type = "submit"
                            color="primary"
                            onClick={ () => { buttonName === 'Salvar' ? root.savePokemon() : root.updatePokemon()
                                root.closeDialog()} }>
                            { buttonName }
                        </Button>
                    </DialogActions>
            </Dialog>
        )
    }

    handleChange (key, event) {
        this.setState({ key: event.target.value })
    }
}
