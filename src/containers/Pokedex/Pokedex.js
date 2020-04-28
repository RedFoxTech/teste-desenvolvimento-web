import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';


import './Pokedex.css';
import pokedex from '../../assets/pokedex_full.png';

import Search from '../Search/Search';
import PokeInfo from '../../components/pokeInfo/pokeInfo';
import HomeButton from '../../components/Home/Home';

const Pokedex = (props) => {

    const [isResult, setResult] = useState();

    useEffect( () => {
        setResult(props.searchResults)
    }, [props.searchResults])

    return (
        <>
            <HomeButton />
            <div className="container mx-auto row tela mt-4 justify-content-between">
                <div className={"m-auto col col-12 order-md-1 order-12 col-md-5 pokedex my-2"}>
                    <div className="d-flex justify-content-center">
                        <img className="w-75" src={pokedex} alt="Pokedex" />
                    </div>
                    <div className="search">
                        <Search placeholder="Qual Pokémon você está procurando?"/>
                    </div>
                </div>
                {isResult ? 
                    <div className="col col-12 order-md-12 order-1 col-md-6 my-auto text-center">
                        {props.searchResults ? <PokeInfo searchResults={props.searchResults}/> : null}
                    </div>
                    : null
                }
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    }
}

export default connect(mapStateToProps)(Pokedex);