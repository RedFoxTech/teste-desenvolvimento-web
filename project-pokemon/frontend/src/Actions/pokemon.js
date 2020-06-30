import axios from 'axios'

const baseURL = "https://mdmplds27b.execute-api.us-east-1.amazonaws.com/V1"

export const setPokemons = (allPokemons) => ({
    type: "SET_POKEMONS",
    payload:{
        allPokemons
    }
})


export const getPokemons = (numbersPage) => async(dispatch) =>{

    const informationPage = {
        numbersPage
    }

    try{
        const response = await axios.post(`${baseURL}/pokemons`, informationPage)
        dispatch(setPokemons(response.data.pokemons))
        
    }catch(error) {
        console.log(error)
        window.alert("pokemons não encontrado")        
    }
}

export const setQuantityPages = (quantityOfPages) => ({
    type:"SET_QUANTITY_PAGES",
    payload:{
        quantityOfPages
    }

})

export const getQuantityPages = () => async(dispatch) => {
    try{
        const response = await axios.get(`${baseURL}/pages`)
        dispatch(setQuantityPages(response.data.quantityOfPages))
        
    }catch(error) {
        console.log(error)
        window.alert("Paginas não econtradas")       
    }
}


export const getPokemonByName = (pokemonName) => async(dispatch) => {
    try{
        const response = await axios.get(`${baseURL}/pokemons/${pokemonName}`)
        const quantityPages = 0
        
        dispatch(setQuantityPages(quantityPages))
        dispatch(setPokemons(response.data.pokemons))
        console.log("testando: ", response.data.pokemons)
    }catch(error) {
        console.log(error)
        window.alert("Erro ao pesquisar pokemon")    
    }
}