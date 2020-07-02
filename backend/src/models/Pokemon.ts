import { DATE, STRING, INTEGER, BOOLEAN, Model } from 'sequelize'
import database from '../database'

export default class Pokemons extends Model {
  public id?: number
  public name!: string
  public pokedexNumber!:number
  public imgName!: string
  public imgUrl!: string
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
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  pokedexNumber: {
    type: INTEGER,
    allowNull: false,
    unique: true
  },
  imgName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  generation: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  evolutionStage: {
    type: STRING
  },
  evolved: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  familyId: {
    type: INTEGER
  },
  crossGen: {
    type: BOOLEAN
  },
  type1: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  type2: {
    type: STRING
  },
  weather1: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  weather2: {
    type: STRING
  },
  statTotal: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  atk: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  def: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  sta: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  legendary: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  aquireable: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  spawns: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  regional: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  raidable: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  hatchable: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  shiny: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  nest: {
    type: BOOLEAN,
    allowNull: false
  },
  new: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  notGettable: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  futureEvolve: {
    type: BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cp_100_lvl40: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cp_100_lvl39: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
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
  freezeTableName: true,
  tableName: 'pokemons'
})
