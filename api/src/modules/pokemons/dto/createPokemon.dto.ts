import { Expose } from 'class-transformer';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePokemonDTO {
  @ApiProperty({
    required: true,
    description: "Pokemon's name",
    type: 'string',
  })
  @Expose()
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: "Pokemon's pokedex number",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  pokedexNumber: number;

  @ApiProperty({
    required: true,
    description: "Pokemon's generation",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  generation: number;

  @ApiProperty({
    required: true,
    description: "Pokemon's evolution stage",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  evolutionStage: number;

  @ApiProperty({
    required: true,
    description: 'Pokemon is evoled',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  evolved: boolean;

  @ApiProperty({
    required: true,
    description: "Pokemon's gamily ID",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  familyId: number;

  @ApiProperty({
    required: true,
    description: 'Pokemon is cross Gen',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  crossGen: boolean;

  @ApiProperty({
    required: true,
    description: "Pokemon's primary type",
    type: 'string',
  })
  @Expose()
  @IsString()
  type1: string;

  @ApiProperty({
    required: false,
    description: "Pokemon's secondary type",
    type: 'string',
  })
  @Expose()
  @IsString()
  @IsOptional()
  type2: string;

  @ApiProperty({
    required: true,
    description: "Pokemon's primary weather",
    type: 'string',
  })
  @Expose()
  @IsString()
  weather1: string;

  @ApiProperty({
    required: false,
    description: "Pokemon's secondary weather",
    type: 'string',
  })
  @Expose()
  @IsOptional()
  @IsString()
  weather2: string;

  @ApiProperty({
    required: true,
    description: "Pokemon's ATK",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  ATK: number;

  @ApiProperty({
    required: true,
    description: "Pokemon's DEF",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  DEF: number;

  @ApiProperty({
    required: true,
    description: "Pokemon's STA",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  STA: number;

  @ApiProperty({
    required: true,
    description: 'Pokemon is legendary',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  legendary: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon is aquirable',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  aquirable: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon spawns',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  spawns: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon is regional',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  regional: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon is raidable',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  raidable: boolean;

  @ApiProperty({
    required: true,
    description: "Pokemon's hatchable",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  hatchable: number;

  @ApiProperty({
    required: true,
    description: 'Pokemon shiny',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  shiny: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon nest',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  nest: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon new',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  new: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon is not gettable',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  notGettable: boolean;

  @ApiProperty({
    required: true,
    description: 'Pokemon future evolve',
    type: 'boolean',
  })
  @Expose()
  @IsBoolean()
  futureEvolve: boolean;

  @ApiProperty({
    required: true,
    description: "Pokemon's max CP at 39",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  maxCPat39: number;

  @ApiProperty({
    required: true,
    description: "Pokemon's max CP at 40",
    type: 'number',
  })
  @Expose()
  @IsNumber()
  maxCPat40: number;
}
