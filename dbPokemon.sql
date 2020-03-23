-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Mar-2020 às 07:28
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pokemon`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `especie`
--

CREATE TABLE `especie` (
  `idEspecie` int(11) NOT NULL,
  `nomeEspecie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `especie_pokemon`
--

CREATE TABLE `especie_pokemon` (
  `idEspecie` int(11) NOT NULL,
  `num_pokedex` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pokemons_type`
--

CREATE TABLE `pokemons_type` (
  `num_pokedex` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pokemon_weather`
--

CREATE TABLE `pokemon_weather` (
  `idWeather` int(11) NOT NULL,
  `num_pokedex` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pokemon`
--

CREATE TABLE `tb_pokemon` (
  `num_pokedex` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `img_pokemon` varchar(100) NOT NULL,
  `geracao` int(11) NOT NULL,
  `evolved` tinyint(1) NOT NULL,
  `estagioEvolucao` int(11) NOT NULL,
  `atk` int(11) NOT NULL,
  `def` int(11) NOT NULL,
  `sta` int(11) NOT NULL,
  `familyId` int(11) DEFAULT NULL,
  `crossGen` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_pokemon`
--

INSERT INTO `tb_pokemon` (`num_pokedex`, `nome`, `img_pokemon`, `geracao`, `evolved`, `estagioEvolucao`, `atk`, `def`, `sta`, `familyId`, `crossGen`) VALUES
(1, 'Bulbasaur', 'crud_pokemon/uploads/bulbasaur.jpg', 1, 0, 1, 118, 118, 90, NULL, 0),
(2, 'Ivysaur', 'images-1584941115811.jfif', 1, 0, 2, 151, 151, 120, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `type_pokemon`
--

CREATE TABLE `type_pokemon` (
  `id_tipo` int(11) NOT NULL,
  `nome_tipo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `weather`
--

CREATE TABLE `weather` (
  `idWeather` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `especie`
--
ALTER TABLE `especie`
  ADD PRIMARY KEY (`idEspecie`);

--
-- Índices para tabela `especie_pokemon`
--
ALTER TABLE `especie_pokemon`
  ADD PRIMARY KEY (`idEspecie`,`num_pokedex`),
  ADD KEY `fk_ep_numPokedex` (`num_pokedex`),
  ADD KEY `fk_ep_idEspecie` (`idEspecie`);

--
-- Índices para tabela `pokemons_type`
--
ALTER TABLE `pokemons_type`
  ADD PRIMARY KEY (`num_pokedex`,`id_tipo`),
  ADD UNIQUE KEY `fk_numPokedex` (`num_pokedex`) USING BTREE,
  ADD KEY `fk_idTipo` (`id_tipo`);

--
-- Índices para tabela `pokemon_weather`
--
ALTER TABLE `pokemon_weather`
  ADD PRIMARY KEY (`idWeather`,`num_pokedex`),
  ADD KEY `fk_weather_num_pokedex` (`num_pokedex`),
  ADD KEY `fk_weather_id` (`idWeather`);

--
-- Índices para tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  ADD PRIMARY KEY (`num_pokedex`),
  ADD KEY `fk_FamilyId` (`familyId`);

--
-- Índices para tabela `type_pokemon`
--
ALTER TABLE `type_pokemon`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Índices para tabela `weather`
--
ALTER TABLE `weather`
  ADD PRIMARY KEY (`idWeather`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `especie`
--
ALTER TABLE `especie`
  MODIFY `idEspecie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  MODIFY `num_pokedex` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `type_pokemon`
--
ALTER TABLE `type_pokemon`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `weather`
--
ALTER TABLE `weather`
  MODIFY `idWeather` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `especie_pokemon`
--
ALTER TABLE `especie_pokemon`
  ADD CONSTRAINT `fk_ep_idEspecie` FOREIGN KEY (`idEspecie`) REFERENCES `especie` (`idEspecie`),
  ADD CONSTRAINT `fk_ep_numPokedex` FOREIGN KEY (`num_pokedex`) REFERENCES `tb_pokemon` (`num_pokedex`);

--
-- Limitadores para a tabela `pokemons_type`
--
ALTER TABLE `pokemons_type`
  ADD CONSTRAINT `fk_idTipo` FOREIGN KEY (`id_tipo`) REFERENCES `type_pokemon` (`id_tipo`),
  ADD CONSTRAINT `fk_numPokedex` FOREIGN KEY (`num_pokedex`) REFERENCES `tb_pokemon` (`num_pokedex`);

--
-- Limitadores para a tabela `pokemon_weather`
--
ALTER TABLE `pokemon_weather`
  ADD CONSTRAINT `fk_weather_id` FOREIGN KEY (`idWeather`) REFERENCES `weather` (`idWeather`),
  ADD CONSTRAINT `fk_weather_num_pokedex` FOREIGN KEY (`num_pokedex`) REFERENCES `tb_pokemon` (`num_pokedex`);

--
-- Limitadores para a tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  ADD CONSTRAINT `fk_FamilyId` FOREIGN KEY (`familyId`) REFERENCES `tb_pokemon` (`num_pokedex`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
