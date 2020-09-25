import { Request, Response } from 'express';
import knex from '../database/connection';

export default class InfosController{
  types = async (req: Request, res: Response) => {
    const types = await knex('tbType').select('*');

    return res.json(types.splice(1));
  };
  
  weathers = async (req: Request, res: Response) => {
    const weathers = await knex('tbWeather').select('*');

    return res.json(weathers.splice(1));
  };
}