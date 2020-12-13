const express = require('express');
const router = express.Router();
const passport = require("passport");
const validateTweetInput = require("../../validation/tweets");
const Tweet = require('../../models/Tweet');

router.get("/test", (req, res) => {
    res.json({ message: "this is the Tweets route" });
});

router.post("/", 
passport.authenticate("jwt", {session: false }),
 (req, res) => {
     const { isValid, errors } =  validateTweetInput(req.body);

     if (!isValid) {
         return res.status(400).json(errors);
     }

     const newTweet = new Tweet ({
         user: req.user.id,
         text: req.body.text
     })
     newTweet.save()
         .then(tweet => res.json(tweet))
})
module.exports = router;