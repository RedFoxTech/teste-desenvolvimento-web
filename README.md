<div align="center">
    <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1591433716/Omnistack/tkp3avuykaqfpvydmt0i.svg" width="300px"/>
</div>

<br />

<h2 align="center">
   ♻️ NextLevelWeek 1.0 ♻️
</h2>

<!-- <p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/StefanoSaffran/ecoleta?color=34cb79">
   <img alt="Repository size" src="https://img.shields.io/github/repo-size/StefanoSaffran/ecoleta?color=34cb79">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/ecoleta?color=34cb79">
  <img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=34cb79">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/ecoleta?color=34cb79">
  <img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/ecoleta?color=34cb79">
</p>

-->

<p align="center">
  <a href="#computer-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Construído com</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">Para executar Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Entre em contato</a>
  </p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=Run%20in%20Insomnia&uri=https%3A%2F%2Fraw.githubusercontent.com%2FStefanoSaffran%2Fecoleta%2Fmaster%2FInsomnia_2020-06-06.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>

## :computer: Projeto

Ecoleta é um aplicativo que tem como objetivo fomentar a reciclagem de resíduos. Ele ajuda pessoas a encontrar pontos de coleta.

 <p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1591434863/Omnistack/j7gkzljoqptkidehvbuv.gif" >
</p>
## :rocket: Construído com

Este projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
- [Celebrate](https://github.com/arb/celebrate)
- [sqlite3](https://sqlite.org/index.html)
- [knex](https://knexjs.org/)
- [multer](https://github.com/expressjs/multer)
- [Cors](https://www.npmjs.com/package/cors)
- [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Frontend</summary>

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Dropzone](https://github.com/react-dropzone/react-dropzone)
- [React Icons](https://react-icons.netlify.com/#/)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Mobile</summary>

- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/learn)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- [Expo Location](https://docs.expo.io/versions/latest/sdk/location/)
- [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [React Native Appearance](https://github.com/expo/react-native-appearance)
- [React Native Picker Select](https://www.npmjs.com/package/react-native-picker-select)
- [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: Para executar o aplicativo

### Requisitos

Você precisará de:

- [Git](https://git-scm.com)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Backend

Clone o repositório e instale as dependências.

```bash
# clonar o repositório
$ git clone https://github.com/SpencerOtoni/Ecoleta.git
# navege até a pasta de backend
$ cd ecoleta/backend
# instale as dependências de backend
$ yarn
```

```bash
# Criando tabela no banco de dados
# run migrations
$ yarn Knex:migrate
# run api
$ yarn dev
```

### Frontend

```bash
# navege até a pasta de frontend
$ cd ecoleta/frontend
# Instale as dependências do frontend e execute-o, em outra aba do terminal.
$ yarn
$ yarn start
```

### Mobile

O Aplicativo foi desenvolvido em Expo. É uma cadeia de ferramentas gratuita e de código aberto construída em torno do React Native para facilitar o processo de execução e teste de aplicativos. [Clique aqui] (https://expo.io/learn) para começar a Expo.

```bash
# navege até a pasta de mobile
$ cd ecoleta/mobile
# Instale as dependências
yarn
```

Para executar o aplicativo em seu dispositivo, você precisa alterar a configuração de ip.

[api.ts](https://github.com/SpencerOtoni/Ecoleta/blob/master/mobile/src/services/api.ts)

```javascript
  baseURL: 'http://192.168.0.104:3333',
```

substitua http://192.168.0.104 pelo ip da sua máquina.

Agora, com tudo pronto, execute o aplicativo.

```bash
# para executar o aplicativo
yarn start
```

Expo irá abrir uma página no seu navegador, escaneie o QRcode na página e espere o aplicativo carregar.

> O aplicativo foi desenvolvido e testado no android 11.

## :memo: Licença

Este projeto está sob a licença do MIT. Consulte a [LICENÇA] (https://opensource.org/licenses/MIT) para obter mais informações

##: Entre em contato!

<a href="https://www.linkedin.com/in/spencer-otoni-desenvolvedor/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:sspencerotoni@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a>

---

Feito com: ☕ and ❤️ by por Spencer Otoni
