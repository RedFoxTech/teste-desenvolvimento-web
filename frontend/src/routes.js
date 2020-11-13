import create from './components/create/createdPokemon.vue'
import home from './components/home/Home.vue'


export const routes = [
    {path: '', component: home, titulo: 'Home'},
    {path: '/createpokemon', component: create, titulo: 'Criar Pokemon' },
];