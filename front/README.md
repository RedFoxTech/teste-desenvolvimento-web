## Acesso

Acesse o projeto pela url: https://orulo.surge.sh

## Notas

Entendi que o teste envolvia armazenar os favoritos em um banco, mas como a api não tem uma opção de filtrar por array de ids, eu teria que salvar uma cópia de cada imóvel favorito no banco, duplicando todas as informações dos imóveis. Já que a própria documentação da api da Orulo diz que os dados são atualizados com alta frequência, os imóveis favoritos iriam rapidamente ficar desatualizados. Então decidi fazer somente o front end e salvar os favoritos no redux. Por isso todas as informações são perdidas ao dar refresh no website.

## Perpectiva

Fiz o projeto como sendo um site de uma imobiliária que utiliza a API da Orulo.
Então o usuário alvo seria clientes da imobiliária procurando imóveis para comprar.

## Problemas encontrados

* Não consegui filtrar os imóveis por banheiro, depois vi que não tinha essa opção na documentação. Acabei deixando o filtro no formulário por estetica

* Tentei carregar todos os dados de um imóvel ao selecionar um, mas o token fornecido não me permite chamar a api de dados do imóvel pelo id, então apresentei somente os dados que tinha. Por esse motivo, quando der refresh em uma pagina de detalhes de imóvel, os dados são perdidos já que não consigo buscar um imóvel pelo id (ex: https://www.orulo.com.br/api/v2/buildings/4963)

## Scripts

### `yarn start`

**Antes de rodar é necessário criar um arquivo `src/.env.json` com conteúdo:**

```javascript
export const ORULO_API_KEY = 'abc'
export const ORULO_API_URL = 'https://www.orulo.com.br/api/v2'
```

Rodar o app em desenvolvimento

### `yarn deploy`

Autializa o app em https://orulo.surge.sh

## A fazer

* Controle de erros
* Formatar dados vindo da api para usar camelCase, mantendo o código js com um único padrão de formatação
* Testes automatizados
* Apresentação em mapa na busca de imóveis
* Usar dados reais na galeria de imagens de um imóvel
* Zoom na galeria de imagens de um imóvel
* Paginação usando scroll ao invés de botão de “Carregar Mais”
