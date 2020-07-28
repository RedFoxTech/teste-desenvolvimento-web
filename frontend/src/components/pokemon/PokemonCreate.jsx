import React, { Component } from 'react'
import './PokemonCreate.css'
import Main from '../template/Main'
import axios from 'axios'
import { Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const headerProps = {
    icon: "users",
    title: 'Pokemóns',
    subtitle: 'Pokemón registration:'
}

const baseUrl = 'http://localhost:3001/Pokemon'
const initialState = {
    pokemon: { Row: '',
    Name: '', 
    PokedexNumber: '',
    ImgName: '',
    Generation: '',
    EvolutionStage: '',
    Evolved: '',
    FamilyID: '',
    CrossGen: '',
    Type1: '',
    Type2: '',
    Weather1: '',
    Weather2: '',
    STATTOTAL: '',
    ATK: '',
    DEF: '',
    STA: ''},
    list: []
}

export default class PokemonCreate extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ pokemon: initialState.pokemon })
    }

    save() {
        const pokemon = this.state.pokemon
        const method = pokemon.Row ? 'put' : 'post'
        const url = pokemon.Row ? `${baseUrl}/${pokemon.Row}` : baseUrl
        axios[method](url, pokemon).then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ pokemon: initialState.pokemon, list })
        })
    }

    getUpdatedList(pokemon, add = true) {
        const list = this.state.list.filter(u => u.Row !== pokemon.Row)
        if (add) list.unshift(pokemon)
        return list
    }

    updateField(event) {
        const pokemon = { ...this.state.pokemon }
        pokemon[event.target.Name] = event.target.value
        this.setState({ pokemon })
    }

    renderForm() {
        return (

            <Form className="form">
                <Form.Group controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" value={this.state.pokemon.Name}
                        onChange={e => this.updateField(e)} type="text"
                        placeholder="Enter the Pokemón name" />
                    <Form.Text className="text-muted">
                        We'll never share your Pokemón with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Pokemón ATK</Form.Label>
                    <Form.Control name="text" value={this.state.pokemon.ATK}
                        onChange={e => this.updateField(e)} type="text"
                        placeholder="Enter the Pokemón ATK" />
                </Form.Group>

                <Button className="btnSuccess" variant="btn btn-outline-success" type="submit"
                    onClick={e => this.save(e)} >
                    Save
                </Button>

                <Button variant="btn btn-outline-danger" type="submit"
                    onClick={e => this.clear(e)} >
                    Cancel
                </Button>
                <hr/>
            </Form>

        )
    }

    load(pokemon) {
        this.setState({ pokemon })
    }

    remove(pokemon) {
        axios.delete(`${baseUrl}/${pokemon.Row}`).then(resp => {
            const list = this.getUpdatedList(pokemon, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ROW</th>
                        <th>Name</th>
                        <th>Pokemón ATK</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        )
    }
    renderRows() {
        return this.state.list.map(pokemon => {
            return (
                <tr key={pokemon.Row}>
                    <td>{pokemon.Row}</td>
                    <td>{pokemon.Name}</td>
                    <td>{pokemon.ATK}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(pokemon)}>
                            <FontAwesomeIcon icon="edit" />
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(pokemon)}>
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <Main {...headerProps}>
                <FontAwesomeIcon icon="dragon" /> Pokemón registration
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}