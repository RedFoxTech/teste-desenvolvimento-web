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
            name: 'Name',
            type: 'varchar',
          },
          {
            name: 'PokedexNumber',
            type: 'int',
          },
          {
            name: 'ImgName',
            type: 'int',
          },
          {
            name: 'Generation',
            type: 'int',
          },
          {
            name: 'EvolutionStage',
            type: 'int',
          },
          {
            name: 'Evolved',
            type: 'int',
          },
          {
            name: 'FamilyID',
            type: 'int',
          },
          {
            name: 'CrossGen',
            type: 'int',
          },
          {
            name: 'Type1',
            type: 'varchar',
          },
          {
            name: 'Type2',
            type: 'varchar',
          },
          {
            name: 'Weather1',
            type: 'varchar',
          },
          {
            name: 'Weather2',
            type: 'varchar',
          },
          {
            name: 'STATTOTAL',
            type: 'int',
          },
          {
            name: 'ATK',
            type: 'int',
          },
          {
            name: 'DEF',
            type: 'int',
          },
          {
            name: 'STA',
            type: 'int',
          },
          {
            name: 'Legendary',
            type: 'int',
          },
          {
            name: 'Aquireable',
            type: 'int',
          },
          {
            name: 'Spawns',
            type: 'int',
          },
          {
            name: 'Regional',
            type: 'int',
          },
          {
            name: 'Raidable',
            type: 'int',
          },
          {
            name: 'Hatchable',
            type: 'int',
          },
          {
            name: 'Shiny',
            type: 'int',
          },
          {
            name: 'Nest',
            type: 'int',
          },
          {
            name: 'New',
            type: 'int',
          },
          {
            name: 'NotGettable',
            type: 'int',
          },
          {
            name: 'FutureEvolve',
            type: 'int',
          },
          {
            name: 'CP40',
            type: 'int',
          },
          {
            name: 'CP39',
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
