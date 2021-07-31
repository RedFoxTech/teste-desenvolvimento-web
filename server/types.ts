export interface Pokemon {
    Row: number,
    Name: string,
    PokedexNumber: number,
    ImgName: number,
    Generation	: number,
    EvolutionStage: number,
    Evolved: number,
    FamilyID: number,
    CrossGen: number,
    Type1: string,
    Type2: string,
    Weather1: string,
    Weather2: string,
    StatTotal: number,
    ATK: number,
    DEF: number,
    STA: number,
    Legendary: number,
    Aquireable: number,
    Spawns: number,
    Regional: number,
    Raidable: number,
    Hatchable: number,
    Shiny: number,
    Nest: number,
    New	: number,
    NotGettable: number,
    FutureEvolve: number,
    CP40: number,
    CP39: number,
}

export interface PokemonAbility {
    Name: string;
    Effect: string;
}