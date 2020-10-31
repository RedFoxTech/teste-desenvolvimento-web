DROP DATABASE IF EXISTS pokemon_go;

CREATE DATABASE IF NOT EXISTS pokemon_go;

USE pokemon_go;

CREATE TABLE IF NOT EXISTS pokemons (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  pokedex_number INT NOT NULL,
  generation INT NOT NULL,
  img_name VARCHAR(100) NOT NULL,
  type_1 VARCHAR(100) NOT NULL,
  type_2 VARCHAR(100),
);

CREATE TABLE IF NOT EXISTS stats (
  stats_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  pokemon_id INT NOT NULL,
  stat_total INT NOT NULL,
  atk INT NOT NULL,
  def INT NOT NULL,
  sta INT NOT NULL,
  cp_40 INT NOT NULL,
  cp_39 INT NOT NULL,
  CONSTRAINT FOREIGN KEY (pokemon_id) REFERENCES pokemons(pokemon_id)
);

CREATE TABLE IF NOT EXISTS generations (
  family_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  pokemon_id INT NOT NULL,
  evolution_stage VARCHAR(100),
  envolved BOOLEAN NOT NULL,
  future_evolve BOOLEAN NOT NULL,
  cross_gen BOOLEAN NOT NULL,
  CONSTRAINT FOREIGN KEY (pokemon_id) REFERENCES pokemons(pokemon_id)
);

CREATE TABLE IF NOT EXISTS attributes (
  attributes_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  pokemon_id INT NOT NULL,
  weather_1 VARCHAR(100) NOT NULL,
  weather_2 VARCHAR(100),
  legendary INT NOT NULL,
  not_gettable BOOLEAN NOT NULL,
  aquireable INT NOT NULL,
  spawns BOOLEAN NOT NULL,
  regional BOOLEAN NOT NULL,
  raidable INT NOT NULL,
  hatchable INT NOT NULL,
  shiny BOOLEAN NOT NULL,
  nest BOOLEAN NOT NULL,
  new BOOLEAN NOT NULL,
  CONSTRAINT FOREIGN KEY (pokemon_id) REFERENCES pokemons(pokemon_id)
);

SELECT
  *
FROM
  pokemon;
