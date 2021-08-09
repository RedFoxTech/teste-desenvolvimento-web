import React from "react";
import { Switch, Route } from "react-router";
import PokePage from '../pages/PokePage/PokePage'
import PokeDetalistPage from '../pages/PokeDetalistPage/PokeDetalistPage'
import ErroPage from '../pages/ErroPage/ErroPage'
import { BrowserRouter } from 'react-router-dom'
import { goToPokeDetalisPage } from "./Coordinator";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <PokePage/>
                </Route>
                <Route exact path='/detalhe/:number' component={goToPokeDetalisPage}> 
                    <PokeDetalistPage/>
                </Route>
                <Route>
                    <ErroPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;