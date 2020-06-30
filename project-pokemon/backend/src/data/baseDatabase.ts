import knex from "knex";

export abstract class BaseDatabase {
  protected connection = knex({
    client: process.env.CLIENT,
    connection: {
      host: process.env.HOST,
      port: 3306,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD
    
    }
  });
}
