import React from "react";

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { routes } from '../../Router';

import { PageWrapper, Title, FormStyle } from "./style";

import ButtonAppBar from "../../components/AppBar";
import MyTextField from '../../components/input';
import ButtonStyle from '../../components/button';


class UpdatePokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                row: "",
                name: "",
                pokedex_number: "",
                img_name: "",
                generation: "",
                evolution_stage: "",
                evolved: "",
                familyId: "",
                cross_gen: "",
                type1: "",
                type2: "",
                weather1: "",
                weather2: "",
                stat_total: "",
                atk: "",
                def: "",
                sta: "",
                legendary: "",
                aquireblae: "",
                spawms: "",
                regional: "",
                raidable: "",
                hatchabel: "",
                shiny: "",
                nest: "",
                new_New: "",
                not_Gettable: "",
                future_evolve: "",
                cp_40: "",
                cp_39: ""
            }
        }
    }

    handleInputValue = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSbmit = (e) => {
        e.preventDefault()
        this.props.submitGorm(this.state.form)
        this.setState({
            form: {
                row: "",
                name: "",
                pokedex_number: "",
                img_name: "",
                generation: "",
                evolution_stage: "",
                evolved: "",
                familyId: "",
                cross_gen: "",
                type1: "",
                type2: "",
                weather1: "",
                weather2: "",
                stat_total: "",
                atk: "",
                def: "",
                sta: "",
                legendary: "",
                aquireblae: "",
                spawms: "",
                regional: "",
                raidable: "",
                hatchabel: "",
                shiny: "",
                nest: "",
                new_New: "",
                not_Gettable: "",
                future_evolve: "",
                cp_40: "",
                cp_39: ""
            }
        })
    }

    render() {
        return (
            <PageWrapper>
                <ButtonAppBar pageName="Pokemon Go"
                />
                <Title> Alterações do registro de Pokemons </Title>
                <FormStyle onSubmit={this.handleSubmit}>
                    <MyTextField
                        name="row"
                        type="number"
                        label="Row"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.row} />
                    <MyTextField
                        name="name"
                        type="text"
                        label="Name"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.name} />
                    <MyTextField
                        name="pokedex number"
                        type="number"
                        label="Podekex Number"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.pokedex_number} />
                    <MyTextField
                        name="img Name"
                        type="number"
                        label="Img name"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.img_name} />
                    <MyTextField
                        name="generation"
                        type="number"
                        label="Generation"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.generation} />
                    <MyTextField
                        name="evolution stage"
                        type="number"
                        label="Evolution Stage"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.evolution_stage} />
                    <MyTextField
                        name="evolved"
                        type="number"
                        label="Evolved"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.evolved} />
                    <MyTextField
                        name="familyId"
                        type="number"
                        label="FamilyID"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.familyId} />
                    <MyTextField
                        name="cross gen"
                        type="number"
                        label="Cross Gen"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.cross_gen} />
                    <MyTextField
                        name="type1"
                        type="number"
                        label="Type 1"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.type1} />
                    <MyTextField
                        name="type2"
                        type="text"
                        label="Type 2"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.type2} />
                    <MyTextField
                        name="weather 1"
                        type="text"
                        label="Weather 1"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.weather1} />
                    <MyTextField
                        name="weather 2"
                        type="text"
                        label="Weather 2"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.weather2} />
                    <MyTextField
                        name="stat total"
                        type="number"
                        label="Stat Total "
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.stat_total} />
                    <MyTextField
                        name="atk"
                        type="number"
                        label="ATK"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.atk} />
                    <MyTextField
                        name="def"
                        type="number"
                        label="DEF"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.def} />
                    <MyTextField
                        name="sta"
                        type="number"
                        label="STA"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.sta} />
                    <MyTextField
                        name="legendary"
                        type="number"
                        label="Legendary"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.legendary} />
                    <MyTextField
                        name="aquireable"
                        type="number"
                        label="Aquireable"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.aquireblae} />
                    <MyTextField
                        name="spawns"
                        type="number"
                        label="Spawns"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.spawms} />
                    <MyTextField
                        name="regional"
                        type="number"
                        label="Regional"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.regional} />
                    <MyTextField
                        name="raidable"
                        type="number"
                        label="Raidable"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.raidable} />
                    <MyTextField
                        name="hatchable"
                        type="number"
                        label="Hatchable"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.hatchabel} />
                    <MyTextField
                        name="shiny"
                        type="number"
                        label="Shiny"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.shiny} />
                    <MyTextField
                        name="nest"
                        type="number"
                        label="Nest"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.nest} />
                    <MyTextField
                        name="new_New"
                        type="number"
                        label="New"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.new_New} />
                    <MyTextField
                        name="not-gettable"
                        type="number"
                        label="Not-Gettable"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.not_Gettable} />
                    <MyTextField
                        name="future evolve"
                        type="number"
                        label="Future Evolve"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.future_evolve} />
                    <MyTextField
                        name="100% CP @ 40"
                        type="number"
                        label="100% CP @ 40"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.cp_40} />
                    <MyTextField
                        name="100% CP @ 39"
                        type="number"
                        label="100% CP @ 39"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.cp_39} />
                    <ButtonStyle type='submit' btnText="Atualizar" onClick={this.props.goToHomePage}/>
                </FormStyle>
            </PageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToHomePage: () => dispatch(push(routes.home))
    }
}

export default connect (null, mapDispatchToProps)(UpdatePokemon);