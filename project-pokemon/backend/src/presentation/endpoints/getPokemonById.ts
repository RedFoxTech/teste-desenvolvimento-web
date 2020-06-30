import {Request,Response} from 'express'
import { GetPokemonByIdUC } from '../../business/usecase/getPokemonByIdUC'
import { PokemonDB } from '../../data/pokemonsDB'

export const GetPokemonByIdEndPoint = async(req: Request, res: Response) => {
    try{
        const getPokemonByIdUC = new GetPokemonByIdUC(new PokemonDB())
        const response = await getPokemonByIdUC.execute({
            id: req.params.id
        })
        
        res.status(200).send(response)
    }catch(err){
        res.status(err.errorCode || 400).send({
        message: err.message
    })
  }
}