<?php
include 'connectDB.php';

$name = filter_var($_REQUEST["name"], FILTER_SANITIZE_EMAIL);
$pokedex_number = filter_var($_REQUEST["pokedex_number"], FILTER_SANITIZE_EMAIL);
$img_name = filter_var($_REQUEST["img_name"], FILTER_SANITIZE_EMAIL);
$generation = filter_var($_REQUEST["generation"], FILTER_SANITIZE_EMAIL);
$evolution_stage = filter_var($_REQUEST["evolution_stage"], FILTER_SANITIZE_EMAIL);
$evolved = filter_var($_REQUEST["evolved"], FILTER_SANITIZE_EMAIL);
$family_id = filter_var($_REQUEST["family_id"], FILTER_SANITIZE_EMAIL);
$cross_gen = filter_var($_REQUEST["cross_gen"], FILTER_SANITIZE_EMAIL);
$type_1 = filter_var($_REQUEST["type_1"], FILTER_SANITIZE_EMAIL);
$type_2 = filter_var($_REQUEST["type_2"], FILTER_SANITIZE_EMAIL);
$weather_1 = filter_var($_REQUEST["weather_1"], FILTER_SANITIZE_EMAIL);
$weather_2 = filter_var($_REQUEST["weather_2"], FILTER_SANITIZE_EMAIL);
$stat_total = filter_var($_REQUEST["stat_total"], FILTER_SANITIZE_EMAIL);
$atk = filter_var($_REQUEST["atk"], FILTER_SANITIZE_EMAIL);
$def = filter_var($_REQUEST["def"], FILTER_SANITIZE_EMAIL);
$sta = filter_var($_REQUEST["sta"], FILTER_SANITIZE_EMAIL);
$legendary = filter_var($_REQUEST["legendary"], FILTER_SANITIZE_EMAIL);
$aquireable = filter_var($_REQUEST["aquireable"], FILTER_SANITIZE_EMAIL);
$spawns = filter_var($_REQUEST["spawns"], FILTER_SANITIZE_EMAIL);
$regional = filter_var($_REQUEST["regional"], FILTER_SANITIZE_EMAIL);
$raidable = filter_var($_REQUEST["raidable"], FILTER_SANITIZE_EMAIL);
$hatchable = filter_var($_REQUEST["hatchable"], FILTER_SANITIZE_EMAIL);
$shiny = filter_var($_REQUEST["shiny"], FILTER_SANITIZE_EMAIL);
$nest = filter_var($_REQUEST["nest"], FILTER_SANITIZE_EMAIL);
$new = filter_var($_REQUEST["new"], FILTER_SANITIZE_EMAIL);
$non_gettable = filter_var($_REQUEST["non_gettable"], FILTER_SANITIZE_EMAIL);
$future_evolve = filter_var($_REQUEST["future_evolve"], FILTER_SANITIZE_EMAIL);
$cp40 = filter_var($_REQUEST["cp40"], FILTER_SANITIZE_EMAIL);
$cp39 = filter_var($_REQUEST["cp39"], FILTER_SANITIZE_EMAIL);

$sql = "INSERT INTO 
pokemons(
name, pokedex_number, img_name, generation, evolution_stage, evolved, family_id, cross_gen, type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, new, non_gettable, future_evolve, cp40, cp39
)
VALUES(
$name, 
$pokedex_number, 
$img_name, 
$generation, 
$evolution_stage, 
$evolved, 
$family_id, 
$cross_gen, 
$type_1, 
$type_2, 
$weather_1, 
$weather_2, 
$stat_total,
$atk,
$def,
$sta,
$legendary,
$aquireable,
$spawns,
$regional,
$raidable,
$hatchable,
$shiny,
$nest,
$new,
$non_gettable,
$future_evolve,
$cp40,
$cp39
);";
$resultado = mysqli_query($conexao, $sql)or die("Erro");

mysqli_close($conexao);