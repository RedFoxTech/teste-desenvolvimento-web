export class Pokemon {
    name: string;
    atk: number;
    def: number;
    sta: number;
    constructor(
        name: string,
        atk: number,
        def: number,
        sta: number
    ) {
        this.name = name.toLowerCase();
        this.atk = atk;
        this.def = def;
        this.sta = sta;
    }
    // Methods
    static fromJson(jsonData) {
        const pokemon = new Pokemon(
            jsonData.name,
            jsonData.atk,
            jsonData.def,
            jsonData.sta
        );

        return pokemon
    }
}