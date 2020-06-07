import {Request, Response} from 'express';
import knex from '../database/connection';

class WeatherController{
    async index(request: Request, response: Response){
        const types = await knex('weather').select('*');

        const serializedTypes = types.map(type =>{
            return {
                id: type.id,
                name: type.name,
                image: `http://localhost:3333/uploads/${type.image}`
            };
        });
        return response.json(serializedTypes);
    }
}

export default WeatherController;