const connection = require('../infra/connection');

class pokemons {
    
    add(pokemon) {
        const sql = 'INSERT INTO pokemons SET ?'
        connection.query(sql, pokemon, (error, results) => {
            if(error){
                console.log(error)
            }else{
                console.log(results)
            }
        })
    }

    list(res){
        const sql = 'SELECT * FROM pokemons'

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error)
            }else{
                res.status(200).json(results)
            }
        })
    }

    searchId(id, res){
        const sql = `SELECT * FROM pokemons WHERE id=${id}`;
        connection.query(sql, (error, results) => {
            const pokemon = results[0]
            if(error){
                res.status(400).json(error)
            }else{
                res.status(200).json(pokemon)
            }
        })
    }

    updated(id, values, res) {
        const sql = 'UPDATE pokemons SET ? WHERE id=?'
        connection.query(sql, [values, id], (error, results) => {
            if(error){
                res.status(400).json(error)
            }else{
                res.status(200).json(results)
            }
        })
        
    }
}

module.exports = new pokemons