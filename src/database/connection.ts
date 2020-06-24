import Knex from 'knex';
import knexConfig from '../knexfile';

// Set environment from `.env`
const knex = Knex(knexConfig);

export default knex;
