import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';
import './Lista.css';

import Search from '../Search';
import Paginas from '../../components/pagination/pagination';
import TableHead from '../../components/tableHead/tableHead';
import TableRow from '../../components/tableRow/tableRow';
import pokeball from '../../assets/pokeball.gif';
import pokeFriends from '../../assets/pokeFriends.jpg';

const Lista = (props) => {

    const [updatedList, setUpdate] = useState();
    const [headers, setHeaders] = useState();
    const [paginaAtual, setPagina] = useState(1);

    let pace = 30;
    let primeiroItem = ((pace*paginaAtual) - pace);
    let ultimoItem = (primeiroItem + pace);

    useEffect( () => {
        setUpdate(props.pokemonList);

        if(props.params){
            let headers = Object.keys(props.params).filter( param => {
                return (param !== "Row" && param !== "img_url")
            });
            setHeaders(headers)
        };
    }, [props.pokemonList]);

    useEffect( () => {
        if(props.searchResults) {
            setUpdate(props.searchResults);
        }
    }, [props.searchResults])

    const onChangeHandler = (evt, index) => {
        const pokeValue = evt.target.value;
        const newState = [...updatedList];
        newState[index][evt.target.name] = pokeValue;
        setUpdate(newState);
    }

    const onFlipPages = (number) => {
        setPagina(number);
    }

    const sortList = (parametro, sentido) => {
        let toSortList = [...updatedList];
        if(sentido==="down"){
            toSortList.sort( (a,b) => {
                return (a[parametro] < b[parametro] ? 1 : ((b[parametro] < a[parametro]) ? -1 : 0));
            })
        } else {
            toSortList.sort( (a,b) => {
                return (a[parametro] > b[parametro] ? 1 : ((b[parametro] > a[parametro]) ? -1 : 0));
            })
        }
        setUpdate(toSortList);
    }

    let tableHeaders = <img src={pokeball} />;
    let pokemonsTable = null;
    if(updatedList && headers) {

        tableHeaders = 
            headers.map( header => {
                if(header !== "Img name"){ 
                    return (<th key={header}><TableHead id={header} sortList={sortList}/></th>)
                }
            });

        pokemonsTable = 
            updatedList.map( (pokemon, index) => {
                if(index >= primeiroItem && index <= ultimoItem ){
                    let indice = index;
                    let singleRow = 
                        headers.map( (header) => {
                            if(header !== "Img name"){
                                return (
                                    <td key={pokemon.Name + header + pokemon[header]}>
                                        <TableRow
                                            value={updatedList[indice][header]} 
                                            name={header} 
                                            onChangeHandler={onChangeHandler} 
                                            index={index} 
                                            src={header === "Name" ? ("https://pokeres.bastionbot.org/images/pokemon/"+ updatedList[indice]["#"] + ".png") : null}
                                        />
                                    </td>
                                )
                            } else {
                                return null;
                            }
                        });
                    return (<tr key={pokemon.Name}>{singleRow}</tr>);
                } else {
                    return null;
                }
            })
    };

    return (
        <>  
            <div className="container m-auto">
                <img src={pokeFriends} alt="Pikachu e seus amigos"/>
            </div>
            <div className="container m-auto justify-content-between align-items-center row">
                <Search className="col my-2"/>
                <Paginas className="col mb-2 col-12 col-md-5" totalPaginas={Math.ceil((props.pokemonList.length)/pace)} paginaAtual={paginaAtual} mudarPagina={onFlipPages} />
            </div>
            <div className="container-fluid">
                <Table bordered hover responsive size="sm" className="pokeList">
                    <thead>
                        <tr>
                            {tableHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {pokemonsTable}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        pokemonList: state.pokemonsData,
        searchResults: state.searchResults,
        params: state.pokemonsData[0]
    }
}

export default connect(mapStateToProps)(Lista);