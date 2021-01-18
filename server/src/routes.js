//Adicionando roteador
const { Router } = require('express');

//Importando modelo de pokemón
const Pokemon = require('./models/Pokemon');
const routes = Router();

//Importando dados da planilha para transformação e importação direta no MongoDB Compass.
const Pokemones = require('./controllers/pokemons');
const fs = require('fs');
const poskemanolos = [];

routes.get('/list', async (req, res) => {

    const pokemons = await Pokemon.find();
    return res.json(pokemons);
})

routes.post('/filter', async (req, res) => {
    const { filter } = req.body;
    const pokemons = await Pokemon.find(filter);
    return res.json(pokemons);
});

routes.post('/add', async (req, res) => {

    console.log(req.body);
    let {
        name,
        pokedexNumber,
        imgName,
        generation,
        evolutionState,
        evolved,
        familyId,
        crossGen,
        type1,
        type2,
        weather1,
        weather2,
        atk,
        def,
        sta,
        legendary,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        isNoveau,
        notGettable,
        futureEvolve,
        IV40,
        IV39
    } = req.body;

    if ((pokedexNumber || generation || familyId || atk || def || sta || IV40 || IV39) !== Number) {
        if (pokedexNumber !== Number) {
            let pokedexNumber = Number(this.pokedexNumber)
        }
        else if (generation !== Number) {
            let generation = Number(this.generation)
        }
        else if (familyId  !== Number) {
            let familyId = Number(this.familyId)
        }
        else if (atk  !== Number) {
            let atk = Number(this.atk)
        }
        else if (def  !== Number) {
            let def = Number(this.def)
        }
        else if (sta  !== Number) {
            let sta = Number(this.sta)
        }
        else if (IV39  !== Number) {
            let IV39 = Number(this.IV39)
        }
        else if (IV40  !== Number) {
            let IV40 = Number(this.IV40)
        }
    }
    const pokemon = await Pokemon.create({
        name,
        pokedexNumber,
        imgName,
        generation,
        evolutionState,
        evolved,
        familyId,
        crossGen,
        type1,
        type2,
        weather1,
        weather2,
        atk,
        def,
        sta,
        legendary,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        isNoveau,
        notGettable,
        futureEvolve,
        IV40,
        IV39
    }).catch(function(e) {
        console.log(e._message)
    });
    return res.json(pokemon);
})

routes.delete('/delete', async (req, res) => {
    console.log(req.headers.id);
    let id = req.headers.id;
    const pokemon = await Pokemon.findByIdAndDelete(id, (err) => {
        if(err) {
            res.status(400).send({error: "Houve um erro em deletar este pokemón."})
        } else {
            res.status(200).send({error: "Pokemón deletado com sucesso."})
        }
    })
})

routes.get('/edit', async (req, res) => {

    const { id, update } = req.body;
    Pokemon.findByIdAndUpdate(id, update, (err) => {
        if(err){
            console.log(err);
            return res.status(400).send({message: "Houve um erro em atualizar este pokémon."});
        } else {
            return res.status(200).send({message: "Sucesso!"});
        }
    });
})

//Criando uma rota para importar a planilha e transformar em um JSON, importável pelo MongoDB Compass.
routes.post('/auto', async (req, res) => {
    Pokemones.forEach(createPokemon);
    async function createPokemon(data) {
        let {
            name,
            pokedexNumber,
            imgName,
            generation,
            evolutionState,
            evolved,
            familyId,
            crossGen,
            type1,
            type2,
            weather1,
            weather2,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            isNoveau,
            notGettable,
            futureEvolve,
            IV40,
            IV39
        } = data;

        if ((pokedexNumber || generation || familyId || atk || def || sta || IV40 || IV39) !== Number) {
            if (pokedexNumber !== Number) {
                let pokedexNumber = Number(this.pokedexNumber)
            }
            else if (generation !== Number) {
                let generation = Number(this.generation)
            }
            else if (familyId  !== Number) {
                let familyId = Number(this.familyId)
            }
            else if (atk  !== Number) {
                let atk = Number(this.atk)
            }
            else if (def  !== Number) {
                let def = Number(this.def)
            }
            else if (sta  !== Number) {
                let sta = Number(this.sta)
            }
            else if (IV39  !== Number) {
                let IV39 = Number(this.IV39)
            }
            else if (IV40  !== Number) {
                let IV40 = Number(this.IV40)
            }
        }
        const pokemao = {
            name,
            pokedexNumber,
            imgName,
            generation,
            evolutionState,
            evolved,
            familyId,
            crossGen,
            type1,
            type2,
            weather1,
            weather2,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            isNoveau,
            notGettable,
            futureEvolve,
            IV40,
            IV39
        }
        console.log(poskemanolos.length);
        poskemanolos.push(pokemao)
        if(poskemanolos.length > 820){
            fs.writeFile('pokemaos.json', JSON.stringify(poskemanolos), function(err) {
                if (err) throw err;
                console.log('complete');
                return res.status(200).send({message: 'Transformação completa, o arquivo JSON está disponível.'})
            });
        }
    }
});

module.exports = routes;