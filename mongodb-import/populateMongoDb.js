const mongoose = require('mongoose');
const fs = require('fs').promises;

const dotenv = require('dotenv');
dotenv.config();

const TRANSACTIONS_COLLECTION = 'pokemons';

/**
 * Crie um arquivo .env na raiz da pasta 'utils' e
 * preencha os valores conforme o arquivo de
 * exemplo "".env.example"
 *
 * DB_CONNECTION
 */
const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
  {
    if (err)
    {
      console.error(`Erro na conexão ao MongoDB - ${err}`);
      process.exit(1);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () =>
{
  console.log('Conectado ao MongoDB');
  recreateCollections();
});

async function recreateCollections()
{
  console.log('Eliminando as collections...');
  await dropCollections();

  console.log('Recriando as collections...');
  await createCollections();

  console.log('Preenchendo os documentos das collections...');
  await populateCollections();

  connection.close();
  console.log('Processamento finalizado!');
}

async function dropCollections()
{
  const promiseTransactions = new Promise((resolve, reject) =>
  {
    connection.db
      .dropCollection(TRANSACTIONS_COLLECTION)
      .then(() =>
      {
        resolve();
      })
      .catch((err) =>
      {
        if (err.code === 26)
        {
          resolve();
          return;
        }

        reject(err);
      });
  });

  await Promise.all([promiseTransactions]);
}

async function createCollections()
{
  const promiseTransactions = new Promise((resolve, reject) =>
  {
    connection.db
      .createCollection(TRANSACTIONS_COLLECTION)
      .then(() =>
      {
        resolve();
      })
      .catch((err) =>
      {
        reject(err);
      });
  });

  await Promise.all([promiseTransactions]);
}

async function populateCollections()
{
  const promiseTransactions = new Promise(async (resolve, reject) =>
  {
    const csvFile = await fs.readFile(
      './db/PokemonGo.csv',
      'utf-8'
    );

    const json = csvJSON(csvFile)

    connection.db
      .collection(TRANSACTIONS_COLLECTION)
      .insertMany(json)
      .then(() =>
      {
        resolve();
      })
      .catch((err) =>
      {
        reject(err);
      });
  });

  await Promise.all([promiseTransactions]);

}

function csvJSON(csv)
{
  let lines = csv.split("\n");
  let result = [];
  let headers = lines[0].split(",");
  for (let i = 1; i < lines.length; i++)
  {
    let obj = {};
    let currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++)
    {
      if ((j === 0) || (j === 2) || (j === 8) || (j === 9) || (j === 10) || (j === 11)) 
      {// Name || ImgName || Type1 || Type2 || Weather1 || Wheater2 
        obj[headers[j].toLowerCase()] = currentline[j];
      }
      else if (j === 24)
      {// new is a reserved word
        obj["newp"] = parseInt(currentline[j]);
      }
      else if (j === 27)
      {
        obj["hundredcp40"] = parseInt(currentline[j]);
      }
      else if (j === 28)
      {
        obj["hundredcp39"] = parseInt(currentline[j]);
      }
      else if (getNumber(currentline[j]) >= 0)
      {
        obj[headers[j].toLowerCase()] = parseInt(currentline[j]);
      }

    }
    if (currentline[1] != undefined)
    {
      result.push(obj);
    }
  }
  return result; //JSON
}

const getNumber = (string) =>
{
  if (string != undefined)
  {
    let regex = string.match(/\d+/)
    let number = parseInt(regex ? regex[0] : null)
    return number
  }
  return null
}