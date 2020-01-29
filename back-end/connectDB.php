<?php

// $servername = "localhost";
// $username = "gabrielf_a";
// $password = "12345";
// $dbname = "gabrielf_a";

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "pokemons";

$conexao = mysqli_connect($servername, $username, $password, $dbname)or die("Erro");