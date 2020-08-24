import { Pokemon } from '../pokemon.entity';

export class ReturnPokemonDto {
  pokemon: Pokemon;
  message: string;
}