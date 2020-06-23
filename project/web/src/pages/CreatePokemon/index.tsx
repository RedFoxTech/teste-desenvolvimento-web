import React, { ChangeEvent, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css';

import logo from '../../assets/logo.svg';



const CreatePokemon = () => {

    const [formData, setFormData] = useState({
        name: '',
        pokedexNumber: '',
        imgName: '',
        generation: '',
        evolutionStage: '',
        evolved: '',
        familyId: '',
        type1: '',
        type2: '',
        weather1: '',
        weather2: '',

    });

    const history = useHistory();

    function handleInputChange( event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setFormData({...formData, [name]: value});
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const { name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyId, type1, type2,
             weather1, weather2,} = formData;
        
        const data = {
            name, 
            pokedexNumber, 
            imgName, 
            generation, 
            evolutionStage, 
            evolved, 
            familyId, 
            type1, 
            type2,
            weather1, 
            weather2
        };

        await api.post('create', data);

        alert('Pokémon adicionado com sucesso!');
        
        history.push('/');
        
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Pokemon"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro do Pokémon</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome do Pokémon</label>
                        <input type="text" name="name" id="name" onChange={handleInputChange}/>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="pokedexNumber">Pokedex Number</label>
                            <input type="number" name="pokedexNumber" id="pokedexNumber" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="imgName">Imagem do Pokémon</label>
                            <input type="text" name="imgName" id="imgName" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="generation">Geração</label>
                            <input type="number" name="generation" id="generation" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="familyId">Id Familiar</label>
                            <input type="text" name="familyId" id="familyId" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="evolutionStage">Estágio de Evolução</label>
                            <input type="number" name="evolutionStage" id="evolutionStage" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="evolved">Evoluído Completamente</label>
                            <input type="number" name="familyId" id="familyId" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="type1">Tipo 1</label>
                            <input type="text" name="type1" id="type1" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="type2">Tipo 2</label>
                            <input type="text" name="type2" id="type2" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="weather1">Clima 1</label>
                            <input type="text" name="weather1" id="weather1" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="weather2">Clima 2</label>
                            <input type="text" name="weather2" id="weather2" onChange={handleInputChange}/>
                        </div>
                    </div>
                </fieldset>

                <button type="submit">
                    Cadastrar Pokémon
                </button>
            </form>
        </div>
    )
};

export default CreatePokemon;