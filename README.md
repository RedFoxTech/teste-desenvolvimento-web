# pokedex
Projeto teste fullstack pokemon

## Backend
In thisproject was used firestore from firebase to save all data    

## Frontend
 - Vuejs
 - Vux (Centralização de estado)
 - Vuetify (Framework de componetes de UI)

## Evitando problema de CORS em desenvolvimento
Point the name of domain firebase to localhost (For use with SSL without stay deploing firebase) 
### On Linux
Add the follow line on hosts   
`127.0.0.1  <domain of your appfirebase>`   
```
sudo nano /ete/hosts
```
Edit `vue.config.js` add your firebase domain on "public" propertie of devServer

## Project setup
```
npm install
```

### Config firebas   
Rename firebaseAccess-exemple.json to firebaseAccess.json add firebase access data

### Exportando dados para firestore no firebase
```
node seed/push.js
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
