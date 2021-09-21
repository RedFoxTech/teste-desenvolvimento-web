## Guia para uso local:
Para uso de banco de dados local é aconselhado utilizar um banco com as seguintes credenciais utilizadas no file ormconfig.json:

**db**: postgres \
**username**: postgres \
**password**: 123

Intruções para uso do **docker**: \
*docker run --name postgres -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres*

Com uma instância do POSTGRES, criei a database ***pokemon_go_db***

Accesse o projeto e rode: \
***npm intall*** ou ***yarn***

Com as pendências instaladas, rode o seguinte comando:\
***npx run typeorm migration:run*** ou ***yarn typeorm migration:run***

Após a criação das migrations, rode: ***npm run dev*** para subir o projeto local
