const mysql = require('mysql');
const util = require('util');

//CONFIGURACAO DO BANCO DE DADOS

//Configurando Conecção ao banco;
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bdPokemon'
});
//Realizando conecção;
function connect(){
    connection.connect(function(err){
        if(err) return console.log(err);
    })
}



//QUERYS E METODOS UTIZLIANDO O BANCO

//VARIAVEL GLOBAL PARA DADOS
var data;


//Select em todos os pokemons;
function getPokemons(){
    connection.query('SELECT *, a.tipoPokemon as "type1" , c.tipoPokemon as "type2", d.clima as "clima" from tbpokemon b JOIN tbtipopokemon a on b.tipoPokemon1 = a.codTipoPokemon JOIN tbtipopokemon c on b.tipoPokemon2 = c.codTipoPokemon JOIN tbclima d on d.codClima = b.clima', attData);
    console.log('getPokemons executada! \n');
}

//Pesquisa por nome pokemon
function searchPokemons(nomePokemon){
    var query = 'SELECT *, a.tipoPokemon as "type1" , c.tipoPokemon as "type2", d.clima as "clima" from tbpokemon b JOIN tbtipopokemon a on b.tipoPokemon1 = a.codTipoPokemon JOIN tbtipopokemon c on b.tipoPokemon2 = c.codTipoPokemon JOIN tbclima d on d.codClima = b.clima WHERE nomePokemon like "%' + nomePokemon + '%"'
    connection.query(query, attData);


    console.log(query);

    console.log("SearchPokemons executada! \n");
}

//Pegar pokemon por codigo
function getPokemonById(id){
    var query = 'SELECT *, a.tipoPokemon as "type1" , c.tipoPokemon as "type2", d.clima as "clima" from tbpokemon b JOIN tbtipopokemon a on b.tipoPokemon1 = a.codTipoPokemon JOIN tbtipopokemon c on b.tipoPokemon2 = c.codTipoPokemon JOIN tbclima d on d.codClima = b.clima WHERE codPokemon = ' + id;
    console.log(query);
    connection.query(query, attData);

    console.log(query);

    console.log('GetPokemonById executada! \n');
}


//Cadastra um novo Pokemon
function cadPokemon(pokemon){
    var query = "INSERT INTO " + 
    "tbpokemon(nomePokemon, pokedexNumber, generation, evolutionStage, tipoPokemon1, tipoPokemon2, clima, ATKPokemon, DEFPokemon, STAPokemon, totalStats, legendary, n100cp_40, n100cp_39, imgDir) " +
    "VALUES ('"+pokemon.nomePokemon+"',"+pokemon.pokedexNumber+","+pokemon.generation+","+pokemon.evolutionStage+","+pokemon.tipoPokemon1+","+pokemon.tipoPokemon2+","+pokemon.clima+","+pokemon.ATKPokemon+","+pokemon.DEFPokemon+","+pokemon.STAPokemon+","+pokemon.totalStatsPokemon+",'"+pokemon.legendary+"',"+pokemon.n100cp_40+","+pokemon.n100cp_39+", '"+pokemon.editedImagePath+"')";
    console.log(query);
    connection.query(query, attData);

    console.log("cadPokemon executada! \n");
}

//Editar um Pokemon
function updatePokemon(pokemon){
    var query = "UPDATE tbpokemon SET nomePokemon='"+pokemon.nomePokemon+"',pokedexNumber="+pokemon.pokedexNumber+",generation="+pokemon.generation+",evolutionStage="+pokemon.evolutionStage+",tipoPokemon1="+pokemon.tipoPokemon1+",tipoPokemon2="+pokemon.tipoPokemon2+",clima="+pokemon.clima+",ATKPokemon="+pokemon.ATKPokemon+",DEFPokemon="+pokemon.DEFPokemon+",STAPokemon="+pokemon.STAPokemon+",totalStats="+pokemon.totalStatsPokemon+",legendary='"+pokemon.legendary+"',n100cp_40="+pokemon.n100cp_40+",n100cp_39="+pokemon.n100cp_39+" WHERE codPokemon = " + pokemon.codPokemon
    connection.query(query, attData);

    console.log(query);

    console.log('Update Pokemon Executada! \n');
}


//Deletar um pokemon
function delPokemon(id){
    var query = "DELETE FROM tbPokemon WHERE codPokemon = " + id;
    connection.query(query, attData);

    console.log("delPokemon Executada!  \n")
}



//Atribui o resultado a variavel global de resultado;
function attData(err, results, fields){
    data = results;
}

//Retrona o resultado
function getData(){
    return data;
}

//Metodos do CRUD
exports.getPokemons = getPokemons;
exports.searchPokemons = searchPokemons;
exports.cadPokemon = cadPokemon;
exports.updatePokemon = updatePokemon;
exports.delPokemon = delPokemon;
exports.getPokemonById = getPokemonById;

//Metodos de Config
exports.getData = getData;
exports.connect = connect;