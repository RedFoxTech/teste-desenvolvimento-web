import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreatePokemons1629251079346 
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pokemons",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'pokedex_number',
                        type: 'int',
                        isNullable: true,
                      },
                      {
                        name: 'type_1',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'type_2',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'weather_1',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'weather_2',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'stat_total',
                        type: 'numeric',
                        isNullable: true,
                      },
                      {
                        name: 'atk',
                        type: 'numeric',
                        isNullable: true,
                      },
                      {
                        name: 'def',
                        type: 'numeric',
                        isNullable: true,
                      },
                      {
                        name: 'sta',
                        type: 'numeric',
                        isNullable: true,
                      },
                      {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                ]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemons");
    }
}
