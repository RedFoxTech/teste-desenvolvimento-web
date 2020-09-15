import { ApiProperty } from '@nestjs/swagger';

export class CreatePokemonDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    pokedexName: number;

    @ApiProperty()
    imgName: number;

    @ApiProperty()
    generation: number;

    @ApiProperty()
    evolutionStage: number;

    @ApiProperty()
    evolved: number;

    @ApiProperty()
    familyID: number;

    @ApiProperty()
    crossGen: number;

    @ApiProperty()
    type1: string;

    @ApiProperty()
    type2: string;

    @ApiProperty()
    weather1: string;

    @ApiProperty()
    weather2: string;

    @ApiProperty()
    statTotal: number;

    @ApiProperty()
    atk: number;

    @ApiProperty()
    def: number;

    @ApiProperty()
    sta: number;

    @ApiProperty()
    legendary: number;

    @ApiProperty()
    aquireable: number;

    @ApiProperty()
    spawns: number;

    @ApiProperty()
    regional: number;

    @ApiProperty()
    raidable: number;

    @ApiProperty()
    hatchable: number;

    @ApiProperty()
    shiny: number;

    @ApiProperty()
    nest: number;

    @ApiProperty()
    vnew: number;

    @ApiProperty()
    notGettable: number;

    @ApiProperty()
    futureEvolve: number;

    @ApiProperty()
    hundredPerCpAt40: number;

    @ApiProperty()
    hundredPerCpAt39: number;

}