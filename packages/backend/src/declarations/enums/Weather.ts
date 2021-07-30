/**
 * @enum PokemonWeather
 * @type {string}
 * @description Padroniza os climas de cada pokémon para validação e inserção
 * @see {@link https://bulbapedia.bulbagarden.net/wiki/Weather}
 * @since 30/07/2021
 * @version 0.0.1
 */

/* eslint-disable no-unused-vars */

enum PokemonWeather {
    SUNNY = 'Sunny/clear',
    FOG = 'Fog',
    SNOW = 'Snow',
    RAINY = 'Rainy',
    HAIL = 'Hail',
    SANDSTORM = 'Sandstorm',
    CLOUDY = 'Cloudy',
    STORMY = 'Stormy',
    WINDY = 'Windy',
    SUNNY_RAINY = 'Partly rainy',
    SUNNY_CLOUDY = 'Partly cloudy',
}

export default PokemonWeather;
