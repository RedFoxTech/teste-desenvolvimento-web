<h1 align="center"> Backend - Pokémon Go  </h1>

<h2> Tecnologias usadas:  </h2>

- NodeJS
- Express
- Babel
- ES6
- Firebase

<h2> Primeiros Passos </h2>

<p> Antes de tudo, precisamos acessar o banco de dados do firebase.  </p>

<p> Para fazer isso, acesse https://firebase.google.com/ </p>
<p> Faça o login com as seguintes informações: </p>

- Email: teste.andreiamaral@gmail.com
- Senha: fullteste

<p> Clique em "Ir para o console" ao lado do iconde de perfil.
    <br />
    <img src="./src/github/irParaConsole.jpg" alt="Ir para console" height='500' />
</p>

<p> Após carregado, clique no projeto nomeaado 'teste-full'. </p>

<img src="./src/github/clickNoProjeto.jpg" alt="Clique no projeto" height="500" />

<p> Após o projeto ser carregado, basta clicar na opção "Realtime database" no menu ao lado esquerdo. </p>


<img src="./src/github/clickEmDatabase.jpg" alt="Clique no projeto" height="500" />

<p> É aqui que iremos armazenar as informações vindas do excel.</p>

<h2> Tudo certo! </h2>

<p> Agora que vimos onde fica nosso banco de dados, estamos prontos para partir para o backend! .</p>

<h2> Estrutura de pastas. </h2>
<p> Tudo que nos precisamos observar esta dentro da pasta src. </p>

<h2> Do Excel para o Firebase </h2>
<p> A pasta config é onde nos fazemos as configurações de migração do excel para o firebase. </p>

<p> É bem simples, dentro do arquivo excel_to_database.js, nos pegamos os campos e valores do excel e jogamos dentro da variavel 'excelData'. </p>

<p> A estrutura da varival excelData é um objeto que contem as Sheets do excel. Cada Sheet retorna um array com suas chaves e valores </p>


<p> Como nosso excel só tem uma Sheet, pegamos essa Sheet e percorremos ela para podermos ter acesso a cada objeto (pokémon).
</p>

<p>
    E então, no banco de dados, indicamos que queremos acessar a coluna '/Pokemons' e criar um novo objeto passando a propiedade Row como chave de identificação, esse objeto ira conter todas as informações sobre o pokémon.
</p>


<h2> Bora mandar os pokémons para o banco de dados!</h2>

<p> Agora que vimos como funcionará essa transição, basta inciarmos um terminal na pasta backend e rodarmos o comando 'npm run dev'. </p>

<p> Agora basta voltarmos para o banco de dados no site do firebase e vermos nossos pokemons listados conforme seu id (propiedade Row).</p>


<h2> Controle dos pokémons </h2>

<p> No arquivo pokemons.js dentro de src/controllers é onde nos setamos os metodos como: </p>

- listagem de pokemon (index)
- novo pokémon (createPokemon)
- atualizar pokémon (updatePokemon)
- receber detalhes de um pokémon (getPokemonData)
- deletar pokémon (deletePokemon)

<h2> Pronto! </h2>
<p> O restante esta simples de se entender, agora basta partimos para o frontend da nossa aplicação! </p>