import { Router }from 'express';
import Pokemon from './app/models/Pokemon';

const routes = new Router();

routes.get('/', async (req, res) => {
    const pokemon = await Pokemon.create({
        name: "Teste04",
        img_name: "1",
        evolved: true,
        cross_gen: false,
        stat_total: 123,
       
        atk: 123,
        def: 123,
        sta: 123,
        spawns: true,
        regional: true,
        shiny: true,
        nest: true,
        new: true,
        not_gettable: true,
        future_evolve: true,
        hundred_percent_cp_40: 123,
        hundred_percent_cp_39: 123,

        evolution_stage_id: 5,
        family_id: 23,
        raidable_id: 2,
        hatchable_id: 3,
        aquireable_id: 3,
        legendary_id:  2,
        generation_id: 1,
        type_id_1: 1,
        type_id_2: 5,
        weather_id_1: 1,
        weather_id_2: 3,
       
    })

    return res.json(pokemon)
})

export default routes;