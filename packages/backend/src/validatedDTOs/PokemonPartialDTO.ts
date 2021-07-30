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
 * @version 0.0.1
 * @module packages/backend/validatedDTOs/PokemonPartialDTO
 */

class PokemonDTO implements Pokemon {

    @IsOptional()
    @IsString()
    _id: string;
    
    @IsOptional()
    @IsNumber()
    row!: number;
    
    @IsOptional()
    @IsString()
    name!: string;
    
    @IsOptional()
    @IsNumber()
    pokedexId!: number;
    
    @IsOptional()
    @IsString()
    imageName!: string;
    
    @IsOptional()
    @IsString()
    generation!: string;
    
    @IsOptional()
    @IsString()
    evolutionState!: string;
    evolved!: boolean;
    
    @IsOptional()
    @IsNumber()
    familyId!: number;
    crossGeneration!: boolean;
    
    @IsOptional()
    @IsString()
    type1!: PokemonType;
    
    @IsOptional()
    @IsString()
    type2!: PokemonType;
    
    @IsOptional()
    @IsString()
    weather1!: PokemonWeather;
    
    @IsOptional()
    @IsString()
    weather2!: PokemonWeather;
    
    @IsOptional()
    @IsNumber()
    statsSum!: number;
    
    @IsOptional()
    @IsNumber()
    attack!: number;
    
    @IsOptional()
    @IsNumber()
    defense!: number;
    
    @IsOptional()
    @IsNumber()
    staminaHP!: number;
    
    @IsOptional()
    @IsBoolean()
    legendary!: boolean;
    
    @IsOptional()
    @IsBoolean()
    acquirable!: boolean;
    
    @IsOptional()
    @IsBoolean()
    spawns!: boolean;
    
    @IsOptional()
    @IsBoolean()
    regional!: boolean;
    
    @IsOptional()
    @IsNumber()
    raidable!: number;
    
    @IsOptional()
    @IsBoolean()
    shiny!: boolean;
    
    @IsOptional()
    @IsBoolean()
    nest!: boolean;
    
    @IsOptional()
    @IsBoolean()
    isNew!: boolean;
    
    @IsOptional()
    @IsBoolean()
    notGettable!: boolean;
    
    @IsOptional()
    @IsBoolean()
    futureEvolve!: boolean;
    
    @IsOptional()
    @IsNumber()
    fullCPLevel40!: number;
    
    @IsOptional()
    @IsNumber()
    fullCPLevel39!: number;
}

export default PokemonDTO;
