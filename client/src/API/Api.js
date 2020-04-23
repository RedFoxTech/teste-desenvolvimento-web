export const callApi = async () => {
    const response = await fetch('/api/pokemons');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const edit = async reqBody => {
    const response = await fetch('/api/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify({ post: reqBody }),
    });
    const body = await response.json();
    return body
};

export const add = async () => {
    const response = await fetch('/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify({ post: pokemonModelObj }),
    });
    const body = await response.json();
    return body
};

export const remove = async reqBody => {
    const response = await fetch('/api/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify({ post: reqBody }),
    });
    const body = await response.json();
    return body
};

const pokemonModelObj = {
    "Row": 1,
    "Name": "",
    "Pokedex Number": 0,
    "Img name": "",
    "Generation": 0,
    "Evolution Stage": "0",
    "Evolved": 0,
    "FamilyID": 0,
    "Cross Gen": 0,
    "Type 1": "",
    "Type 2": "",
    "Weather 1": "",
    "Weather 2": "",
    "STAT TOTAL": 0,
    "ATK": 0,
    "DEF": 0,
    "STA": 0,
    "Legendary": 0,
    "Aquireable": 0,
    "Spawns": 0,
    "Regional": 0,
    "Raidable": 0,
    "Hatchable": 5,
    "Shiny": 0,
    "Nest": 0,
    "New": 0,
    "Not-Gettable": 0,
    "Future Evolve": 0,
    "100% CP @ 40": 0,
    "100% CP @ 39": 0
}