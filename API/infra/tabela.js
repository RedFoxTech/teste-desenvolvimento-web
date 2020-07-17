class Tabela{
    init(conexao){
        this.conexao = conexao;
        this.criaTabela();
    }

    criaTabela(){
        const sql = 'CREATE TABLE IF NOT EXISTS pokemon('+
            'id INT NOT NULL AUTO_INCREMENT,'+
           'nameP VARCHAR(50),'+
            'pokedexNumber INT,'+
            'imgName VARCHAR(50),'+
            'generation VARCHAR(50),'+
            'evolutionStage VARCHAR(50),'+
            'evolved VARCHAR(50) ,'+
            'familyID VARCHAR(50) ,'+
            'crossGen VARCHAR(50) ,'+
            'type1 VARCHAR(50) ,'+
            'type2 VARCHAR(50) ,'+
            'weather1 VARCHAR(50) ,'+
            'weather2 VARCHAR(50) ,'+
            'statTotal VARCHAR(50),'+
            'atk VARCHAR(50),'+
            'def VARCHAR(50),'+
            'sta VARCHAR(50),'+
            'legendary VARCHAR(50),'+
            'arquireable VARCHAR(50),'+
            'spawns VARCHAR(50),'+
            'regional VARCHAR(50),'+
            'raidable VARCHAR(50),'+
            'hatchable VARCHAR(50),'+
            'shiny VARCHAR(50),'+
            'nest VARCHAR(50),'+
            'newP VARCHAR(50),'+
            'notGettable VARCHAR(50),'+
            'futureEvolve VARCHAR(50),'+
            'cp40 VARCHAR(50),'+
            'cp90 VARCHAR(50),'+
            'PRIMARY KEY (id)'+
            ')';
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela pokemon criada com sucesso');
            }
        });
    }
}

module.exports =  new Tabela;