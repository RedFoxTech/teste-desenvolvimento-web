import { BaseQueryParametersDto } from '../shared/dto/base-query-parameters.dto';

export class FindPokemonsQueryDto extends BaseQueryParametersDto {
  name: string;
  pokedexName: string;
  
}