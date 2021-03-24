Bom a ideia foi demonstrar um pouco da estruturação que tenho utilizado nos projetos.

- Foi usado conceito de solid especificamente (liskov substitution principle), onde no projeto eu usei um base da dados local mesmo, porem a implentação de um postgresql por exemplo não encontraria dificuldades, uma vez que o codigo ficou bem isolado, criando contratos com uma interface, ou seja, caso precisasse teria apenas que "assinar um contrato" com minha interace e realizar a implementacao, e alterar onde os casos de uso buscava a informacao do repositorio.

- Foi usado o Singleton garantindo a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto.

- Typescript: Tenho migrado muito os projetos para typescript afim de ter um controle melhor do fluxo do desenvolvimento, acredito que a tipagem traz mais confiabilidade no desenvolvimento.

- Separei todos os casos de uso, para seguindo o padrão de projeto, e tornando mais legivel o codigo.
- Uma ideia para uma proxima oportunidade é implementar o postgresql, usando o docker (o que eu acho que é a parte magica rsrs)


Para executar o projeto "yarn dev" ou "docker-compose up". Boa sorte para nós!

