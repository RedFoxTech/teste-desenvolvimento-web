<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "pokemons";

$conexao = mysqli_connect($servername, $username, $password, $dbname)or die("Erro");

$sql = "SELECT * FROM pokemons";
$resultado = mysqli_query($conexao, $sql)or die("Erro");

$jsonArray = array();

while($linha = mysqli_fetch_assoc($resultado))
{
  $jsonArray[] = $linha;
}

echo json_encode($jsonArray);
mysqli_close($conexao);