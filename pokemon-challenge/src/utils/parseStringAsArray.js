module.exports = function parseStringAsArray(ArrayAsString){
    return ArrayAsString.split(',').map( tech => tech.trim())
}