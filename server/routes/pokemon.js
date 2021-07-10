const express = require('express');
const router = express.Router();


const Pokemon = require("../models/Pokemon")

/* DELETE ONE THE POKEMONS. */
router.delete('/delete/:id', async (req, res) => {
    try {
        const filter = req.params.id
        await Pokemon.findByIdAndDelete(filter)
        return res.status(200).json({ message: "everything worked" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
});

/* UPDATE ONE THE POKEMONS. */
router.put('/update', async (req, res) => {
    const data = req.body
    try {
        const filter = { _id: data._id }
        const update = { ...data }
        await Pokemon.findOneAndUpdate(filter, update)
        return res.status(200).json({ message: "everything worked" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
});

/* POST ONE THE POKEMONS. */
router.post('/new', async (req, res) => {
    const newPokemon = new Pokemon(req.body)
    try {
        await newPokemon.save()
        return res.status(200).json({ message: "everything worked" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }

});

/* GET ALL THE POKEMONS. */
router.get('/', async (req, res) => {
    await Pokemon.find().then(data => {
        return res.status(200).json([...data])
    }).catch(error => {
        console.log(error)
        return res.status(500).json({ message: error })
    })
});


/* GET ONE THE POKEMONS. */
router.get('/:id', async (req, res) => {
    await Pokemon.findOne({ pokedex_number: req.params.id }).then(data => {
        return res.status(200).json(data)
    }).catch(error => {
        console.log(error)
        return res.status(500).json({ message: error })
    })
});




module.exports = router;


