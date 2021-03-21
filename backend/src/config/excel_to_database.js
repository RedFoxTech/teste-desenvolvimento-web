import excelToJson from 'convert-excel-to-json';
import firebaseDatabase from '../database/connection';


// Transformando conteúdo do excel para json com o nome das propiedades conforme a tabela;
const excelData = excelToJson({
    sourceFile: `${__dirname}/Pokemon_Go.xlsx`,
    columnToKey: {
        '*': "{{columnHeader}}"
    }
})


const { Sheet1 } = excelData;

// Percorrendo array de pokemons e inserindo no banco de dados com o numero da linha como chave 
Sheet1.forEach(pokemonObj => {
    firebaseDatabase.ref(`/Pokemons/${pokemonObj.Row}`).set(pokemonObj);
});