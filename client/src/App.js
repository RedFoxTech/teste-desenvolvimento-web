import React, { Component } from 'react';
import SortHeader from './components/SortHeader/SortHeader'
import { callApi, remove, add, edit } from './API/Api'

import PokemonGridContainer from './components/container/PokemonGrid/PokemonGridContainer'
import HeaderActionContainer from './components/container/HeaderActionButtons/HeaderActionContainer'

import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  state = {
    sortBy: '',
    orderBy: 0,
    page: 1,
    elementsPerPage: 30,
    pokemonsShown: [],
    pokemonBase: [],
    listToRemove: [],
    removeMode: false
  };

  componentDidMount() {
    callApi()
      .then(res => this.setState({ response: res, pokemonBase: res, pokemonsShown: res }))
      .catch(err => console.log(err));
  }

  getNewOrder = () => {
    let { orderBy } = this.state
    let newOrderBy = 0

    if (orderBy < 0)
      newOrderBy = 0
    else if (orderBy < 1)
      newOrderBy = 1
    else
      newOrderBy = -1

    return newOrderBy
  }

  sortPokemonHandler = (sortBy) => {
    let order = this.getNewOrder()
    let sortedList = []
    if (order == 0) {
      sortedList = this.sortListPokemonsBy(this.state.pokemonsShown, "Row", 1)
    } else {
      sortedList = this.sortListPokemonsBy(this.state.pokemonsShown, sortBy, order)
    }

    this.setState({ pokemonsShown: sortedList, sortBy, orderBy: order })
  }

  sortListPokemonsBy = (listToSort, elementToSortBy, order) => {
    return listToSort.sort((a, b) => {
      if (Number.isInteger(a[elementToSortBy]) && Number.isInteger(b[elementToSortBy]))
        if (order == 1) return a[elementToSortBy] - b[elementToSortBy]
        else return b[elementToSortBy] - a[elementToSortBy]
      else {
        var x = a[elementToSortBy].toLowerCase();
        var y = b[elementToSortBy].toLowerCase();
        if (x < y) { return -1 * order; }
        if (x > y) { return 1 * order; }
      }

      return 0;
    })
  }

  setNewValueToField = async (id, field, value) => {
    let newPokemonStats = this.state.pokemonsShown
    newPokemonStats.filter(el => el.Row === id)[0][field] = value
    this.setState({ pokemonsShown: newPokemonStats })

    let res = await edit({ row: id, field: field, value: value })
    this.setState({ response: res, pokemonBase: res, pokemonsShown: res })
  }

  onChangePageHandler = (value) => this.setState({ page: value })
  onChangeElementsPerPageHandler = (value) => this.setState({ elementsPerPage: value })

  addToRemoveList = (pokemonToRemove) => {
    if (!this.state.removeMode) return
    let removeList = this.state.listToRemove
    let exists = false
    removeList.forEach(element => {
      if (element === pokemonToRemove) {
        removeList.pop(element)
        exists = true
      }
    })

    if (!exists) removeList.push(pokemonToRemove)
    this.setState({ listToRemove: removeList })
  }

  callRemove = async (list) => {
    let res = await remove(list)
    this.setState({ response: res, pokemonBase: res, pokemonsShown: res })
  }

  callAdd = async () => {
    let res = await add()
    this.setState({ response: res, pokemonBase: res, pokemonsShown: res })
  }

  onRemoveEvent = () => {
    let isRemoving = this.state.removeMode
    if (isRemoving) {
      this.callRemove(this.state.listToRemove)
      this.setState({ removeMode: false, listToRemove: [] })
    } else {
      this.setState({ removeMode: true, listToRemove: [] })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>My PokeDex!</p>
          <HeaderActionContainer
            elementsPerPage={this.state.elementsPerPage}
            onChangePage={this.onChangePageHandler}
            currentPage={this.state.page}
            onChangeElementsPerPage={this.onChangeElementsPerPageHandler}
            onRemoveEvent={this.onRemoveEvent}
            onAddEvent={this.callAdd}
          />
        </div>
        < SortHeader
          onClickHandler={this.sortPokemonHandler}
        />
        < PokemonGridContainer
          onClick={this.addToRemoveList}
          page={this.state.page}
          elementsPerPage={this.state.elementsPerPage}
          listToRemove={this.state.listToRemove}
          pokeList={this.state.pokemonsShown}
          changePokemonStateHandler={this.setNewValueToField}
          isEditable={!this.state.removeMode}
        />
      </div>
    );
  }
}

export default App;