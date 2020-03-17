import React, { useState } from 'react';
import Header from '../PokeHeader';
import api from '../../services/api';

import './style.css';

function PokeAdd() {

    // Declarando States
    const [ row, setRow ] = useState(''); 
    const [ name, setName ] = useState('');   
    const [ pokedexNumber, setPokedexNumber ] = useState('');     
    const [ generation, setGeneration ] = useState(''); 
    const [ evolutionStage, setEvolutionStage ] = useState(''); 
    const [ evolved, setEvolved ] = useState(''); 
    const [ weather1, setWeather1 ] = useState('');
    const [ atk, setAtk ] = useState(''); 
    const [ def, setDef ] = useState(''); 
    const [ sta, setSta ] = useState(''); 
    // const [ imgName, setImgName ] = useState(''); 
    // const [ familyId, setFamilyId ] = useState(''); 
    // const [ crossGen, setCrossGen ] = useState(''); 
    // const [ type1, setType1 ] = useState(''); 
    // const [ type2, setType2 ] = useState('');     
    // const [ weather2, setWeather2 ] = useState(''); 
    // const [ statTotal, setStatTotal ] = useState('');    
    // const [ legendary, setLegendary ] = useState(''); 
    // const [ aquireable, setAquireable ] = useState(''); 
    // const [ spawns, setSpawns ] = useState(''); 
    // const [ regional, setRegional ] = useState(''); 
    // const [ raidable, setRaidable ] = useState(''); 
    // const [ hatchable, setHatchable ] = useState(''); 
    // const [ shiny, setShiny ] = useState(''); 
    // const [ nest, setNest ] = useState(''); 
    // const [ rew, setRew ] = useState(''); 
    // const [ notGettable, setNotGettable ] = useState(''); 
    // const [ futureEvolve, setFutureEvolve ] = useState(''); 
    // const [ CP40, setCP40 ] = useState(''); 
    // const [ CP39, setCP39 ] = useState(''); 


    // Função responsável por persistir os dados no DB
    async function postPokemon(e) {
        e.preventDefault();
        const res = await api.post('/pokemons', {
            row,
            name,
            pokedexNumber: 'pokedex_number',        
            generation,
            evolutionStage: 'evolution_stage',
            weather1,
            atk,
            def,
            sta,
            evolved,
        })   

        console.log(res);

        //  Após completar o submit, deixando os inputs vazios
        setRow(''); 
        setName('');  
        setPokedexNumber('');  
        setGeneration('');  
        setEvolutionStage('');  
        setWeather1('');  
        setAtk('');
        setDef('');
        setSta('');
        setEvolved('');  
    }

    return (
        <>
            <Header title="RedFox Pokemon" />
            <div className="container">
                <form onSubmit={postPokemon}>
                    <div className="form-row">
                        <div className="form-group col-md-3">                            
                            <input type="number" className="form-control" placeholder="Nº" value={row} onChange={event => setRow(event.target.value)}/>                            
                        </div>
                        <div className="form-group col-md-3">                            
                            <input type="text" className="form-control" placeholder="Nome" value={name} onChange={event => setName(event.target.value)}/>                            
                        </div>
                        <div className="form-group col-md-3">                            
                            <input type="number" className="form-control" placeholder="Pokedex Number" value={pokedexNumber} onChange={event => setPokedexNumber(event.target.value)}/>                            
                        </div>                        
                        <div className="form-group col-md-3">                            
                            <input type="number" className="form-control" placeholder="Generation" value={generation} onChange={event => setGeneration(event.target.value)}/>                            
                        </div>                        
                        <div className="form-group col-md-3">                             
                            <input type="number" className="form-control" placeholder="Evolution Stage" value={evolutionStage} onChange={event => setEvolutionStage(event.target.value)}/>                            
                        </div>
                        <div className="form-group col-md-3">                             
                            <input type="text" className="form-control" placeholder="Weather" value={weather1} onChange={event => setWeather1(event.target.value)}/>                            
                        </div>
                        <div className="form-group col-md-3">                            
                            <input type="number" className="form-control" placeholder="Atk" value={atk} onChange={event => setAtk(event.target.value)}/>                            
                        </div>
                        <div className="form-group col-md-3">                            
                            <input type="number" className="form-control" placeholder="Def" value={def} onChange={event => setDef(event.target.value)}/>                            
                        </div>
                        <div className="form-group col-md-3">                            
                            <input type="number" className="form-control" placeholder="Sta" value={sta} onChange={event => setSta(event.target.value)}/>                            
                        </div>                        
                    </div>
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                </form>
            </div>           
        </>
    )
}

export default PokeAdd;