import React, { useEffect, useState } from 'react';
import Item from './Item';
import Axios from 'axios';
import Filter from '../Filter/Filter';

export default function List() {

    const [ pokemons, setPokemons ] = useState([]);
    let page = 1;
    const [ showButton, setShowButton ] = useState(true);
    const [ filter, setFilter ] = useState({ name: '', type: '', number: ''});
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        console.log('total', total);
        console.log('pokemons.length', pokemons.length);
        if(pokemons.length < total && pokemons.length !== 0) {
            setShowButton(true);  
        } else {
            setShowButton(false);  
        }
    }, [pokemons, total])

    async function fetchPokemon(type) {
        let res = await Axios.post(`http://localhost:3333/pokedex?page=${page}`, filter);
        let { data, total } = res.data;
        if(type === 'add') {
            let list = pokemons.concat(data);
            setPokemons(list);

        } else {
            let list = data;
            setPokemons(list);
        }
        setTotal(total);
    };

    function loadMore() {
        page += page;
        fetchPokemon('add');
    }

    function onChange(name, value) {
        let obj = filter;
        obj[name] = value;
        setFilter(obj);
    }

    function onSearch() {
        page = 1;
        fetchPokemon('new');
    }

    return (
        <div className="container mb-4">
            <Filter onChange={ onChange } onSearch={ onSearch } />
            {
                pokemons.map((item, index) => <Item key={ index } data={ item } />)
            }

            <div className={`mt-3 mb-4 text-center ${ !showButton && 'd-none' }`}>
                <button className="btn btn-success" onClick={ loadMore } >Load more...</button>
            </div>
        </div>
    )
}