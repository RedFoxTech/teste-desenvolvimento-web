var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const db = 'mongodb+srv://userdb:senhadb@cluster0.f39tr.mongodb.net/angularpokedex?retryWrites=true&w=majority'

mongoose.connect(db,err =>{
  if(err){
    console.log("\n Erro! \n"+err);
  }else{
    console.log("Connected to MongoDB!");
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
