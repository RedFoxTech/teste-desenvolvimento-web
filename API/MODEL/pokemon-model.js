const conexao = require('../infra/conexao.js');
const { response } = require('express');

class Pokemon{

    adicionaPokemon(pokemon, resp){
        const sql = 'INSERT INTO pokemon SET ?';
        conexao.query(sql, pokemon, (erro, resultados) => {
            if(erro){
                resp.status(400).json(erro);
            }else{
                resp.status(201).json(resultados);
            }
        });
    }

    lista(resp){
        const sql = "SELECT * FROM pokemon";
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                resp.status(400).json(resp);
            }else{
                resp.status(200).json(resultados);
            }
        });
    }

    listaPorId(id, resp){
        const sql = "SELECT * FROM pokemon WHERE id = "+id;
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                resp.status(400).json(erro);
            }else{
                resp.status(200).json(resultados);
            }
        });
    }

    altera(id, valores, resp){
        const sql = 'UPDATE pokemon SET ? WHERE id = ?';
        conexao.query(sql, [valores, id], (erro, resultados) =>{
            if(erro){
                resp.status(400).json(erro);
            }else{
                resp.status(200).json(resultados);
            }
        });
    }

    deleta(id, resp){
        const sql = 'DELETE FROM pokemon WHERE id = ?'
        
        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                resp.status(400).json(erro);
            }else{
                resp.status(200).json({id});
            }
        });
    }
}

module.exports = new Pokemon;