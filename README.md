# Teste de Desenvolvimento Web de Jhony Terra

Olá, RedFox! Tudo bem? Desenvolvi esse projeto no tempo delimitado, tendo um atraso na entrega devido ao ENEM 2020 e peço desculpas pelo ocorrido. Mas vamos ao projeto, sim?

## O Desafio Pokémon

Nós temos um problema, atualmente nosso sistema é só um excel, cheio de informações sobre Pokémon. Nós usamos ele como banco de dados e ao mesmo tempo interface de gerenciamento, inserindo, editando, deletando e filtrando os dados.

A missão é criar um sistema para substituir este excel, pois queremos expandir e acrescentar funcionalidades. Queremos manter o básico, mas principalmente queremos uma forma prática e agradável de buscar os dados, com listagem, filtros, paginação e detalhes sobre cada Pokémon.

Fique à vontade com o layout, precisamos de uma interface que consiga entregar as funcionalidades principais e substituir o excel, só isso.


## Consegui fazer tudo isso?

Desenvolvi a aplicação NodeJS com as rotas necessárias para fazer todas as funcionalidades pedidas. A mesma se encontra funcional e pode ser testada via Insomnia ou softwares parecidos. 
O Design da aplicação pode ser visualizado no PDF que se encontra na pasta Design, foi feito no Figma e pensado especialmente para esse projeto.
A aplicação web, não foi completamente finalizada, faltando a página de edição dos Pokémons e também otimização das ocorrências, mas como assim?

A pesquisa é funcional, uma vez digitado o texto, caso clicado no componente dos Pokémons, mostra os Pokémons que possuem nomes com os digitos da pesquisa, a deleção de Pokémons também é funcional, uma vez que assim que apagado, não há mensagem de confirmação da ação ou algo parecido.
Faltaram otimizar estes processos e espero que compreendam.

## Por onde começo?

Primeiramente, você pode clonar essa branch aqui, para sua Área de Trabalho, abrir as pastas /server e /web, dando um ```yarn``` em cada uma delas para instalar todas suas dependências. Um yarn start em ambas as pastas, as fará rodar.

Como os testes da implementação são realizados é vocês quem dizem :)

## Regras

Das regras, foram todas seguidas:
- No layout, foi utilizado Bootstrap.
- No frontend, foi utilizado ReactJS 
- No backend, foi utilizado NodeJS