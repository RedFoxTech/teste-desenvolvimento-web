import knex from 'knex'
import Knex from 'knex'


export abstract class BaseDatabase {
    private static CONNECTION_KNEX: Knex | null = null;

    protected convertTinyintToBoolean(value: number): boolean {
        return value === 1
    }

    protected convertBooleanToTinyint(value: boolean): number {
        return value ? 1 : 0
    }

    protected connection(): Knex {
        if (BaseDatabase.CONNECTION_KNEX === null) {
            BaseDatabase.CONNECTION_KNEX = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            }
            );
        }
        return BaseDatabase.CONNECTION_KNEX;
    }

    public static async destroyConnection(): Promise<void> {
        if (BaseDatabase.CONNECTION_KNEX) {
            await BaseDatabase.CONNECTION_KNEX.destroy();
            BaseDatabase.CONNECTION_KNEX = null;
        }
    }
}