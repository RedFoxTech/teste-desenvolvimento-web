const xlsx = require('xlsx');
const { connect } = require('../database')

function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}
async function readXLSX(path) {
    const collection = await connect();
    const workbook = xlsx.readFile(path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    const pokemonData = data.map(item => ({
        name: item['Name'],
        pokedexNumber: item['Pokedex Number'],
        imgName: item['ImgName'],
        generation: item['Generation'],
        evolutionStage: item['Evolution Stage'],
        evolved: item['Evolved'],
        familyID: item['FamilyID'],
        crossGen: item['Cross Gen'],
        type1: item['Type 1'],
        type2: item['Type 2'],
        weather1: item['Weather 1'],
        weather2: item['Weather 2'],
        statTotal: item['Stat Total'],
        atk: item['ATK'],
        def: item['DEF'],
        sta: item['STA'],
        legendary: item['Legendary'],
        acquireable: item['Acquireable'],
        spawns: item['Spawns'],
        regional: item['Regional'],
        raidable: item['Raidable'],
        hatchable: item['Hatchable'],
        shiny: item['Shiny'],
        nest: item['Nest'],
        isnewPokemon: item['Is New Pokemon'],
        notGettable: item['Not Gettable'],
        futureEvolve: item['Future Evolve'],
        maxCP40: item['Max CP @ 40'],
        maxCP39: item['Max CP @ 39'],
    }));
    collection.insertMany(pokemonData);
}
module.exports = {
    getPostData,
    readXLSX
}