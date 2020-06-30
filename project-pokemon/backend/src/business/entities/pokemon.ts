export class Pokemon {
    constructor(
        private pokemonId: string,
        private pokemonName: string,
        private pokedexNumber: number,
        private imgName: string,
        private generation: string,
        private evolutionStage: string,
        private envolved: string,
        private familyID: string,
        private type1: string,
        private type2: string,
        private weather1: string,
        private weather2: string,
        private statTotal: number,
        private atk: number,
        private def: number,
        private sta: number,
        private legendary: number,
        private cp40: number,
        private cp39: number  
    ){}

    public getPokemonId():string {
        return this.pokemonId
    }

    public getPokemonName():string {
        return this.pokemonName
    }

    public getPokedexNumber():number {
        return this.pokedexNumber
    }

    public getImgName():string{
        return this.imgName
    }

    public getGeneration():string {
        return this.generation
    }

    public getEvolutionStage():string {
        return this.evolutionStage
    }

    public getEvolved():string {
        return this.envolved
    }

    public getFamilyId():string {
        return this.familyID
    }

    public getType1():string {
        return this.type1
    }

    public getType2():string {
        return this.type2
    }

    public getWeather1():string {
        return this.weather1
    }

    public getWeather2():string {
        return this.weather2
    }

    public getStatTotal():number {
        return this.statTotal
    }

    public getAtk():number {
        return this.atk
    }

    public getDef():number {
        return this.def
    }

    public getSta():number {
        return this.sta
    }

    public getLegendary():number {
        return this.legendary
    }

    public getMaxCombatPowerLVL40():number {
        return this.cp40
    }

    public getMaxCombatPowerLVL39():number {
        return this.cp39
    }  
}