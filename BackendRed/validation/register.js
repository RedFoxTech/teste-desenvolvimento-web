const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validRegisterInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.pokedexnumber = validText(data.pokedexnumber) ? data.pokedexnumber : "";
    data.imgname = validText(data.imgname) ? data.imgname : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if (!Validator.isLength(data.name, { min: 2, max: 30})) {
        errors.name = "Name must be betweem 2 and 30 chars";
    }

    if (Validator.isEmpty(data.name)) {
            errors.name = "Name field is required"
    }

    if (Validator.isEmpty(data.pokedexnumber)) {
        errors.pokedexnumber = "Pokedexnumber field is required"
    }

    if (!Validator.isInt(data.pokedexnumber)) {
        errors.pokedexnumber = "PokedexNumber is invalid"
    }

    if (!Validator.isInt(data.imgname)) {
        errors.imgname = "ImgNumber is invalid"
    }
    if (Validator.isEmpty(data.imgname)) {
        errors.imgname = "Imgnumber field is required"
    }


    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }

    if (!Validator.isLength(data.password, {min: 2, max: 30})) {
        errors.password = "Password must be between 2 and 30 chars"
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match"
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Password2 is required"
    }
    
return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}