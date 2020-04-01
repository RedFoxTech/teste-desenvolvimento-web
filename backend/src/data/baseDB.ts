import knex from "knex"

export abstract class BaseDB {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: process.env.HOST_DB,
            port: 3306,
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASE
        }
    })
}