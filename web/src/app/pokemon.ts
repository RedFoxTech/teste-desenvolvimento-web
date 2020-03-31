export interface Pokemon {
    _id: String,
    row: Number,
    name: String,
    pokedex_number: Number,
    img_name: String,
    generation: Number,
    evolution_stage: Number,
    evolved: Number,
    family_id: Number,
    cross_gen: Number,
    type_1: String,
    type_2: String,
    weather_1: String,
    weather_2: String,
    stat_total: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    aquireable: Number,
    spawns: Number,
    regional: Number,
    raidable: Number,
    hatchable: Number,
    shiny: Number,
    nest: Number,
    new: Number,
    not_gettable: Number,
    future_evolve: Number,
    hundred_cp_40: Number,
    hundred_cp_39: Number
}

export interface DefaultResponse {
    next: {
        page: Number,
        limit: Number
    },
    previous: {
        page: Number,
        limit: Number
    },
    count: Number,
    results: Pokemon[]
}