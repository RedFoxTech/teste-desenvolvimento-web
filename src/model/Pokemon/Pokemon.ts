export class Pokemon {
    constructor(
        private id: string, 
        private name: string, 
        private number: number, 
        private generation: number, 
        private evolution_stage: number, 
        private evolved: number, 
        private familyId: number, 
        private cross_gen: number, 
        private type1: string, 
        private type2: string, 
        private weather1: string, 
        private weather2: string, 
        private stat_total: number, 
        private atk: number, 
        private def: number, 
        private sta: number, 
        private legendary: number, 
        private aquireable: number, 
        private spawns: number, 
        private regional: number, 
        private raidable: number, 
        private hatchable: number, 
        private shiny: number, 
        private nest: number, 
        private new_New: number, 
        private not_gettable: number, 
        private future_evolve: number, 
        private cp_40: number, 
        private cp_39: number
    ){}

    public getId(): string{
        return this.id
    }
    public getName(): string{
        return this.name
    }
    public getNumber(): number{
        return this.number
    }
    public getGeneration(): number{
        return this.generation
    }
    public getEvolutionStage(): number{
        return this.evolution_stage
    }
    public getEvolved(): number{
        return this.evolved
    }
    public getFamilyId(): number{
        return this.familyId
    }
    public getCrossGen(): number{
        return this.cross_gen
    }
    public getType1(): string{
        return this.type1
    }
    public getType2(): string{
        return this.type2
    }
    public getWeather1(): string{
        return this.weather1
    }
    public getWeather2(): string{
        return this.weather2
    }
    public getStatTotal(): number{
        return this.stat_total
    }
    public getAtk(): number{
        return this.atk
    }
    public getDef(): number{
        return this.def
    }
    public getSta(): number{
        return this.sta
    }
    public getLegendary(): number{
        return this.legendary
    }
    public getAquireable(): number{
        return this.aquireable
    }
    public getSpawns(): number{
        return this.spawns
    }
    public getRegional(): number{
        return this.regional
    }
    public getRaidable(): number{
        return this.raidable
    }
    public getHatchable(): number{
        return this.hatchable
    }
    public getShiny(): number{
        return this.shiny
    }
    public getNest(): number{
        return this.nest
    }
    public getNew(): number{
        return this.new_New
    }
    public getNotGettable(): number{
        return this.not_gettable
    }
    public getFutureEvolve(): number{
        return this.future_evolve
    }
    public getCp40(): number{
        return this.cp_40
    }
    public getCp39(): number{
        return this.cp_39
    }
}