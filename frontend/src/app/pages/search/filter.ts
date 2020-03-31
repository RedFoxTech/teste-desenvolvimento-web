export interface FilterOption {
  selected?: boolean;
  type: "string" | "number" | "boolean";
  label: string;
  name: string;
  example: string;
  option?: any[];
  value?: any;
}

export const FILTER_OPTIONS: FilterOption[] = [
  {
    type: "string",
    label: "Name",
    name: "name",
    example: "Ex: Charizard"
  },
  {
    type: "number",
    label: "Pokedex No.",
    name: "pokedexNumber",
    example: "Ex: 6"
  },
  {
    type: "string",
    label: "Image name",
    name: "imageName",
    example: "Ex: charizard"
  },
  {
    type: "number",
    label: "Generation",
    name: "generation",
    example: "Ex: 1"
  },
  {
    type: "number",
    label: "Evolution stage",
    name: "evolutionStage",
    example: "Ex: 1"
  },
  {
    type: "boolean",
    label: "Evolved",
    name: "evolved",
    example: "Ex: Yes"
  },
  {
    type: "number",
    label: "Family ID",
    name: "familyId",
    example: "Ex: 1"
  },
  {
    type: "boolean",
    label: "Cross Gen",
    name: "crossGen",
    example: "Ex: No"
  },
  {
    type: "number",
    label: "First type",
    name: "typeOne",
    example: "Ex: Fire"
  },
  {
    type: "number",
    label: "Second type",
    name: "typeTwo",
    example: "Ex: Flying"
  },
  {
    type: "number",
    label: "First weather",
    name: "weatherOne",
    example: "Ex: Cloudy"
  },
  {
    type: "number",
    label: "Second weather",
    name: "weatherTwo",
    example: "Ex: Windy"
  },
  {
    type: "number",
    label: "Total Stats",
    name: "totalStats",
    example: "Ex: 500"
  },
  {
    type: "number",
    label: "ATK",
    name: "statAtk",
    example: "Ex: 300"
  },
  {
    type: "number",
    label: "DEF",
    name: "statDef",
    example: "Ex: 100"
  },
  {
    type: "number",
    label: "STA",
    name: "statSta",
    example: "Ex: 100"
  },
  {
    type: "boolean",
    label: "Legendary",
    name: "legendary",
    example: "Ex: No"
  },
  {
    type: "boolean",
    label: "Acquirable",
    name: "aquireable",
    example: "Ex: Yes"
  },
  {
    type: "boolean",
    label: "Spawns",
    name: "spawns",
    example: "Ex: Yes"
  },
  {
    type: "boolean",
    label: "Regional",
    name: "regional",
    example: "Ex: No"
  },
  {
    type: "boolean",
    label: "Raidable",
    name: "raidable",
    example: "Ex: No"
  },
  {
    type: "boolean",
    label: "Hatchable",
    name: "hatchable",
    example: "Ex: Yes"
  },
  {
    type: "boolean",
    label: "Shiny",
    name: "shiny",
    example: "Ex: Yes"
  },
  {
    type: "boolean",
    label: "Nest",
    name: "nest",
    example: "Ex: No"
  },
  {
    type: "boolean",
    label: "New",
    name: "new",
    example: "Ex: No"
  },
  {
    type: "boolean",
    label: "Not gettable",
    name: "notGettable",
    example: "Ex: No"
  },
  {
    type: "boolean",
    label: "Future evolve",
    name: "futureEvolve",
    example: "Ex: No"
  }
]