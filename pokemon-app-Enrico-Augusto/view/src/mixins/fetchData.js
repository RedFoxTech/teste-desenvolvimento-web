export default{
    data() {
        return {
            api: null    
        }
    },
    methods: {
        fetchData(path){
            fetch(`http://localhost:4000${path}`)
            .then(r => r.json())
            .then(json => {
                console.log(json);                
                this.api = json
            })
            .catch(err => console.log(err))
        }
    },
}