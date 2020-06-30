import {Request,Response} from 'express'
import { GetPokemonUC } from '../../business/usecase/getPokemonsUC'
import { PokemonDB } from '../../data/pokemonsDB'

export const GetPokemonsEndPoint = async(req: Request, res: Response) => {
    try{
        const getPokemonUC = new GetPokemonUC(new PokemonDB())
        const result = await getPokemonUC.execute({
            numbersPage: req.body.numbersPage
        })
        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}