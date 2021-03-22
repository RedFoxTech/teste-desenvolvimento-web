import { Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function Routes() {
    return (
        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/search" component={Search}/>
        </Switch>
    )
}

export default Routes;