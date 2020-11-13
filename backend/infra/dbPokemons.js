class tables {
    init(connection){
           this.connection = connection

           this.createPokemons()
        }

        createPokemons() {
            const sql = 'CREATE TABLE IF NOT EXISTS pokemongo (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, Nome varchar(30)  NOT NULL, PokedexNumber int(20) NOT NULL, Img BLOB, Generation int(10) NOT NULL, Evolution_Stage varchar(10) NOT NULL, Evolved int(10) NOT NULL, FamilyID int(10) NOT NULL, Cross_Gen int(10) NOT NULL, Type_1 varchar(10) NOT NULL, Type_2 varchar(10), Weather_1 varchar(30) NOT NULL, Weather_2 varchar(30), STAT_TOTAL int(20) NOT NULL, ATK int(20) NOT NULL, DEF int(20) NOT NULL, STA int(20) NOT NULL, Legendary int(20) NOT NULL, Aquireable int(20) NOT NULL, Spawns int(20) NOT NULL, Regional int(20) NOT NULL, Raidable int(20) NOT NULL, Hatchable int(20) NOT NULL, Shiny int(20) NOT NULL, Nest int(20) NOT NULL, New int(20) NOT NULL, Not_Gettable int(20) NOT NULL, Future_Evolve int(20) NOT NULL, CP_04 int(20) NOT NULL, CP_39 int(20) NOT NULL )' 
            this.connection.query(sql, error => {
                if(error) {
                    console.log(error)
                }else{
                    console.log('Pokemons criados com Sucesso!!')
                }
        })
    }
}

module.exports = new tables;