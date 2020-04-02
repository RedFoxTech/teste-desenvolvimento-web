import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/index"

export const routes = {
    root: "/"
}

function Router(props){
    return(
        <ConnectedRouter history={props.history}>
            <Switch>
            <Route exact path={routes.root} component={HomePage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router
