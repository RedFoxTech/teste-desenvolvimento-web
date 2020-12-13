const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.pokedexnumber = validText(data.pokedexnumber) ? data.pokedexnumber: '';
    data.password = validText(data.password) ? data.password : '';

if (!Validator.isEmail(data.name)) {
    errors.name= "Name is invalid"
}

if(Validator.isEmpty(data.email)) {
    errors.name = "Name field is required"
}

if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"
}

if (Validator.isEmpty(data.pokedexnumber)) {
        errors.password = "Password field is required"
    }

return {
    errors,
    isValid: Object.keys(errors).length === 0
}
}
