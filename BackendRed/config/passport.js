const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);
const { ExtractJwt } = require('passport-jwt');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport =>  {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
            console.log(jwt_payload);
            done();
    }))
}


