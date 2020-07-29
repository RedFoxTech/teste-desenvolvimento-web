import React, { Component } from 'react'
import './PokemonCreate.css'
import Main from '../template/Main'
import axios from 'axios'
import { Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const headerProps = {
    icon: "dragon",
    title: 'Pokemóns',
    subtitle: 'Pokemón registration:'
}

const baseUrl = 'http://localhost:3001/pokemons'
const initialState = {
    pokemon: {
        Name: '',
        ATK: '',
        DEF: '',
        STA: ''
    },
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
        const list = this.state.list.filter(pok => pok.Row !== pokemon.Row)
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="control" name="Name" defaultValue={this.state.pokemon.Name}
                        onChange={e => this.updateField(e)} type="text"
                        placeholder="Enter the Pokemón name" />
                    <Form.Text className="text-muted">
                        We'll never share your Pokemón with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Pokemón ATK</Form.Label>
                    <Form.Control className="control" name="ATK" defaultValue={this.state.pokemon.ATK}
                        onChange={e => this.updateField(e)} type="number"
                        placeholder="Enter the Pokemón ATK" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Pokemón DEF</Form.Label>
                    <Form.Control className="control" name="DEF" defaultValue={this.state.pokemon.DEF}
                        onChange={e => this.updateField(e)} type="number"
                        placeholder="Enter the Pokemón DEF" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Pokemón STA</Form.Label>
                    <Form.Control className="control" name="STA" defaultValue={this.state.pokemon.STA}
                        onChange={e => this.updateField(e)} type="number"
                        placeholder="Enter the Pokemón STA" />
                </Form.Group>

                <Button className="btnSuccess" variant="btn btn-outline-success" type="submit"
                    onClick={e => this.save(e)} >
                    Save
                </Button>

                <Button variant="btn btn-outline-danger" type="submit"
                    onClick={e => this.clear(e)} >
                    Cancel
                </Button>
                <hr />
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
            <Table striped bordered hover variant="dark" responsive="lg">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Pokemón ATK</th>
                        <th>Pokemón DEF</th>
                        <th>Pokemón STA</th>
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
                    <td>{pokemon.DEF}</td>
                    <td>{pokemon.STA}</td>
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