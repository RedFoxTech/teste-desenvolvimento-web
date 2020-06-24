export class Pokemon {
    constructor(
        private id: string,
        private pokedexID: number,
        private name: string,
        private img: string,
        private generation: number,
        private envolved: number,
        private familyID: number,
        private cross_gen: number,
        private type1: string,
        private type2: string,
        private weather1: string,
        private weather2: string,
        private stat_total: number,
        private atk: number,
        private def: number,
        private sta: number,
        private shiny: number
    ) { }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
        this.id = id
    }

    public getPokedexID(): number {
        return this.pokedexID
    }

    public setPokedexID(pokedexID: number): void {
        this.pokedexID = pokedexID
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getImg(): string {
        return this.img
    }

    public setImg(img: string): void {
        this.img = img
    }

    public getGeneration(): number {
        return this.generation
    }

    public setGeneration(generation: number): void {
        this.generation = generation
    }

    public getEnvolved(): number {
        return this.envolved
    }

    public setEnvolved(envolved: number): void {
        this.envolved = envolved
    }

    public getFamilyID(): number {
        return this.familyID
    }

    public setFamilyID(familyID: number): void {
        this.familyID = familyID
    }

    public getCross_gen(): number {
        return this.cross_gen
    }

    public setCross_gen(cross_gen: number): void {
        this.cross_gen = cross_gen
    }

    public getType1(): string {
        return this.type1
    }

    public setType1(type1: string): void {
        this.type1 = type1
    }

    public getType2(): string {
        return this.type2
    }

    public setType2(type2: string): void {
        this.type2 = type2
    }

    public getWeather1(): string {
        return this.weather1
    }

    public setWeather1(weather1: string): void {
        this.weather1 = weather1
    }

    public getWeather2(): string {
        return this.weather2
    }

    public setWeather2(weather2: string): void {
        this.weather2 = weather2
    }

    public getStat_total(): number {
        return this.stat_total
    }

    public setStat_total(stat_total: number): void {
        this.stat_total = stat_total
    }

    public getAtk(): number {
        return this.atk
    }

    public setAtk(atk: number): void {
        this.atk = atk
    }

    public getDef(): number {
        return this.def
    }

    public setDef(def: number): void {
        this.def = def
    }

    public getSta(): number {
        return this.sta
    }

    public setSta(sta: number): void {
        this.sta = sta
    }

    public getShiny(): number {
        return this.shiny
    }

    public setShiny(shiny: number): void {
        this.shiny = shiny
    }

}