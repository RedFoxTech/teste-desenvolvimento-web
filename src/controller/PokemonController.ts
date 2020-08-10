import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonDatabase } from "../data/PokemonDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PokemonController {
    private static PokemonBusiness = new PokemonBusiness(
        new PokemonDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    )

    public async registerPokemon(req: Request, res: Response) {
        const {
            name,
            number,
            generation,
            evolution_stage,
            evolved, familyId,
            cross_gen,
            type1,
            type2,
            weather1,
            weather2,
            stat_total,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            new_New,
            not_gettable,
            future_evolve,
            cp_40,
            cp_39
        } = req.body

        try {
            const result = await PokemonController.PokemonBusiness.registerPokemon(name, number, generation, evolution_stage, evolved, familyId, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, new_New, not_gettable, future_evolve, cp_40, cp_39)
            res.status(200).send({
                result,
                message: "Pokemon adicionado com sucesso!"
            })
        } catch (err) {
            res.status(err.statusCode || 400).send({
                error: err.message
            })
        }
    }
    public async getAllPokemons(req: Request, res: Response) {
        try {
            const result = await PokemonController.PokemonBusiness.getAllPokemons()
            res.status(200).send(
                result
            )
        } catch (err) {
            res.status(err.statusCode || 400).send({
                error: err.message
            })
        }
    }
    public async editPokemon(req: Request, res: Response) {
        const {
            name,
            number,
            generation,
            evolution_stage,
            evolved, familyId,
            cross_gen,
            type1,
            type2,
            weather1,
            weather2,
            stat_total,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            new_New,
            not_gettable,
            future_evolve,
            cp_40,
            cp_39
        } = req.body

        try {
            const result = await PokemonController.PokemonBusiness.editPokemon(name, number, generation, evolution_stage, evolved, familyId, cross_gen, type1, type2, weather1, weather2, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, new_New, not_gettable, future_evolve, cp_40, cp_39)
            res.status(201).send({
                result,
                message: "Pokemon atualizado com sucesso!"
            })
        } catch (err) {
            res.status(err.statusCode || 400).send({
                error: err.message
            })
        }
    }

    public async deletePokemon(req: Request, res: Response) {
        const {
            id
        } = req.body

        try {
            const result = await PokemonController.PokemonBusiness.deletePokemon(id)
            res.status(200).send({
                result,
                message: "Pokemon excluído com sucesso!"
            })
        } catch (err) {
            res.status(err.statusCode || 400).send({
                error: err.message
            })
        }
    }
}