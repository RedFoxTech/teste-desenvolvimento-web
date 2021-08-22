import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemons1629469320348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pokemons',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'url_img_pokemon',
                        type: 'varchar'
                    },
                    {
                        name: 'pokedex_number',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'img_name',
                        type: 'varchar'
                    },
                    {
                        name: 'generation',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'evolution_stage',
                        type: 'varchar'
                    },
                    {
                        name: 'evolved',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'family_id',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'cross_gen',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'type_one',
                        type: 'varchar',
                    },
                    {
                        name: 'type_two',
                        type: 'varchar',
                    },
                    {
                        name: 'weather_one',
                        type: 'varchar',
                    },
                    {
                        name: 'weather_two',
                        type: 'varchar',
                    },
                    {
                        name: 'stat_total',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'atk',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'def',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'sta',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'legendary',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'aquireable',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'spawns',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'regional',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'raidable',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'hatchable',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'shiny',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'nest',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'is_new',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'not_gettable',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'future_evolve',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'cp_100_40',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'cp_100_39',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'created_at',
                        type: 'timestamptz',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamptz',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pokemons')
    }

}
