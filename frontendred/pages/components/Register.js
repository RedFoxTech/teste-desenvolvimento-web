
import React from 'react';
import axios from 'axios';
import Header from './Header';
import next from 'next';

export default class Register extends React.Component {
//estado do pokemon array vazio
    state = {
        pokemons: [],
    }
    //invocado quando um componente e inserido na arvore de renderização dom
    componentDidMount() {
        /*axios fazendo requisições é tipo um ajax, axios.all para fazer diversas
        requisicoes apesar de ter feito apenas uma :V */

        axios.all([
            axios.get(`http://localhost:4000/api/users/`),
        ]).then(axios.spread((res,res2) => {
            const pokemons = res.data
            console.log(pokemons)
           /*seta o estado,dispara uma renderização
            extra pegando os dados que foram retornados da requisiçao*/
            this.setState({
                 pokemons
            })
        }))
    }

    render() {
      /*mapeia os dados para pegar conjunto chave e valor do json */
        const fat = this.state.pokemons.map(value => (<><li key={value._id}>{value.name}</li>
            </>))
        var reduce = fat
    
        console.log(reduce)
        //condição térnaria 
        const show = this.state.pokemons.length === 0 ? <h1>carregando...</h1>
            : <h1>{this.state.pokemons.map(value => {value.name})}</h1>
            
        return (
            <>
                {/* component header passando props */}
              <Header url="http://aa-pokedex.herokuapp.com/assets/pokeball-524ffe045cb9159cbb7250f6deb4e31e04d6a1a6dbc6d181f71ae4fa2a899fba.svg"/>
                <button style={{
                    marginLeft: 122,
                }} onClick={excludePokemon}>ExcluirPokemonBulbasaur</button>
                    <h2>{show}</h2>
                <div id="showallresults" className="pokedex" >
                    <p id='pokemonid' idpokemon='5fd5505fc86c350d1e70022f' onLoad={Trait()} onClick={showPokemon}>{reduce[28]}</p>    
                    <p id='pokemonid' onLoad={Trait()} onClick={showPokemon}>{reduce}</p>    
     </div>
     
            <div className="pokemon-detail" >
            <img id='image-dissapear' src="http://aa-pokedex.herokuapp.com/assets/pokemon-logo-e4fa62f7f4eb6a0d788d7cd65908c6be97f3066f8bb97a17e4707dd29f14445f.svg"></img>

            <form id="pokemon-form" className= "pokemon-form">

     <input placeholder="Name" className="form-input" id="name" type="text" name="name" />
                    
     <input placeholder="Password" className="form-input" id="password" type="text" name="password" />
                    
     <input placeholder="Password2" className="form-input" id="password2" type="text" name="password2" />
                   
     <input placeholder="PokedexNumber" className="form-input" id="pokedexnumber" type="text" name="pokedexnumber" />

     <input placeholder="ImgName" className="form-input" id="imgname" type="text" name="imgname" />
    
     <input placeholder="Generation" className="form-input" id="generation" type="text" name="generation" />
                   
     <input placeholder="EvolutionStage" className="form-input" id="evolutionstage" type="text" name="evolutionstage" />

     <input placeholder="Evolved" className="form-input" id="evolved" type="text" name="evolved" />

     <input placeholder="FamilyId" className="form-input" id="familyid" type="text" name="familyid" />

     <input placeholder="CrossGen" className="form-input" id="crossgen" type="text" name="crossgen" />
                           
     <input placeholder="Type1" className="form-input" id="type1" type="text" name="type1" />

    <input placeholder="Type2" className="form-input" id="type2" type="text" name="type2" />

    <input placeholder="Weather1" className="form-input" id="weather1" type="text" name="weather1" />

    <input placeholder="Weather2" className="form-input" id="weather2" type="text" name="weather2" />

    <input placeholder="StatTotal" className="form-input" id="stattotal" type="text" name="stattotal" />
     
    <input placeholder="Atk" className="form-input" id="atk" type="text" name="atk" />

    <input placeholder="Def" className="form-input" id="def" type="text" name="def" />

    <input placeholder="Sta" className="form-input" id="sta" type="text" name="sta" />   
   
    <input placeholder="Legendary" className="form-input" id="legendary" type="text" name="legendary" />  

    <input placeholder="Aquireable" className="form-input" id="aquireable" type="text" name="aquireable" />   

    <input placeholder="Spawns" className="form-input" id="spawns" type="text" name="spawns" /> 

    <input placeholder="Regional" className="form-input" id="regional" type="text" name="regional" />  

    <input placeholder="Raidable" className="form-input" id="raidable" type="text" name="raidable" /> 

    <input placeholder="Hatchable" className="form-input" id="hatchable" type="text" name="hatchable" />

    <input placeholder="Shiny" className="form-input" id="shiny" type="text" name="shiny" />

    <input placeholder="Nest" className="form-input" id="nest" type="text" name="nest" />

    <input placeholder="New" className="form-input" id="new" type="text" name="new" />

    <input placeholder="NotGetTable" className="form-input" id="notgettable" type="text" name="notgettable" />

    <input placeholder="FutureEvolve" className="form-input" id="futureevolve" type="text" name="futureevolve" />

    <input placeholder="CemCp40" className="form-input" id="cemcp40" type="text" name="cemcp40" />

    <input placeholder="CemCp39" className="form-input" id="cemcp39" type="text" name="cemcp39" />
    
   <input id="pokemonsubmit" className="pokemon-form-button" onClick={values} type="submit"
                 value="Criar Pokemon" />
                </form>
            </div>
                
            </>
        );
    }
}

function values(event) {
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    const password2 = document.getElementById('password2').value
    const pokedexNumber = document.getElementById('pokedexnumber').value
    const imgName = document.getElementById('imgname').value
    const generation = document.getElementById('generation').value
    const evolutionStage = document.getElementById('evolutionstage').value
    const evolved = document.getElementById('evolved').value
    const familyId = document.getElementById('familyid').value
    const crossgen = document.getElementById('crossgen').value
    const type1 = document.getElementById('type1').value
    const type2 = document.getElementById('type2').value
    const weather1 = document.getElementById('weather1').value
    const weather2 = document.getElementById('weather2').value
    const statTotal = document.getElementById('stattotal').value
    const atk = document.getElementById('atk').value
    const def= document.getElementById('def').value
    const sta = document.getElementById('sta').value
    const legendary = document.getElementById('legendary').value
    const aquireable = document.getElementById('aquireable').value
    const spawns = document.getElementById('spawns').value
    const regional = document.getElementById('regional').value
    const raidable = document.getElementById('raidable').value
    const hatchable = document.getElementById('hatchable').value
    const shiny = document.getElementById('shiny').value
    const nest = document.getElementById('nest').value
    const New = document.getElementById('new').value
    const notGetTable = document.getElementById('notgettable').value
    const futureEvolve = document.getElementById('futureevolve').value
    const cemCP1 = document.getElementById('cemcp40').value
    const cemCP2 = document.getElementById('cemcp39').value
    axios.post('http://localhost:4000/api/users/register', {
        name: name,
        password: password,
        password2: password2,
        imgname: imgName,
        pokedexnumber: pokedexNumber,
        generation: generation,
        evolutionstage: evolutionStage,
        evolved: evolved,
        familyid: familyId,
        crossgen: crossgen,
        type1: type1,
        type2: type2,
        weather1: weather1,
        weather2: weather2,
        stattotal: statTotal,
        atk: atk,
        def: def,
        sta: sta,
        legendary: legendary,
        aquireable: aquireable,
        spawns: spawns,
        regional: regional,
        raidable: raidable,
        hatchable: hatchable,
        shiny: shiny,
        nest: nest,
        new: New,
        notgettable: notGetTable,
        futureevolve: futureEvolve,
        cemcp40: cemCP1,
        cemcp39: cemCP2
    })
        .then(function (response) {
            console.log(response)    
        })
        .catch(function (error) {
            console.log(error);
        });
}


function excludePokemon(){
    const id = '5fd54f76c86c350d1e70022e'
    axios.delete(`http://localhost:4000/api/users/${id}`)
        .then(res => {

            const pokemon = res.data;

            console.log(pokemon)
        })
}
const Trait = () => {

    axios.get(`http://localhost:4000/api/users/`)
        .then(res => {

            const pokemon = res.data;

            console.log(pokemon)

            if (pokemon === null || pokemon === ' ') {
                next();
            }else{
                next();
            }
            })
}
const showPokemon = (event) => {
    
    const exclude = excludePokemon
    const li = document.getElementById('pokemonid');
    const id = li.getAttribute('idpokemon');
    axios.all([
        axios.get(`http://localhost:4000/api/users/${id}`),
    ]).then(axios.spread((res, ) => {
        const pokemon = res.data
        console.log(pokemon)

        if (pokemon === null || pokemon === '' ) {
        const imageDissapear = document.getElementById('image-dissapear').style.width = '0px'
         const dissapearBackground = document.getElementById('pokemon-form').style.background = 'none'
         const dissapearScroll = document.getElementById('pokemon-form').style.overflow = 'visible'

        const change = document.getElementById('pokemon-form').innerHTML = `<div id="results">
     <figure class="figure">
      <img width="100%" style="
        max-height: 380;"
        src="http://aa-pokedex.herokuapp.com/assets/pokemon_snaps/1-746592ddbf88f824b4897ee29c2e9018b6a88098e45136531eb45f46bb6f2e4e.svg"></img>
     </figure>
   
    
    <p style="text-align:center">Nome: nada</p>
    <p style="text-align:center">PokedexNumber: nada</p>
   
    </ul>
     </div>`
            }else {
    const imageDissapear = document.getElementById('image-dissapear').style.width = '0px'
    const dissapearBackground = document.getElementById('pokemon-form').style.background = 'none'
    const dissapearScroll = document.getElementById('pokemon-form').style.overflow = 'visible'

    const change = document.getElementById('pokemon-form').innerHTML = `<div id="results">
     <figure class="figure">
      <img width="100%" style="
        max-height: 380;"
        src="http://aa-pokedex.herokuapp.com/assets/pokemon_snaps/1-746592ddbf88f824b4897ee29c2e9018b6a88098e45136531eb45f46bb6f2e4e.svg"></img>
     </figure>
   
    
    <p style="text-align:center">Nome: ${pokemon.name}</p>
    <p style="text-align:center">PokedexNumber: ${pokemon.pokedexnumber}</p>
   
    </ul>
     </div>`}
    }))
}

/*

*/