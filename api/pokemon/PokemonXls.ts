import Pokemon from './Pokemon';
import xlsx from 'node-xlsx';
import fs from 'fs';

export default class PokemonXls {
    public mimetypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/octet-stream'];
    public async parse(path: string): Promise<Pokemon[]> {
        console.log('trying to parse');
        const file = xlsx.parse(path);
        console.log(file);
        this.removeFile(path)
        const infos = file[0].data;
        console.log(infos);
        return new Promise((resolve, reject) => {
            resolve([]);
        });
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
