import { Document } from "mongoose";

export class Pokemon extends Document {
    name: string;
    pokedexnumber: number;
    imgName: number;
    generation: number;
    evolutionStage: number;
    evolved: number;
    familyID: number;
    crossGen: number;
    typeOne: string;
    typewo: string;
    weatherOne: string;
    weatherTwo: string;
    statTotal: number;
    atk: number;
    def: number;
    sta: number;
    legendary: number;
    aquireable: number;
    spawns: number;
    regional: number;
    raidable: number;
    hatchable: number;
    shiny: number;
    nest: number;
    new: number;
    notGettable: number;
    futureEvolve: number;
    oneHundredPercentCpForty: number;
    oneHundredPercentCpThirtyNine: number;
}