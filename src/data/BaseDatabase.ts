import dotenv from "dotenv";
import knex from "knex";
import Knex from "knex";

dotenv.config();

export abstract class BaseDataBase {
  protected abstract tableName: string;

  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (BaseDataBase.connection === null) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME,
        },
      });
    }
    return BaseDataBase.connection;
  }

  public async distroyConnection(): Promise<void> {
    if (BaseDataBase.connection) {
      await BaseDataBase.connection.destroy();
    }
  }
}
