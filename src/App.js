import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, HashRouter  } from "react-router-dom";
import { filterPokesByTypeOne, getAllPokes } from './components/API';
import PokeBar from './components/PokeBar';
import PokeList from './components/PokeList';
import PokeListWeather from './components/PokeListWeather';
import PokedexHeader from './components/PokedexHeader'
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [category, setCategory] = useState([]);
  let all = [];

  // function getAll() {
  //   console.log("foi");
  //   getAllPokes().then(pokes => {
  //     all = [pokes]
  //     setPokemons(all)
  //   }).catch(e => alert(e))
  // }

  // Filtrar as categorias Tipo Um dos pokemons
  function getAllByCatOne() {
    let category = new Set();
    getAllPokes().then(pokes => pokes.map((v) => {
      return category.add(v.typeOne)
    })).then(() => {
      setCategory([...category])
    })
  }

  function filterTypes(type) {
    let array = []
    filterPokesByTypeOne(type)
      .then(res => res.map((v) => {
        return array.push(v)
      })).then(() => {
        setPokemons(array)
      })
  }

  return (
    // o basaname considera a subpasta do servidor e deve mudar dependendo da configuração
    <HashRouter>
      <PokeBar
        getByTypeCat={<Link className="btn btn-primary" to="/categorias">Categoria</Link>}
        home={<Link className="btn btn-primary" to="/">Home</Link>}
        getByWeatherCat={<Link to="/weather">Tempo</Link>} />

      <Switch>
        <Route exact path="/">
          <PokedexHeader />
        </Route>
        <Route path="/categorias">
          <PokeList filterTypes={filterTypes} functionFilter={getAllByCatOne} data={category} pokemons={pokemons} />
        </Route>
        <Route exact path="/pokemon/:id" component={ PokeListWeather } />
      </Switch>
    </HashRouter>
  );
}

export default App;