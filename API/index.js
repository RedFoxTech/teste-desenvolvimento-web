const customExpress = require('./Config/custom-express.js');
//conexao com o banco
const conexao = require('./infra/conexao.js');
const Tabela = require('./infra/tabela.js');

conexao.connect((erro) => {
    if(erro){
        console.log(erro);
    }else{
        console.log('conectado com sucesso');
        Tabela.init(conexao);
        const app = customExpress();
        app.listen(3001, () => console.log('Servidor: 3001'));
    }
});


