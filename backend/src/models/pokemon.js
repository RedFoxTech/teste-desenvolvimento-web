const { connect, ObjectId } = require('../database');

async function findAll() {
    const collection = await connect();
    return await collection.find({}).toArray();
}

async function findById(id) {
    const collection = await connect();
    return await collection.findOne({ _id: new ObjectId(id) });
}

async function findByName(name) {
    const collection = await connect();
    const regexp = new RegExp(`^${name}`, 'i');
    const results = await collection.find({ name: regexp }).toArray();
    return results;
}

async function create(pokemon) {
    const collection = await connect();
    const newPokemon = { ...pokemon };
    const result = await collection.insertOne(newPokemon);
    return result;
}

async function update(id, pokemon) {
    const collection = await connect();
    const filter = { _id: new ObjectId(id) };
    const updateDoc = { $set: { ...pokemon, _id: new ObjectId(id) } };
    await collection.updateOne(filter, updateDoc);
    return { _id: id, ...pokemon };
}

async function remove(id) {
    const collection = await connect();
    const filter = { _id: new ObjectId(id) };
    await collection.deleteOne(filter);
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove,
};
