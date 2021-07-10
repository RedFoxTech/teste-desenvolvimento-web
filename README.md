# Teste de Desenvolvimento Web

Olá Dev! Tudo bem?

A RedFox está sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente motivação!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas conhecer você, seu esforço e potencial para aprender, se adaptar e tomar decisões.

Agora vamos ao teste!


## Desafio Pokémon

Nós temos um problema, atualmente nosso sistema é só um excel, cheio de informações sobre Pokémon. Nós usamos ele como banco de dados e ao mesmo tempo interface de gerenciamento, inserindo, editando, deletando e filtrando os dados.

A missão é criar um sistema para substituir este excel, pois queremos expandir e acrescentar funcionalidades. Queremos manter o básico, mas principalmente queremos uma forma prática e agradável de buscar os dados, com listagem, filtros, paginação e detalhes sobre cada Pokémon.

Fique à vontade com o layout, precisamos de uma interface que consiga entregar as funcionalidades principais e substituir o excel, só isso.


## Consigo fazer tudo isso?

Consegue sim!

O teste é flexível, você pode escolher alguma parte específica dele para fazer, em que se sinta mais confortável e confiante, por exemplo: a interface, as funcionalidades, o banco de dados, etc...O importante é tentar atingir o objetivo de alguma forma.

Aqui na RedFox queremos aproveitar ao máximo suas habilidades e aptidões, mas também desafiar você a adquirir novas, então nossa equipe tem a liberdade de trasitar entre frontend, backend, infraestrutura, etc...Sem se restringir, tudo depende do esforço e vontade de cada um.


## Por onde começo?

Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome, para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.


## E o Layout??

Fique a vontade quanto a isso, não vamos avaliar o design da sua interface. Se quiser desenhar algo bacana, diferente, pensar até em UI/UX, etc...é claro que vamos valorizar o seu esforço e considerar como um diferencial, mas não se preocupe. 


## Regras

Para o desafio ficar mais interessante, decidimos criar algumas regras:
- No layout, deve utilizar algum framework CSS (ex: Bootstrap, MaterializeCSS, Bulma...)
- No frontend, deve utilizar algum framework JS (ex: VueJS, ReactJS, Angular...tente não usar jQuery)
- No backend, deve utilizar NodeJS
- Documentar um pouco o projeto, o que você fez e de que forma devemos executar-lo


## Só isso?

Só!...mas se quiser ir além, tente preparar o projeto para ser executado de maneira simples e prática, se coloque no lugar de alguém com menos conhecimentos, que precisa ver o que você desenvolveu. 

ps: Se fizer deploy em algum servidor ou utilizar alguma ferramenta que facilite a execução (ex: docker), será um diferencial.


Boa sorte! (^_^)


### Deploy

[PokemonGO](https://red-fox-dev-assessment.herokuapp.com/)

### Como Rodar o Projeto:

```bash
Go to the client folder and run: 
$ yarn 
$ yarn start

In a separete terminal, go to the server folder and run:
$ yarn 
$ yarn start 
```

### Algumas Informações:

Para possibilitar a produção do front da maneira mais rápida e simples possível, optei por usar o chakra-ui, juntamente com o choc-ui. Dessa forma, consegui sistematizar essa parte do processo de desenvolvimento deixando o projeto com um design agradável, embora minimalista. Infelizmente não me senti seguro o suficiente, em relação ao tempo, para criar uma concepção e mock-up do zero. Ademais, também com a visão de acelerar o desenvolvimento, decidi por usar a biblioteca "react-hook-form" para criação de forms controlados dentro da aplicação, essa decisão gerou a oportunidade de integrar a view de update com a view de detalhes de cada elemento. Por fim, confesso que gostei bastante da sensação de simplicidade e robustez que o projeto adquiriu.
