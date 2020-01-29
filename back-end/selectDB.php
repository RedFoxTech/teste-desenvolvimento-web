<?php
include 'connectDB.php';

$pokemonName = filter_var($_REQUEST["pokemonName"], FILTER_SANITIZE_EMAIL);

$sql = "CALL SelectPokemon('$pokemonName')";
$resultado = mysqli_query($conexao, $sql)or die("Erro");

$jsonArray = array();

while($linha = mysqli_fetch_assoc($resultado))
{
  $jsonArray[] = $linha;
}

echo json_encode($jsonArray);
mysqli_close($conexao);