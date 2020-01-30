<?php

$servername = "localhost";
$username = "gabrielf_a";
$password = "polades1";
$dbname = "gabrielf_a";

// $servername = "localhost";
// $username = "root";
// $password = "root";
// $dbname = "pokemons";

$conexao = mysqli_connect($servername, $username, $password, $dbname)or die("Erro");