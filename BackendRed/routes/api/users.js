const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const bcrypt = require('bcryptjs')// transformar senhas em hashs
const keys = require('../../config/keys')
const jwt = require('jsonwebtoken')
const passport = require("passport")
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')


router.get("/", async (req, res) => {
  
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});
router.put('/:id', function (req, res, next) {

    User.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
});
router.delete('/:id', function (req, res, next) {

    User.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({ success: true });
        res.end();
    });
});
router.get('/:id', function (req, res, next) {
  
    User.findById({ _id: req.params.id }).lean().exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
});
        
router.get("/test", (req, res) => {
    res.json({ message: "this is the user route" });
});
router.get(
    "/current",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        res.send(req.user)
    }
)
router.post('/register', (req,res) => {
 
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ name: req.body.name})
    .then(user => {
        if (user) {
            
        return res.status(400).json({ name: "A user is already registred with that name"})
        }else {

        const newUser = new User ({
        
        name: req.body.name,
        password: req.body.password,
        imgname: req.body.imgname,
        pokedexnumber: req.body.pokedexnumber,
        generation: req.body.generation,
        evolutionstage: req.body.evolutionstage,
        evolved: req.body.evolved,
        familyid: req.body.familyid,
        crossgen: req.body.crossgen,
        type1: req.body.type1,
        type2: req.body.type2,
        weather1: req.body.weather1,
        weather2: req.body.weather2,
        stattotal: req.body.stattotal,
        atk: req.body.atk,
        def: req.body.def,
        sta: req.body.sta,
        legendary: req.body.legendary,
        aquireable: req.body.aquireable,
        spawns: req.body.spawns,
        regional: req.body.regional,
        raidable: req.body.raidable,
        hatchable: req.body.hatchable,
        shiny: req.body.shiny,
        nest: req.body.nest,
        new: req.body.new,
        notgettable: req.body.notgettable,
        futureevolve: req.body.futureevolve,
        cemcp40: req.body.cemcp40,
        cemcp39: req.body.cemcp39
        })

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                           if(err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(( user ) => res.json(user))
                                .catch(err => console.log(err))
                        })
                    })
                }
            })
})

router.post('/login', (req, res) => {
  
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const name= req.body.name;
    const password = req.body.password;

    User.findOne({ name })
        .then(user => {
            if(!user) {
                return res.status(404).json({ name: "This is user does not exist." });
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {
                            id: user.id,
                            pokedexnumber: user.pokedexnumber,
                            name: user.name,
                        }
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.json({ 
                                sucess: true,
                                token: "Bearer" + token
                            })
                        }
                    )
                } else {
                    return res.status(400).json({ password: "Incorrect password"})
                }
                })
        })
} )



module.exports = router;

