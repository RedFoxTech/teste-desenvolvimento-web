import React from 'react';
import Header from './components/header/index.js'
import PokemonCard from './components/cards/index.js'
import styled from 'styled-components'
import {pokemons} from './Mock';
import Data from './Pokemon-data.json';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PokeDetails from './container/PokeDetails/index'


const MainContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`




function App() {

  console.log(pokemons[0]["Type 1"]);


  return (

    <Router>

      <MainContainer>

      <Header/>

        {/* {
          Data.PokeData.map(function(item){

          return (
                  <>
                    <PokemonCard 
                      Pokename={item.Name} 
                      PokeType={item["Type 1"]}
                      PokeType2={item["Type 2"]}
                      PokeImg={item.Row} />

                    
                  </>
                )
          })
        } */}

      <PokeDetails/>

      </MainContainer>

     </Router>

  );
}

export default App;
