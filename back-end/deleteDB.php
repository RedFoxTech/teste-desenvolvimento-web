<?php
include 'connectDB.php';

$id = filter_var($_REQUEST["pokemonId"], FILTER_SANITIZE_EMAIL);

$sql = "DELETE FROM pokemons WHERE pokemons.id = id;";
$resultado = mysqli_query($conexao, $sql)or die("Erro");

mysqli_close($conexao);