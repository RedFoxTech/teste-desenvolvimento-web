export class Pokemon {
    constructor(
        private pokemonId: string,
        private pokemonName: string,
        private pokedexNumber: number,
        private sprite: string,
        private generation: string,
        private evolutionStage: string,
        private evolved: number,
        private familyId: string,
        private typeOne: string,
        private typeTwo: string,
        private weatherOne: string,
        private weatherTwo: string,
        private attack: number,
        private defense: number,
        private stamina: number,
        private maxCombatPowerLVL39: number,
        private maxCombatPowerLVL40: number 
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

    public getSprite():string {
        return this.sprite
    }

    public getGeneration():string {
        return this.generation
    }

    public getEvolutionStage():string {
        return this.evolutionStage
    }

    public getEvolved():number {
        return this.evolved
    }

    public getFamilyId():string {
        return this.familyId
    }

    public getTypeOne():string {
        return this.typeOne
    }

    public getTypeTwo():string {
        return this.typeTwo
    }

    public getWeatherOne():string {
        return this.weatherOne
    }

    public getWeatherTwo():string {
        return this.weatherTwo
    }

    public getAttack():number {
        return this.attack
    }

    public getDefense():number {
        return this.defense
    }

    public getStamina():number {
        return this.stamina
    }

    public getMaxCombatPowerLVL39():number {
        return this.maxCombatPowerLVL39
    }

    public getMaxCombatPowerLVL40():number {
        return this.maxCombatPowerLVL40
    }
}