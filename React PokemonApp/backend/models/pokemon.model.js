/**
 * Este arquivo model ele representa as tabelas da entidade Pokemon no Banco de Dados do MySQL. Estas colunas serão 
 * geradas automaticamentes com os seguintes atributos: id, nome, tipo, caçado, createdAt, updatedAt. Depois de iniciar
 * o Sequelize, não será necessário criar as funções do crud, o Sequelize suporta todos eles. 
 * 
 * criar um novo pokemon: create(object)
 * achar o pokemon pelo id: findByPk(id)
 * pegar todas os pokemons: findAll()
 * Atualizar o pokemon pelo id: update(data, where:{id: id})
 * remover todos os pokemons: destroy(where:{})
 * achar todos os POkemons pelo titulo: findALL({where: {title:...}}) 
 * 
 * Estas funções serão usadas para o Controller.
 * 
 *
 */

module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("pokemon", {
        nome:{
            type: Sequelize.STRING
        },

        tipo:{
            type: Sequelize.STRING
        },

        capturado:{
            type: Sequelize.BOOLEAN
        }
    });

    return Pokemon;
};