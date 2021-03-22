import { Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PokemonData from "./pages/Search";

function Routes() {
    return (
        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/pokemonData/:id" component={PokemonData}/>
            <Redirect from="*" to="/"/>
        </Switch>
    )
}

export default Routes;