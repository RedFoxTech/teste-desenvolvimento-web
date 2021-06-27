# Teste de Desenvolvimento Web

Olá RedFox! Tudo bem?


## Documentação 
Por ser tratar de uma aplicação que deveria ser construida em 3 dias, busquei ferarmentas que otimizassem meu tempo. Escolhi utilizar o Firebase para guardar o meu banco justamente por isso uma ferramenta rápida e prática. Por se tratar de dados que não necessitam de buscas muito avançadas resolvi utilizar o banco não relacional, transformei a planilha de dados em um JSON e armazei no firebase. Assim, meu banco estava pronto para ser consumido.

No Back, por ser tratar apenas de uma consulta. Não teve muita complexidade, tentei fazer o mais prático possível, justamente para não desperdiçar tempo.

No Front, foi onde gastei maior parte do tempo na construção da aplicação. Resolvi utilizar o tailwind por ser bem sintático e fácil de utilizar. Como minha aplicação tinha apenas uma funcionalidade, e meus dados iriam ser consumidos apenas por uma rota, resolvi criar um Contexto para compartilhar essa informação mais facilmente por todos os meus componentes. Por lá, fiz todos os filtros necessário. 

### FrontEnd
    - O Front foi desenvolvido em React 
    - O Framework de Css utilizado foi o Tailwind

### BackEnd
    - O Back foi desenvolvido em Node
    
### Banco de Dados
    - Firebase RealTime Database




## Utilizando a aplicação 
    - Para iniciar a aplicação é bem simples: 
        1. Entrar na pasta frontend e rodar um yarn no terminal para instalar as dependências 
        2. Entrar na pasta backend e rodar um yarn no terminal para instalar as dependências 
    - Após a instalação dos pacotes:
        3. Entrar na pasta backend e rodar um yarn dev 
        4. Entrar na pasta frontend e rodar um yarn start
    - Pronto, agora só esperar a aplicação iniciar
