import {IsString, IsNumber, IsBoolean, IsOptional} from 'class-validator';
import PokemonType from '../declarations/enums/PokemonType';
import PokemonWeather from '../declarations/enums/Weather';
import Pokemon from '../declarations/interfaces/Pokemon';

/* eslint-disable-next */
/**
 * @description Implementa a DTO para representar um pokemon e utiliza
 * o decorator do pacote class-validator para validar os tipos.
 * Isso mitiga o problema de confusão de tipos/ injeção de NoSQL.
 * @see {@link https://www.linkedin.com/pulse/injeção-de-sql-onde-não-tem-antônio-martos-harres/}
 * @since 30/07/2021
 * @version 0.0.2
 */

class PokemonDTO implements Pokemon {
    @IsOptional()
    @IsString()
    _id?: string;

    @IsNumber()
    row!: number;

    @IsString()
    name!: string;

    @IsNumber()
    pokedexId!: number;

    @IsString()
    imageName!: string;

    @IsString()
    generation!: string;

    @IsString()
    evolutionState!: string;
    evolved!: boolean;

    @IsOptional()
    @IsNumber()
    familyId!: number;
    crossGeneration!: boolean;

    @IsString()
    type1!: PokemonType;

    @IsOptional()
    @IsString()
    type2!: PokemonType;

    @IsString()
    weather1!: PokemonWeather;

    @IsOptional()
    @IsString()
    weather2!: PokemonWeather;

    @IsNumber()
    statsSum!: number;

    @IsNumber()
    attack!: number;

    @IsNumber()
    defense!: number;

    @IsNumber()
    staminaHP!: number;

    @IsBoolean()
    legendary!: boolean;

    @IsBoolean()
    acquirable!: boolean;

    @IsBoolean()
    spawns!: boolean;

    @IsBoolean()
    regional!: boolean;

    @IsNumber()
    raidable!: number;

    @IsNumber()
    hatchable!: number;

    @IsBoolean()
    shiny!: boolean;

    @IsBoolean()
    nest!: boolean;

    @IsBoolean()
    isNewPokemon!: boolean;

    @IsBoolean()
    notGettable!: boolean;

    @IsBoolean()
    futureEvolve!: boolean;

    @IsNumber()
    fullCPLevel40!: number;

    @IsNumber()
    fullCPLevel39!: number;
}

export default PokemonDTO;
