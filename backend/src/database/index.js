const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(uri);

const databaseName = 'pokedex';
const collectionName = 'pokemons';

async function connect() {
    await client.connect();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    return collection;
}

module.exports = {
    ObjectId, connect
}