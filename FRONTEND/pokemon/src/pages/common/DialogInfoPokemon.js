import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close'
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';

export default class DialogInfoPokemon extends Component{

    render() {
      const { root, open} = this.props
      return (
        <div>
          <Dialog fullScreen open={open} >
            <AppBar>
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="close">
                  <CloseIcon onClick={ () => { root.closeDialog()} } />
                </IconButton>
                <Button
                    className="btn_delete"
                    onClick={() => { root.deletePokemon()}}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                >Delete
                </Button>
                <Button
                    onClick={() => { root.setState({buttonName: 'Atualizar', openDialog: true})}}
                    variant="contained"
                    color="secondary"
                    startIcon={<UpdateTwoToneIcon />}
                >Atualizar
                </Button>
              </Toolbar>
            </AppBar>
            <section className="pokemon_info">
                <div className="info1"><strong>Generation:</strong><br></br> {root.state.pokemon.generation}</div>
                <div className="atk"><strong>ATK:</strong><br></br> {root.state.pokemon.atk}</div>
                <div className="def"><strong>DEF:</strong><br></br> {root.state.pokemon.def}</div>
                <div className="sta"><strong>STA:</strong><br></br> {root.state.pokemon.sta}</div>
                <div className="info2"><strong>Evolution Stage:</strong><br></br> {root.state.pokemon.evolutionStage}</div>
                <div className="info3"><strong>Evolved:</strong><br></br> {root.state.pokemon.evolved ? 'Sim' : 'Não'}</div>
                <div className="pokemonName"><strong>Name:</strong><br></br> {root.state.pokemon.name}</div>
                <div className="info4"><strong>FamilyID:</strong><br></br> {root.state.pokemon.FamilyID}</div>
                <div className="info5"><strong>Cross Gen:</strong><br></br> {root.state.pokemon.crossGen ? 'Sim' : 'Não'}</div>
                <div className="info6"><strong>New:</strong><br></br> {root.state.pokemon.pokemonNew ? 'Sim' : 'Não'}</div>
                <div className="img"><img alt={root.state.pokemon.name} src={root.state.pokemon.url}/></div>
                <div className="info7"><strong>Type 1:</strong><br></br> {root.state.pokemon.type1}</div>
                <div className="info21"><strong>Type 2:</strong><br></br> {root.state.pokemon.type2}</div>
                <div className="info9"><strong>Weather 1:</strong><br></br> {root.state.pokemon.weather1}</div>
                <div className="info10"><strong>100% CP @ 39:</strong><br></br> {root.state.pokemon.calculation39}</div>
                <div className="imgNumber"><strong>imgName:</strong><br></br> {root.state.pokemon.imgName}</div>
                <div className="cal40"><strong>100% CP @ 40:</strong><br></br> {root.state.pokemon.calculation40}</div>
                <div className="cal39"><strong>Weather 2:</strong><br></br> {root.state.pokemon.weather2}</div>
                <div className="info11"><strong>StatTotal:</strong><br></br> {root.state.pokemon.statTotal}</div>
                <div className="info12"><strong>Legendary:</strong><br></br> {root.state.pokemon.legendary}</div>
                <div className="pokedexNumber"><strong>PokedexNumber:</strong><br></br> {root.state.pokemon.pokedexNumber}</div>
                <div className="info14"><strong>Aquireable:</strong><br></br> {root.state.pokemon.aquireable}</div>
                <div className="info15"><strong>Spawns:</strong><br></br> {root.state.pokemon.spawns ? 'Sim' : 'Não'}</div>
                <div className="info16"><strong>Regional:</strong><br></br> {root.state.pokemon.regional ? 'Sim' : 'Não'}</div>
                <div className="info17"><strong>Raidable:</strong><br></br> {root.state.pokemon.raidable}</div>
                <div className="info18"><strong>Hatchable:</strong><br></br> {root.state.pokemon.hatchable}</div>
                <div className="info19"><strong>Shiny:</strong><br></br> {root.state.pokemon.shiny ? 'Sim' : 'Não'}</div>
                <div className="info20"><strong>Nest:</strong><br></br> {root.state.pokemon.nest ? 'Sim' : 'Não'}</div>
                <div className="info8"><strong>Future Evolve:</strong><br></br> {root.state.pokemon.futureEvolve ? 'Sim' : 'Não'}</div>
                <div className="info22"><strong>Not-Gettable:</strong><br></br> {root.state.pokemon.notGettable ? 'Sim' : 'Não'}</div>
            </section>
          </Dialog>
        </div>
      )
    }
}