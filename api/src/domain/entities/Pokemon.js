class Pokemon {
  constructor(
    name, typeOne, typeTwo, imageName,
    weatherOne, weatherTwo, generation,
    evolutionStage, familyId, statTotal,
    atk, def, stat, raidable, hatchable,
    evolved, cross_gender, lengendary,
    acquirable, spawns, regional, shiny,
    nest, newField, notGettable, futureEvolve
  ) {
    this.name = name;
    this.imageName = imageName;
    this.typeOne = typeOne;
    this.typeTwo = typeTwo;
    this.weatherOne = weatherOne;
    this.weatherTwo = weatherTwo;
    this.generation = generation;
    this.evolutionStage = evolutionStage;
    this.familyId = familyId;
    this.statTotal = statTotal;
    this.atk = atk;
    this.def = def;
    this.stat = stat;
    this.raidable = raidable;
    this.hatchable = hatchable;
    this.evolved = evolved;
    this.cross_gender = cross_gender;
    this.lengendary = lengendary;
    this.acquirable = acquirable;
    this.spawns = spawns;
    this.regional = regional;
    this.shiny = shiny;
    this.nest = nest;
    this.newField = newField;
    this.notGettable = notGettable;
    this.futureEvolve = futureEvolve;
  }

  getValues() {
    return {
      name: this.name,
      imageName: this.imageName,
      typeOne: this.typeOne,
      typeTwo: this.typeTwo,
      weatherOne: this.weatherOne,
      weatherTwo: this.weatherTwo,
      generation: this.generation,
      evolutionStage: this.evolutionStage,
      familyId: this.familyId,
      statTotal: this.statTotal,
      atk: this.atk,
      def: this.def,
      stat: this.stat,
      raidable: this.raidable,
      hatchable: this.hatchable,
      evolved: this.evolved,
      cross_gender: this.cross_gender,
      lengendary: this.lengendary,
      acquirable: this.acquirable,
      spawns: this.spawns,
      regional: this.regional,
      shiny: this.shiny,
      nest: this.nest,
      newField: this.newField,
      notGettable: this.notGettable,
      futureEvolve: this.futureEvolve,
    }
  }
}

module.exports = Pokemon;