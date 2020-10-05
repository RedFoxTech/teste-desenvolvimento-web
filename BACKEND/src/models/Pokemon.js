const db = require('../database/index')
const aws = require('aws-sdk')
require('dotenv').config()
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const PokemonSchema = new db.Schema({
    name: String,
    pokedexNumber: Number,
    imgName: Number,
    generation: Number,
    evolutionStage: String,
    evolved: Boolean,
    FamilyID: Number,
    crossGen: Boolean,
    type1: String,
    type2: String,
    weather1: String,
    weather2: String,
    statTotal: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    aquireable: Number,
    spawns: Boolean,
    regional: Boolean,
    raidable: Number,
    hatchable: Number,
    shiny: Boolean,
    nest: Boolean,
    pokemonNew: Boolean,
    notGettable: Boolean,
    futureEvolve: Boolean,
    calculation40: Number,
    calculation39: Number,
    url: String,
    key: String
})

PokemonSchema.pre('save', function () {
  if (this.key) {
    if (!this.url) {
      this.url = `${process.env.APP_URL}/files/${this.key}`
    }
  }
})

PokemonSchema.pre('remove', function () {
  return s3.deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: this.key
      }).promise()
      .then(response => {
        console.log(response.status)
      })
      .catch(response => {
        console.log(response.status)
      })
})

const Pokemon = db.model('Pokemon', PokemonSchema)
module.exports = Pokemon
