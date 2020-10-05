import React, { Component } from 'react'
import PokemonTable from './common/PokemonTable'
import Pagination from '@material-ui/lab/Pagination'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Autocomplete from '@material-ui/lab/Autocomplete'
import DialogClass from './common/DialogClass'
import Snackbar from '@material-ui/core/Snackbar'
import ManageResponse from './common/ManageResponse'
import DialogPokemonInfo from './common/DialogInfoPokemon'

export class PokemonList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            page: 1,
            toast: { open: false, mensage: '' },
            openDialog: false,
            openPekemonInfo: false,
            amountPages: 1,
            isLoaded: false,
            type: '',
            pokemons: [],
            buttonName: 'Salvar',
            pokemon: {
                name: '',
                pokedexNumber: '',
                imgName: '',
                generation: '',
                evolutionStage: '',
                evolved: '',
                FamilyID: '',
                crossGen: '',
                type1: '',
                type2: '',
                weather1: '',
                weather2: '',
                statTotal: '',
                atk: '',
                def: '',
                sta: '',
                legendary: '',
                aquireable: '',
                spawns: '',
                regional: '',
                raidable: '',
                hatchable: '',
                shiny: '',
                nest: '',
                pokemonNew: '',
                notGettable: '',
                futureEvolve: '',
                calculation40: '',
                calculation39: '',
                url: '',
                key: ''
            },
            img: {
                namePokemon: '',
                file: ''
            }
        }
    }

    componentDidMount () {
        this.setState({ pokemons: [] }, () => { this.getPokemons() })
    }

    getPokemons (event) {
        const p = this.state.page
        fetch(`${process.env.REACT_APP_API_URL}/api/pokemon?page=${p}&limit=8&type=${this.state.type}`, {
            method: 'GET',
        })
        .then(res => {
            return res.json()
        })
        .then(
            result => {
                const NUMBER_OF_POKEMON_PER_PAGES = 8
                const amountPages =
                        (result.amount % NUMBER_OF_POKEMON_PER_PAGES === 0 ? parseInt(result.amount / NUMBER_OF_POKEMON_PER_PAGES) : parseInt(result.amount / NUMBER_OF_POKEMON_PER_PAGES) + 1)
                this.setState({ amountPages: amountPages })
                if (result.pokemons.length) {
                    this.setState({ pokemons: result.pokemons })
                } else {
                    this.setState({ isLoaded: true })
                }
            }
                //() => { this.handleResult() }
        )
    }

    render () {
        const types = [
            { type: 'Normal' }, { type: 'Fire' }, { type: 'Water' }, { type: 'Grass' }, { type: 'Eletric' }, { type: 'Ice' }, { type: 'Fighting' },
            { type: 'Poison' }, { type: 'Ground' }, { type: 'Flying' }, { type: 'Psychic' }, { type: 'Bug' }, { type: 'Rock' }, { type: 'Ghost' }, { type: 'Dark' }, { type: 'Dragon' }, { type: 'Steel' }, { type: 'Fairy' }]
        return (
            <selection className='pokemon_main'>
                <selection className="pokemon_filter_side">
                    <Button
                        onClick = { () => {
                            this.setState({ openDialog: true })
                        }}
                        className="btn_new"
                        variant="contained"
                        color="primary">Cadastrar novo pokémon</Button>
                    <Autocomplete
                        onChange={ (event) => { this.setState({type: event.target.textContent}, this.componentDidMount()) }}
                        className="pokemon_type"
                        id="combo-box-demo"
                        options={types}
                        getOptionLabel={(option) => option.type}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Tipo" variant="outlined" />}
                    />
                    <Button
                        onClick={ () => { this.setState({ type: '' }, this.componentDidMount() )}}
                        className="btn_clear"
                        variant="contained"
                        color="primary">Limpar filtros</Button>
                </selection>
                <selection className='pokemon_header'>
                </selection>
                <PokemonTable
                    root = { this }
                    pokemons = { this.state.pokemons }/>
                <div className="pagination">
                    <Pagination
                        onChange={ (event, page) => { this.helper(event, page) }}
                        count={this.state.amountPages}
                        color="primary"
                        size="large"/>
                </div>
                <DialogClass
                buttonName = { this.state.buttonName }
                root = { this }
                open = { this.state.openDialog }/>
                <DialogPokemonInfo
                    open = { this.state.openPekemonInfo }
                    root = { this }/>
                <Snackbar
                    anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
                    open = { this.state.toast.open }
                    onClose = { () => this.closeToast() }
                    message = { this.state.toast.message }
                    autoHideDuration = { 3500 } />
            </selection>
        )
    }

    showRowInfo (pokemon) {
        this.setState({ pokemon: pokemon, openPekemonInfo: true })
    }

    handleFindValue(event) {
        this.setState({ findByTypeValue: event.target.textContent })
        const value = this.state.findByTypeValue
        this.getPokemons(value)
    }

    helper (event, page) {
        this.setState({ page: page })
        this.getPokemons()
        this.componentDidMount()
    }

    closeToast () {
        const toast = this.state.toast
        toast.open = false
        toast.mensage = ''
        this.setState({ toast: toast })
    }

    closeDialog () {
        this.setState({ openDialog: false, openPekemonInfo: false })
    }

    handleChangeCmb (key, event) {
        const pokemon = this.state.pokemon
        pokemon[key] = event.target.textContent
        this.setState({ pokemon: pokemon })
    }

    handleChange (key, event) {
        if (key === 'name') {
            const img = this.state.img
            img['namePokemon'] = event.target.value
            this.setState({ img: img })
        }
        const pokemon = this.state.pokemon
        pokemon[key] = event.target.value
        this.setState({ pokemon: pokemon })
    }

    savePokemon () {
        fetch(`${process.env.REACT_APP_API_URL}/api/pokemon/`, {
            method: 'POST',
            body: JSON.stringify(this.state.pokemon),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return ManageResponse.checkStatusCode(res)
        })
        .then(
            (result) => this.handleResult(result),
            () => { this.handleResult() }
        )
    }

    deletePokemon () {
        fetch(`${process.env.REACT_APP_API_URL}/api/pokemon/`, {
            method: 'DELETE',
            body: JSON.stringify(this.state.pokemon),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return ManageResponse.checkStatusCode(res)
        })
        .then(
            result => {
                this.handleResult(result)
            },
            () => { this.handleResult() }
        )
    }

    updatePokemon () {
        fetch(`${process.env.REACT_APP_API_URL}/api/pokemon/`, {
            method: 'PUT',
            body: JSON.stringify(this.state.pokemon),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return ManageResponse.checkStatusCode(res)
        })
        .then(
            result => {
                this.handleResult(result)
            },
            () => { this.handleResult() }
        )
    }

    sendImg () {
        const formData = new FormData()
        formData.append('file', this.state.img.file[0])
        formData.append('name', this.state.img.namePokemon)
        fetch(`${process.env.REACT_APP_API_URL}/api/pokemon/img`, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            return ManageResponse.checkStatusCode(res)
        })
        .then(
            () => { this.clearStateImg() },
            () => { this.handleResult() }
        )
    }

    clearStateImg() {
        this.setState({ img: { namePokemon: '', file: '' } })
    }

    handleResult (result) {
        if (this.state.img.file) {
            this.sendImg()
        }
        if (result) {
            const toast = this.state.toast
            toast.open = true
            toast.message = result.error ? result.error : result.success
            this.setState({ toast: toast })
            this.componentDidMount()
            this.clearState()
        } else {
            this.setState({ fetching: false })
            const toast = this.state.toast
            toast.open = true
            toast.message = 'Problemas na comunicação.'
            this.setState({ toast: toast })
            this.clearState()
        }
    }

    insertImage (event) {
        const img = this.state.img
        img['file'] = event.target.files
        this.setState({ img: img })
    }

    clearState () {
        this.setState({
            pokemon: {
                name: '', pokedexNumber: '', imgName: '', generation: '',
                evolutionStage: '', evolved: '', FamilyID: '', crossGen: '',
                type1: '', type2: '', weather1: '', weather2: '', statTotal: '',
                atk: '', def: '', sta: '', legendary: '', aquireable: '', spawns: '',
                regional: '', raidable: '', hatchable: '', shiny: '', nest: '',
                pokemonNew: '', notGettable: '', futureEvolve: '', calculation40: '',
                calculation39: '', url: '', key: ''
            }
        })
        this.closeDialog()
    }
}

export default PokemonList
