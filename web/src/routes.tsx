import { Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PokemonData from "./pages/PokemonData";
import ListOfPokemons from "./pages/ListOfPokemons";
import AddNewPokemon from "./pages/AddNewPokemon";

function Routes() {
    return (
        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/pokemonData/:id" component={PokemonData}/>
            <Route path="/listOfPokemons" component={ListOfPokemons}/>
            <Route path="/addNewPokemon" component={AddNewPokemon}/>
            <Redirect from="*" to="/"/>
        </Switch>
    )
}

export default Routes;