import React, { useEffect, useState } from 'react';
import Item from './Item';
import Axios from 'axios';
import Filter from '../Filter/Filter';
import DetailModal from './DetailModal';

export default function List() {

    const [ pokemons, setPokemons ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ showButton, setShowButton ] = useState(true);
    const [ filter, setFilter ] = useState({ name: '', type: '', number: ''});
    const [ total, setTotal ] = useState(0);
    const [ show, setShow ] = useState(false);
    const [ pokemonSelected, setPokemonSelected ] = useState({});

    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        if(page !== 1) {
            fetchPokemon('add');
        }
    }, [page]);

    useEffect(() => {
        if(pokemons.length < total && pokemons.length !== 0) {
            setShowButton(true);  
        } else {
            setShowButton(false);  
        }
    }, [pokemons, total])

    async function fetchPokemon(type) {
        let res = await Axios.post(`http://localhost:3333/pokedex?page=${type === 'new' ? 1 : page}`, filter);
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
        setPage(page + 1);
    }

    function onChange(name, value) {
        let obj = filter;
        obj[name] = value;
        setFilter(obj);
    }

    function onSearch() {
        setPage(1);
        fetchPokemon('new');
    }

    function onSelect(data) {
        setPokemonSelected(data);
        setShow(true);
    }

    return (
        <div className="container mb-4">
            <Filter onChange={ onChange } onSearch={ onSearch } />
            {
                pokemons.map((item, index) => <Item onSelect={ onSelect } key={ index } data={ item } />)
            }

            <div className={`mt-3 mb-4 text-center ${ !showButton && 'd-none' }`}>
                <button className="btn btn-success" onClick={ loadMore } >Load more...</button>
            </div>
            <DetailModal show={ show } data={ pokemonSelected } onClose={ () => setShow(false) } />
        </div>
    )
}