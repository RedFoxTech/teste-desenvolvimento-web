import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Pokemon1631343585529 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.createDatabase('pokemon-go-db');

    await queryRunner.createTable(
      new Table({
        name: 'pokemons_tb',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'pokedexNumber',
            type: 'int',
          },
          {
            name: 'imgName',
            type: 'int',
          },
          {
            name: 'generation',
            type: 'int',
          },
          {
            name: 'evolutionStage',
            type: 'int',
          },
          {
            name: 'evolved',
            type: 'boolean',
          },
          {
            name: 'familyID',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'crossGen',
            type: 'int',
          },
          {
            name: 'type1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'type2',
            type: 'varchar',
          },
          {
            name: 'weather1',
            type: 'varchar',
          },
          {
            name: 'weather2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'statTotal',
            type: 'decimal',
          },
          {
            name: 'atk',
            type: 'int',
          },
          {
            name: 'def',
            type: 'int',
          },
          {
            name: 'sta',
            type: 'int',
          },
          {
            name: 'legendary',
            type: 'boolean',
          },
          {
            name: 'aquireable',
            type: 'int',
          },
          {
            name: 'spawns',
            type: 'boolean',
          },
          {
            name: 'regional',
            type: 'boolean',
          },
          {
            name: 'raidable',
            type: 'int',
          },
          {
            name: 'hatchable',
            type: 'int',
          },
          {
            name: 'shiny',
            type: 'boolean',
          },
          {
            name: 'nest',
            type: 'boolean',
          },
          {
            name: 'new',
            type: 'boolean',
          },
          {
            name: 'notGettable',
            type: 'boolean',
          },
          {
            name: 'futureEvolve',
            type: 'boolean',
          },
          {
            name: 'cp40',
            type: 'int',
          },
          {
            name: 'cp39',
            type: 'int',
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
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons_tb');
  }
}
