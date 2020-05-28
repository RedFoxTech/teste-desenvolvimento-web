import { Router }from 'express';
import Pokemon from './app/models/Pokemon';

const routes = new Router();

routes.get('/', async (req, res) => {
    const pokemon = await Pokemon.create({
        name: "Teste01",
        img_name: "1",
        evolved: true,
        family_id: 2,
        cross_gen: false,
        stat_total: 123,
        generation_id: 123,
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



        raidable_id: 125,
        hatchable_id: 125,
        aquireable_id: 125,
        legendary_id:  125,
        type_id_1: 125,
        type_id_2: 125,
        weather_id_1: 125,
        weather_id_2: 125,
        evolution_stage_id: 125,
    })

    return res.json(pokemon)
})

export default routes;