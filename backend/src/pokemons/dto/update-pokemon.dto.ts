import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto {

  @ApiProperty()
  @IsOptional()
  @IsString({
    message: 'Informe um nome',
  })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString({
    message: 'Informe pokedex',
  })
  pokedexName: number;
  
}