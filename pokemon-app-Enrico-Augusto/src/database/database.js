const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/pokemon', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=>{
    console.log('Conectado com o banco pokemon com sucesso');    
})
.catch(err => {
    console.log(err);
})

module.exports = mongoose