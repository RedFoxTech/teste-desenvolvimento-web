<?php
include 'connectDB.php';

$pokemonId = filter_var($_REQUEST["pokemonId"], FILTER_SANITIZE_EMAIL);

$sql = "CALL DeletePokemon('$pokemonId')";
$resultado = mysqli_query($conexao, $sql)or die("Erro");

mysqli_close($conexao);