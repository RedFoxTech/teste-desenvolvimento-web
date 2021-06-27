import {GetAllPokemons} from '../services/PokemonService'
import {Response, Request} from 'express'

export async function PokemonsGet(request: Request, response:Response){
    try {
        const responseGetAllPokemons = await GetAllPokemons()
        return response.status(200).json(responseGetAllPokemons)
    } catch(e){
        return response.status(500).json({message: e.message, status: e.status})
    }
}