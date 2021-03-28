import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;