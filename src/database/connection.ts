import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'postgres',
    database : 'teste_fox'
  },
  useNullAsDefault: true,
});

export default connection;
