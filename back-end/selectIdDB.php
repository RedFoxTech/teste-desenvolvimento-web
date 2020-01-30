<?php
include 'connectDB.php';

$id = filter_var($_REQUEST["id"], FILTER_SANITIZE_EMAIL);

$sql = "SELECT * FROM pokemons WHERE pokemons.id = id;";
$resultado = mysqli_query($conexao, $sql)or die("Erro");

$jsonArray = array();

while($linha = mysqli_fetch_assoc($resultado))
{
  $jsonArray[] = $linha;
}

echo json_encode($jsonArray);
mysqli_close($conexao);