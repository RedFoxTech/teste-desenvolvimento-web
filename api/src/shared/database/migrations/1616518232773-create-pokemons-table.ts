import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createPokemonsTable1616518232773 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'pokemons',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'pokedexNumber',
            type: 'int',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'imgName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'generation',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'evolutionStage',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'evolved',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'familyId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'crossGen',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'type1',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'type2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'weather1',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'weather2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ATK',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'DEF',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'STA',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'legendary',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'aquirable',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'spawns',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'regional',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'raidable',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'hatchable',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'shiny',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'nest',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'new',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'notGettable',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'futureEvolve',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'maxCPat39',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'maxCPat40',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('pokemons');
  }
}
