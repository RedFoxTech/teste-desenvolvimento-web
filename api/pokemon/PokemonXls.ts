import Pokemon from './Pokemon';
import xlsx from 'node-xlsx';
import fs from 'fs';

export default class PokemonXls {
    public mimetypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/octet-stream'];
    public async parse(path: string): Promise<Pokemon[]> {
        return new Promise((resolve, reject) => {
            try {
                const file = xlsx.parse(path);
                console.log(file);
                this.removeFile(path)
                const infos = file[0].data;
                //should be an interface
                const sheetPokemons: {[key: string]: string}[] = []
                for(let line = 1; line < infos.length; line++) {
                    const sheetPokemon = {};
                    for (let column = 1; column < infos[0].length; column++) {
                        sheetPokemon[infos[0][column]] = infos[line][column];
                    }
                    sheetPokemons.push(sheetPokemon);
                }
                resolve(this.normalize(sheetPokemons));
            }
            catch(err) {
                console.log(err);
                reject(err);
            }
        });
    }

    public normalize(data: {[key: string]: string}[]): Pokemon[] {
        return data.map((object: {[key: string]: string}) => <Pokemon>({
            name: object['Name'],
            pokedexNumber: +object['Pokedex Number'],
            imgNumber: +object['Img name'],
            generation: +object['Generation'],
            evolutionStage: +object['Evolution Stage'],
            evolved: +object['Evolved'],
            familyId: +object['FamilyID'],
            type1: object['Type 1'],
            type2: object['Type 2'],
            weather1: object['Weather 1'],
            weather2: object['Weather 2'],
            statTotal: +object['STAT TOTAL'],
            atk: +object ['ATK'],
            def: +object['DEF'],
            sta: +object['STA'],
            legendary: +object['Legendary'],
            crossGen: +object['Cross Gen'],
        }));
    }

    public validate(mimetype: string): boolean {
        return this.mimetypes.includes(mimetype);
    }

    public async removeFile(path: string) {
        fs.unlink(path, (err) => {
            if (err) throw err;
            console.log('removed', path);
        });
    }

}
