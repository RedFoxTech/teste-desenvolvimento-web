const { Pokemon } = require('../models');

require('dotenv').config();

module.exports = {
    index: async (req, res) => {
        // recupera os parametros de pequisa
        let {name, type1} = req.query;

        let querySearc = {}

        // verifa os parametros de pesquisa
        if(name != '' && name != undefined){
            querySearc['name'] = name;
        }

        if(type1 != '' && type1 != undefined){
            querySearc['type1'] = type1;
        }

        // busca todos os pokemons de acordo com o parametro
        let pokemon = await Pokemon.findAll({where:querySearc});

        // retorna os dados encontrados
        res.status(200).json(pokemon);

    },
    create: async (req, res) => {
        // recupera os dados vindos do corpo da requição
        let {name, atk, def, sta, type1} = req.body;
       
        // converte os dados para numero
        let statTotal = Number.parseInt(atk) + Number.parseInt(def) + Number.parseInt(sta);

        // insere os dados no banco de dados
        let pokemon = await Pokemon.create({
            name:name,
            atk:atk,
            def:def,
            sta:sta,
            statTotal: statTotal,
            type1: type1
        });

        res.status(201).json(pokemon);
    },
    show: async (req, res) => {
        // recupera o id vindo nos parametros da requisição
        let {id} = req.params;
        let pokemon = null;

        // busca pelo pokemon no banco de dados
        pokemon = await Pokemon.findByPk(id);

        // retorna erro caso não encontre o pokemon
        if(!pokemon){
            return res.status(404).json({error:"Pokemon não encontrado"});
        }

        // retorna o pokemon encontrado
        res.status(200).json(pokemon)
    },
    update: async (req, res) => {
        // recupera o id vindo nos parametros da requisição
        let {id} = req.params

        // recupera os dados vindos pelo corpo da requisição
        let {name, atk, def, sta, type1} = req.body;
        let statTotal = Number.parseInt(atk) + Number.parseInt(def) + Number.parseInt(sta);
        let pokemon = null;

        // busca pokemon no banco de dados
        pokemon = await Pokemon.findByPk(id);

        // retorna erro caso não encontre o pokemon
        if(!pokemon){
            return res.status(404).json({error:"Pokemon não encontrado"});
        }

        // atualiza pokemon no banco de dados
        await pokemon.update({name:name, atk:atk, def:def, sta:sta, statTotal:statTotal, type1:type1},{where:{id:id}});
        
        // retorna mensagem de sucesso
        res.status(200).json({msg: "Pokemon atualizado"});
    },
    delete: async (req, res) => {
        // recupera o id vindo nos parametros da requisição
        let {id} = req.params
        let pokemon = null;

        // busca pokemon no banco de dados
        pokemon = await Pokemon.findByPk(id);

        // retorna erro caso não encontre o pokemon
        if(!pokemon){
            return res.status(404).json({error:"Pokemon não encontrado"});
        }

        // deleta pokemon encontrado
        await Pokemon.destroy({where:{id:id}});
        // retorna mensagem de sucesso
        res.status(200).json({msg: "Pokemon deletado"});
    }
}