import { DATE, STRING, INTEGER, BOOLEAN, Model } from 'sequelize'
import database from '../database'

export default class Pokemons extends Model {
  public id!: number
  public name!: string
  public pokedexNumber!:string
  public imgName!: string
  public generation!: string
  public evolutionStage?: string
  public evolved!: boolean
  public familyId?: number
  public crossGen?: boolean
  public type1!: string
  public type2?: string
  public weather1!: string
  public weather2?: string
  public statTotal!: number
  public atk!: number
  public def!: number
  public sta!: number
  public legendary!: boolean
  public aquireable!: number
  public spawns!: boolean
  public regional!: boolean
  public raidable!: number
  public hatchable!: number
  public shiny!: boolean
  public nest!: boolean
  public new!: boolean
  public notGettable!: boolean
  public futureEvolve!: boolean
  // eslint-disable-next-line camelcase
  public cp_100_lvl40!: number
  // eslint-disable-next-line camelcase
  public cp_100_lvl39!: number
  public createdAt!:Date
  public updatedAt!:Date
}

Pokemons.init({
  id: {
    type: INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  pokedexNumber: {
    type: STRING,
    allowNull: false
  },
  imgName: {
    type: STRING,
    allowNull: false
  },
  generation: {
    type: STRING,
    allowNull: false
  },
  evolutionStage: {
    type: STRING
  },
  evolved: {
    type: BOOLEAN,
    allowNull: false
  },
  familyId: {
    type: INTEGER
  },
  crossGen: {
    type: BOOLEAN
  },
  type1: {
    type: STRING,
    allowNull: false
  },
  type2: {
    type: STRING
  },
  weather1: {
    type: STRING,
    allowNull: false
  },
  weather2: {
    type: STRING
  },
  statTotal: {
    type: INTEGER,
    allowNull: false
  },
  atk: {
    type: INTEGER,
    allowNull: false
  },
  def: {
    type: INTEGER,
    allowNull: false
  },
  sta: {
    type: INTEGER,
    allowNull: false
  },
  legendary: {
    type: BOOLEAN,
    allowNull: false
  },
  aquireable: {
    type: INTEGER,
    allowNull: false
  },
  spawns: {
    type: BOOLEAN,
    allowNull: false
  },
  regional: {
    type: BOOLEAN,
    allowNull: false
  },
  raidable: {
    type: INTEGER,
    allowNull: false
  },
  hatchable: {
    type: INTEGER,
    allowNull: false
  },
  shiny: {
    type: BOOLEAN,
    allowNull: false
  },
  nest: {
    type: BOOLEAN,
    allowNull: false
  },
  new: {
    type: BOOLEAN,
    allowNull: false
  },
  notGettable: {
    type: BOOLEAN,
    allowNull: false
  },
  futureEvolve: {
    type: BOOLEAN,
    allowNull: false
  },
  cp_100_lvl40: {
    type: INTEGER,
    allowNull: false
  },
  cp_100_lvl39: {
    type: INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DATE,
    allowNull: false
  },
  updatedAt: {
    type: DATE,
    allowNull: false
  }
},
{
  sequelize: database.connection,
  freezeTableName: true
})
