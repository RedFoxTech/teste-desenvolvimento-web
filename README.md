# Teste de Desenvolvimento Web

Olá! Tudo bem?
## Backend
antes, de tudo
```bash
Entre na pasta Backend e rode
# 
npm install 
# ou
yarn install 
```
## Em Seguida Rode
```bash
npm run server
# ou
yarn server
```
## Após isso vá para 
```bash
http://localhost:4000
```
## Rotas
```bash
#Exibe todos os pokemons
http://localhost:4000/api/users
# Procurar pokemon por id
http://localhost:4000/api/users/-> aqui você passa o id do pokemon
```
## Caso queira testar rotas de deletar úsuario ou criar pode testar utilizando Postman[https://www.postman.com/downloads/](https://www.postman.com/downloads/) ou <a src="https://insomnia.rest/download/">Imsominia</a> Obs: Curto Mais o Postman porém é um pouco mais complicado se for iniciante!

```bash
#Obs:tipo da requisição precisa ser igual a delete para funcionar
#Excluir Pokemon
http://localhost:4000/api/users/aqui você passa o id do pokemon
# Excluir Todos os Pokemons
http://localhost:4000/api/users/
```
## Criar Pokemons
```bash
#Obs:tipo da requisição precisa ser igual a post para funcionar
#Criar Pokemon
http://localhost:4000/api/users/
no corpo da requisição passe os paramêtros obrigatórios,que são name,password, e password2, imgname,podexnumber
```

## FrontEnd
antes, de tudo
```bash
Entre na pasta FrontEnd e rode
# 
npm install 
# ou
yarn install 
```
## Em Seguida
rode o servidor de desenvolvimento:
```bash 
npm run dev
# or
yarn dev
```
## Realize esses passos somente se quiser rodar em servidor de produção 

Como, Rodar Servidor de Produção:
```bash 
npm run build
# or
yarn build
```
Logo em seguida rode:
```bash 
npm run start
# or
yarn start
```
## FrontEnd
Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Backend
Abra [http://localhost:4000](http://localhost:4000) com seu navegador para ver o resultado.





