import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import { routes } from "../Router/index";
import { connect } from "react-redux";
import logo from "../../resources/pokemon_go.png";
import { createPokemon } from "../../actions/pokemons";
import { DivContet, HeaderLogin, SignUpWrapper, LogoHome } from "./styled"



class RegisterPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedexID: "",
            name: "",
            img: "",
            generation: "",
            envolved: "",
            familyID: "",
            cross_gen: "",
            type1: "",
            type2: "",
            weather1: "",
            weather2: "",
            stat_total: "",
            atk: "",
            def: "",
            sta: "",
            shiny: ""
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSignupButton = () => {
        this.props.createPokemon(
            this.state.pokedexID,
            this.state.name,
            this.state.img,
            this.state.generation,
            this.state.envolved,
            this.state.familyID,
            this.state.cross_gen,
            this.state.type1,
            this.state.type2,
            this.state.weather1,
            this.state.weather2,
            this.state.stat_total,
            this.state.atk,
            this.state.def,
            this.state.sta,
            this.state.shiny
        )
    }

    render() {
        const { pokedexID, name, img, generation, envolved, familyID, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, shiny } = this.state

        return (

            <DivContet>
                <HeaderLogin>
                    <a href="/" > <LogoHome src={logo} /> </a>
                </HeaderLogin>

                <SignUpWrapper>
                    <TextField
                        onChange={this.handleFieldChange}
                        name="pokedexID"
                        type="text"
                        label="Pokedex ID"
                        value={pokedexID}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="name"
                        type="text"
                        label="Name"
                        value={name}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="img"
                        type="text"
                        label="Image"
                        value={img}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="generation"
                        type="number"
                        label="Generation"
                        value={generation}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="envolved"
                        type="number"
                        label="Envolved"
                        value={envolved}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="familyID"
                        type="number"
                        label="FamilyID"
                        value={familyID}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="cross_gen"
                        type="number"
                        label="Cross_gen"
                        value={cross_gen}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="type1"
                        type="text"
                        label="Type 1"
                        value={type1}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="type2"
                        type="text"
                        label="Type 2"
                        value={type2}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="weather1"
                        type="text"
                        label="Weather 1"
                        value={weather1}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="weather2"
                        type="text"
                        label="Weather 2"
                        value={weather2}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="stat_total"
                        type="number"
                        label="Stat Total"
                        value={stat_total}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="atk"
                        type="number"
                        label="Attack"
                        value={atk}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="def"
                        type="text"
                        label="Defense"
                        value={def}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="sta"
                        type="text"
                        label="Stamina"
                        value={sta}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="shiny"
                        type="number"
                        label="Shiny"
                        value={shiny}
                    />




                    <Button onClick={this.handleSignupButton}>Register</Button>
                </SignUpWrapper>
            </DivContet>
        );


    }

}

const mapDispatchToProps = (dispatch) => ({
    createPokemon: (pokedexID, name, img, generation, envolved, familyID, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, shiny) =>
        dispatch(createPokemon(pokedexID, name, img, generation, envolved, familyID, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, shiny))

})



export default connect(
    null,
    mapDispatchToProps
)(RegisterPokemon)