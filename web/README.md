<h1 align="center"> Pokémon Go - Frontend </h1> 

<h2> Tecnologias Usadas: </h2>

- ReactJs
- Typescript
- Axios 
- Styled Components


<h2> Estrutura de pastas </h2>
<p> Todo arquivo visível para nosso código esta dentro da pasta src.  </p>

<p> O arquivo pokemonApi.tsx dentro da pasta /context é onde todos nossos dados sobre os pokémons esta guardado.  </p>
<p> Nele se encontra: </p>

- lista atual de pokémons ( arrayOfPokemons )
- métodos que conversam com nosso backend ( getData, updatePokemon, deletePokemon, newPokemon)
- métodos que fazem busca na lista de pokemons ( getPokemonById, searchPokemon, filterArrayOfPokemonsByProp)

<h2> Arquivos de páginas e estilização </h2>

- Os arquivos que representam as paginas estão dentro da pasta /pages
- A pasta /styles usa a mesma organização da página src, então dentro cotem pastas como /pages que é onde ficam os arquivos de estilização das pages.

<h2> Pasta services </h2>
<p> A pasta services é bem simples, ela contem somente um arquivo e nele nos fazemos uma base de api, para assim evitarmos repetições ao precisar chamar algo na api.</p>

<h1> Importante para que funcione! </h1>

- É necessário rodar o servidor primeiro. 

- É necessario trocar a string da propiedade 'baseURL' dentro de /services/server.ts para o ip da sua maquina atual.

- A string de ficar assim: "http://seu.ip:3030"
- Recomendo colocar a numeração de seu ip ao invés de 'localhost', pois se colocar 'localhost' não será possível ver a aplicação pelo dispositivo móvel.

<h2> Pronto! </h2>
<p> Agora basta iniciar o terminal na raiz deste projeto ( pasta web ) e setar o comando npm start </p>

<h2> Espero que goste! </h2>
<p> Projeto desenvolvido com amor por Andrei Amaral.</p>