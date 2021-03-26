var express = require('express');
var router = express.Router();
var Pokemon = require('../models/pokemon')
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
router.get('/pokemon/getall', function(req, res, next) {
  Pokemon.find({},(err,data)=>{
    if(err){
      console.log(err);
    }else{
      res.send(data);
    }
  });
});

module.exports = router;
