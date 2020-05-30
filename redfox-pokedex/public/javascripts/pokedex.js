Vue.component('vpokedexdata', {
    props: ['pokemons','appname'],
    data: () => ({search: ''}),
    methods: {
        filter_name: function(name){
            // pokemons.filter(p => p.name == name)
            this.pokemons = pokemons.filter(p => p.name.includes(name))
        },
        filter_id: function(id){
            // pokemons.filter(p => p.name == name)
            this.pokemons = pokemons.filter(p => p.id == id)
        }
    },
    computed: {
        filteredPokemons: function(){
            return this.pokemons.filter((p) => (p.name.match(this.search)))
        }
    },
    template: `
    <div>
        <form>
            <div class="form-row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Pokemon name" v-model="search">
                </div>
            </div>
        </form>
        <div class="pokedex-data table-responsive">
            <table class="table table-striped table-sm table-hover">
                <thead class="thead-light">
                    <tr>
                        <th v-for="a in Object.keys(pokemons[0])" scope="column">{{a}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in filteredPokemons" v-bind:key="p.id">
                        <td v-for="a in p">{{a}}</td>
                    </tr>
                </tbody>               
            </table>
        </div>
    </div>`
})

Vue.component('vpokefilter',{
    data: () => ({pokemon: ''}),
    template: `

    `
})

var app = new Vue({
    el: '#vue-pokedex',
    component: ['vpokedexdata'],    
    data: {
        pokemons: [],
        appname: "Redfox Pokedex"
    },
    methods: {
        get_pokemons: function(){
            axios.get(`${window.location.origin}/api`)
            .then(res => this.pokemons = res.data)
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
    },
    created(){
        this.get_pokemons()
    } 
})