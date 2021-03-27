class Pokemon {
  constructor({
    userId, name, typeOne, typeTwo, imageName,
    weatherOne, weatherTwo, generation,
    evolutionStage, familyId, atk, 
    def, stat, raidable, hatchable,
    evolved, crossGender, lengendary,
    acquirable, spawns, regional, shiny,
    nest, newField, notGettable, futureEvolve
  }) {
    this.userId = userId;
    this.name = name;
    this.imageName = imageName;
    this.typeOne = typeOne;
    this.typeTwo = typeTwo;
    this.weatherOne = weatherOne;
    this.weatherTwo = weatherTwo;
    this.generation = generation;
    this.evolutionStage = evolutionStage;
    this.familyId = familyId;
    this.atk = atk;
    this.def = def;
    this.stat = stat;
    this.raidable = raidable;
    this.hatchable = hatchable;
    this.evolved = evolved;
    this.crossGender = crossGender;
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
      userId: this.userId,
      name: this.name,
      imageName: this.imageName,
      typeOne: this.typeOne,
      typeTwo: this.typeTwo,
      weatherOne: this.weatherOne,
      weatherTwo: this.weatherTwo,
      generation: this.generation,
      evolutionStage: this.evolutionStage,
      familyId: this.familyId,
      atk: this.atk,
      def: this.def,
      stat: this.stat,
      raidable: this.raidable,
      hatchable: this.hatchable,
      evolved: this.evolved,
      crossGender: this.crossGender,
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