export interface PokemonType {
  id: number;
  name: string;
  weakAgainstList: number[],
  strongAgainstList: number[]
}