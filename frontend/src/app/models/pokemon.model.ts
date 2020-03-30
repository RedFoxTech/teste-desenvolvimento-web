export interface Pokemon {
  id?: number;
  name: string;
  pokedexNumber: number;
  imageName?: string;
  generation?: number;
  evolutionStage?: number;
  evolved?: boolean;
  familyId?: number;
  crossGen?: boolean;
  typeOne?: number | string;
  typeTwo?: number | string;
  weatherOne?: number | string;
  weatherTwo?: number | string;
  totalStats?: number;
  statAtk?: number;
  statDef?: number;
  statSta?: number;
  legendary?: boolean;
  aquireable?: boolean;
  spawns?: boolean;
  regional?: boolean;
  raidable?: boolean;
  hatchable?: boolean;
  shiny?: boolean;
  nest?: boolean;
  new?: boolean;
  notGettable?: boolean;
  futureEvolve?: boolean;
  totalCombatPowerAtFour?: number;
  totalCombatPowerAtThree?: number;
}