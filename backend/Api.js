const express = require('express')
const server =  express();
const bodyParser = require('body-parser');
const path = require('path');
//Variaveis de conexão
const {conexao} = require('./Connect')
const connection = conexao();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//variavel para gerar as APIs
const api = express.Router();

// variaveis para realizar o upload de arquivo
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload =  multer(uploadConfig)

//Listar todos os pokémons
api.get('/listAllPokemons', (req,res)=>{
  sqlQuery('SELECT * FROM tb_pokemon', res)
});

//fazer uma pesquisa de pokémons
api.get('/selPokemon/:nome?',(req,res)=>{
  let filtro = ''
  if(req.params.nome){
    filtro = `WHERE nome LIKE '%${req.params.nome}%'`;
  }else{
    filtro = `WHERE nome LIKE '%%'`;
  } 
  console.log(filtro)
  sqlQuery('SELECT * FROM tb_pokemon ' + filtro, res)
})

api.post('/insertPokemon',upload.single('file'), (req, res)=>{
  const nome = req.body.nome;
  const file = req.file;
  const geracao = req.body.geracao;
  const evolved = req.body.evolved;
  const estagioEvolucao = req.body.estagioEvolucao;
  const atk = req.body.atk;
  const def = req.body.def;
  const sta = req.body.sta;
  const familyId = req.body.familyId;
  const crossGen = req.body.crossGen;
  
  const sql = `INSERT INTO tb_pokemon (
    nome,
    img_pokemon,
    geracao,
    evolved,
    estagioEvolucao,
    atk,
    def,
    sta,
    familyId,
    crossGen) ` +
  `VALUES ('${nome}','${file.filename}',${geracao},${evolved},${estagioEvolucao},
  ${atk},${def},${sta},${familyId},${crossGen})`
  sqlQuery(sql, res);
})

api.put('/updatePokemon/:num',upload.single('file'), (req, res)=>{
  const numPokedex = req.params.num
  const nome = req.body.nome;
  const file = req.file;
  const geracao = req.body.geracao;
  const evolved = req.body.evolved;
  const estagioEvolucao = req.body.estagioEvolucao;
  const atk = req.body.atk;
  const def = req.body.def;
  const sta = req.body.sta;
  const familyId = req.body.familyId;
  const crossGen = req.body.crossGen;
  
  const sql = `UPDATE tb_pokemon SET 
    nome = '${nome}',
    img_pokemon = '${file.filename}',
    geracao = ${geracao},
    evolved = ${evolved},
    estagioEvolucao = ${estagioEvolucao},
    atk = ${atk},
    def = ${def},
    sta = ${sta},
    familyId = ${familyId},
    crossGen = ${crossGen}` +
  ` WHERE num_pokedex = ${numPokedex}`
  sqlQuery(sql, res);
})

api.delete('/delPokemon/num', (req,res)=>{
  const numPokedex = req.params.num;
  const sql = `DELETE FROM tb_pokemon WHERE num_pokedex = ${numPokedex}`
  sqlQuery(sql,res);
})

server.use('/', api);
//para pegar a imagem do pokémon
server.use('/files', express.static(path.resolve(__dirname, 'uploads')));
server.listen(3000);



//função para realizar as querys no banco
function sqlQuery(sql, res){
  console.log(sql)
  connection.query(sql, (erro,results,fields)=>{
    if(erro){
     res.json(erro)
    }else{
     res.json(results)
    }
 })
}




