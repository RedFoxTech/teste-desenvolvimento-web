-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 30-Jan-2020 às 02:13
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdpokemon`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbclima`
--

CREATE TABLE `tbclima` (
  `codClima` int(11) NOT NULL,
  `clima` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbclima`
--

INSERT INTO `tbclima` (`codClima`, `clima`) VALUES
(1, 'Cloudy'),
(2, 'Fog'),
(3, 'Partly Cloudy'),
(4, 'Rainy'),
(5, 'Snow'),
(6, 'Sunny'),
(7, 'Sunny/clear'),
(8, 'Windy');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbpokemon`
--

CREATE TABLE `tbpokemon` (
  `codPokemon` int(11) NOT NULL,
  `nomePokemon` varchar(200) DEFAULT NULL,
  `pokedexNumber` int(11) DEFAULT NULL,
  `generation` int(11) DEFAULT NULL,
  `evolutionStage` int(11) DEFAULT NULL,
  `tipoPokemon1` int(11) DEFAULT NULL,
  `tipoPokemon2` int(11) DEFAULT NULL,
  `clima` int(11) DEFAULT NULL,
  `ATKPokemon` int(11) DEFAULT NULL,
  `DEFPokemon` int(11) DEFAULT NULL,
  `STAPokemon` int(11) DEFAULT NULL,
  `totalStats` int(11) DEFAULT NULL,
  `n100cp_40` int(11) DEFAULT NULL,
  `n100cp_39` int(11) DEFAULT NULL,
  `imgDir` varchar(500) DEFAULT NULL,
  `legendary` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbpokemon`
--

INSERT INTO `tbpokemon` (`codPokemon`, `nomePokemon`, `pokedexNumber`, `generation`, `evolutionStage`, `tipoPokemon1`, `tipoPokemon2`, `clima`, `ATKPokemon`, `DEFPokemon`, `STAPokemon`, `totalStats`, `n100cp_40`, `n100cp_39`, `imgDir`, `legendary`) VALUES
(1, 'Bulbasaur', 1, 1, 1, 10, 14, 7, 118, 118, 90, 326, 981, 967, '../../assets/fotoPadrao.png', 'No'),
(2, 'Ivysaur', 2, 1, 2, 10, 14, 7, 151, 151, 120, 422, 1552, 1529, '../../assets/fotoPadrao.png', 'No'),
(3, 'Venusaur', 3, 1, 3, 10, 14, 7, 198, 198, 160, 556, 2568, 2531, '../../assets/fotoPadrao.png', 'No'),
(4, 'Charmander', 4, 1, 1, 7, NULL, 7, 116, 96, 78, 290, 831, 819, '../../assets/fotoPadrao.png', 'No'),
(5, 'Charmeleon', 5, 1, 2, 7, NULL, 7, 158, 129, 116, 403, 1484, 1462, '../../assets/fotoPadrao.png', 'No'),
(6, 'Charizard', 6, 1, 3, 7, 8, 7, 223, 176, 156, 555, 2686, 2648, '../../assets/fotoPadrao.png', 'No'),
(7, 'Squirtle', 7, 1, 1, 18, NULL, 4, 94, 122, 88, 304, 808, 797, '../../assets/fotoPadrao.png', 'No'),
(8, 'Wartortle', 8, 1, 2, 18, NULL, 4, 126, 155, 118, 399, 1324, 1305, '../../assets/fotoPadrao.png', 'No'),
(9, 'Blastoise', 9, 1, 3, 18, NULL, 4, 171, 210, 158, 539, 2291, 2259, '../../assets/fotoPadrao.png', 'No'),
(10, 'Caterpie', 10, 1, 1, 1, NULL, 4, 55, 62, 90, 207, 393, 387, '../../assets/fotoPadrao.png', 'No'),
(11, 'Metapod', 11, 1, 2, 1, NULL, 4, 45, 94, 100, 239, 419, 413, '../../assets/fotoPadrao.png', 'No'),
(12, 'Butterfree', 12, 1, 3, 1, 8, 4, 167, 151, 120, 438, 1701, 1677, '../../assets/fotoPadrao.png', 'No'),
(13, 'Weedle', 13, 1, 1, 1, 14, 4, 63, 55, 80, 198, 397, 391, '../../assets/fotoPadrao.png', 'No'),
(14, 'Kakuna', 14, 1, 2, 1, 14, 4, 46, 86, 90, 222, 392, 386, '../../assets/fotoPadrao.png', 'No'),
(15, 'Beedrill', 15, 1, 3, 1, 14, 4, 169, 150, 130, 449, 1777, 1752, '../../assets/fotoPadrao.png', 'No'),
(16, 'Pidgey', 16, 1, 1, 13, 8, 3, 85, 76, 80, 241, 580, 572, '../../assets/fotoPadrao.png', 'No'),
(17, 'Pidgeotto', 17, 1, 2, 13, 8, 3, 117, 108, 126, 351, 1085, 1070, '../../assets/fotoPadrao.png', 'No'),
(18, 'Pidgeot', 18, 1, 3, 13, 8, 3, 166, 157, 166, 489, 1994, 1966, '../../assets/fotoPadrao.png', 'No'),
(19, 'Rattata', 19, 1, 1, 13, NULL, 3, 103, 70, 60, 233, 588, 580, '../../assets/fotoPadrao.png', 'No'),
(20, 'Raticate', 20, 1, 2, 13, NULL, 3, 161, 144, 110, 415, 1549, 1527, '../../assets/fotoPadrao.png', 'No'),
(21, 'Spearow', 21, 1, 1, 13, 8, 3, 112, 61, 80, 253, 673, 664, '../../assets/fotoPadrao.png', 'No'),
(22, 'Fearow', 22, 1, 2, 13, 8, 3, 182, 135, 130, 447, 1814, 1788, '../../assets/fotoPadrao.png', 'No'),
(23, 'Ekans', 23, 1, 1, 14, NULL, 1, 110, 102, 70, 282, 778, 767, '../../assets/fotoPadrao.png', 'No'),
(24, 'Arbok', 24, 1, 2, 14, NULL, 1, 167, 158, 120, 445, 1737, 1712, '../../assets/fotoPadrao.png', 'No'),
(25, 'Pikachu', 25, 1, 1, 4, NULL, 4, 112, 101, 70, 283, 787, 776, '../../assets/fotoPadrao.png', 'No'),
(26, 'Raichu', 26, 1, 2, 4, NULL, 4, 193, 165, 120, 478, 2025, 1996, '../../assets/fotoPadrao.png', 'No'),
(27, 'Sandshrew', 27, 1, 1, 11, NULL, 7, 126, 145, 100, 371, 1194, 1177, '../../assets/fotoPadrao.png', 'No'),
(28, 'Sandslash', 28, 1, 2, 11, NULL, 7, 182, 202, 150, 534, 2328, 2294, '../../assets/fotoPadrao.png', 'No'),
(29, 'Nidoran F', 29, 1, 1, 14, NULL, 1, 86, 94, 110, 290, 736, 725, '../../assets/fotoPadrao.png', 'No'),
(30, 'Nidorina', 30, 1, 2, 14, NULL, 1, 117, 126, 140, 383, 1218, 1201, '../../assets/fotoPadrao.png', 'No'),
(31, 'Nido', 31, 31, 31, 14, 11, 4, 180, 174, 180, 534, 2338, 2304, '../../assets/fotoPadrao.png', '0'),
(32, 'Nidoran M', 32, 1, 1, 14, NULL, 1, 105, 76, 92, 273, 739, 729, '../../assets/fotoPadrao.png', 'No'),
(33, 'Nidorino', 33, 1, 2, 14, NULL, 1, 137, 112, 122, 371, 1252, 1234, '../../assets/fotoPadrao.png', 'No'),
(35, 'Cle5', 35, 1, 1, 5, NULL, 1, 107, 116, 140, 363, 1085, 1070, '../../assets/fotoPadrao.png', 'No'),
(36, 'Clefable', 36, 1, 2, 5, NULL, 1, 178, 171, 190, 539, 2353, 2320, '../../assets/fotoPadrao.png', 'No'),
(37, 'Vulpix', 37, 1, 1, 7, NULL, 7, 96, 122, 76, 294, 774, 763, '../../assets/fotoPadrao.png', 'No'),
(38, 'Ninetales', 38, 1, 2, 7, NULL, 7, 169, 204, 146, 519, 2157, 2127, '../../assets/fotoPadrao.png', 'No'),
(39, 'Jigglypuff', 39, 1, 1, 13, 5, 3, 80, 44, 230, 354, 713, 703, '../../assets/fotoPadrao.png', 'No'),
(40, 'Wigglytuff', 40, 1, 2, 13, 5, 3, 156, 93, 280, 529, 1906, 1879, '../../assets/fotoPadrao.png', 'No'),
(43, 'Oddish', 43, 1, 1, 10, 14, 7, 131, 116, 90, 337, 1069, 1054, '../../assets/fotoPadrao.png', 'No'),
(44, 'Gloom', 44, 1, 2, 10, 14, 7, 153, 139, 120, 412, 1512, 1491, '../../assets/fotoPadrao.png', 'No'),
(45, 'Vileplume', 45, 1, 3, 10, 14, 7, 202, 170, 150, 522, 2367, 2334, '../../assets/fotoPadrao.png', 'No'),
(46, 'Paras', 46, 1, 1, 1, 10, 4, 121, 99, 70, 290, 836, 824, '../../assets/fotoPadrao.png', 'No'),
(47, 'Parasect', 47, 1, 2, 1, 10, 4, 165, 146, 120, 431, 1657, 1633, '../../assets/fotoPadrao.png', 'No'),
(48, 'Venonat', 48, 1, 1, 1, 14, 4, 100, 102, 120, 322, 902, 889, '../../assets/fotoPadrao.png', 'No'),
(49, 'Venomoth', 49, 1, 2, 1, 14, 4, 179, 150, 140, 469, 1937, 1910, '../../assets/fotoPadrao.png', 'No'),
(50, 'Diglett', 50, 1, 1, 11, NULL, 7, 109, 88, 20, 217, 465, 458, '../../assets/fotoPadrao.png', 'No'),
(51, 'Dugtrio', 51, 1, 2, 11, NULL, 7, 167, 147, 70, 384, 1333, 1314, '../../assets/fotoPadrao.png', 'No'),
(52, 'Meowth', 52, 1, 1, 13, NULL, 3, 92, 81, 80, 253, 638, 629, '../../assets/fotoPadrao.png', 'No'),
(53, 'Persian', 53, 1, 2, 13, NULL, 3, 150, 139, 130, 419, 1539, 1517, '../../assets/fotoPadrao.png', 'No'),
(54, 'Psyduck', 54, 1, 1, 18, NULL, 4, 122, 96, 100, 318, 966, 952, '../../assets/fotoPadrao.png', 'No'),
(55, 'Golduck', 55, 1, 2, 18, NULL, 4, 191, 163, 160, 514, 2270, 2238, '../../assets/fotoPadrao.png', 'No'),
(56, 'Mankey', 56, 1, 1, 6, NULL, 1, 148, 87, 80, 315, 1002, 987, '../../assets/fotoPadrao.png', 'No'),
(57, 'Primeape', 57, 1, 2, 6, NULL, 1, 207, 144, 130, 481, 2105, 2075, '../../assets/fotoPadrao.png', 'No'),
(58, 'Growlithe', 58, 1, 1, 7, NULL, 7, 136, 96, 110, 342, 1110, 1095, '../../assets/fotoPadrao.png', 'No'),
(59, 'Arcanine', 59, 1, 2, 7, NULL, 7, 227, 166, 180, 573, 2839, 2799, '../../assets/fotoPadrao.png', 'No'),
(60, 'Poliwag', 60, 1, 1, 18, NULL, 4, 101, 82, 80, 263, 695, 685, '../../assets/fotoPadrao.png', 'No'),
(61, 'Poliwhirl', 61, 1, 2, 18, NULL, 4, 130, 130, 130, 390, 1313, 1294, '../../assets/fotoPadrao.png', 'No'),
(62, 'Poliwrath', 62, 1, 3, 18, 6, 4, 182, 187, 180, 549, 2441, 2407, '../../assets/fotoPadrao.png', 'No'),
(63, 'Abra', 63, 1, 1, 15, NULL, 8, 195, 103, 50, 348, 1148, 1132, '../../assets/fotoPadrao.png', 'No'),
(64, 'Kadabra', 64, 1, 2, 15, NULL, 8, 232, 138, 80, 450, 1859, 1833, '../../assets/fotoPadrao.png', 'No'),
(65, 'Alakazam', 65, 1, 3, 15, NULL, 8, 271, 194, 110, 575, 2887, 2845, '../../assets/fotoPadrao.png', 'No'),
(66, 'Machop', 66, 1, 1, 6, NULL, 1, 137, 88, 140, 365, 1199, 1182, '../../assets/fotoPadrao.png', 'No'),
(67, 'Machoke', 67, 1, 2, 6, NULL, 1, 177, 130, 160, 467, 1910, 1882, '../../assets/fotoPadrao.png', 'No'),
(68, 'Machamp', 68, 1, 3, 6, NULL, 1, 234, 162, 180, 576, 2889, 2848, '../../assets/fotoPadrao.png', 'No'),
(69, 'Bellsprout', 69, 1, 1, 10, 14, 7, 139, 64, 100, 303, 916, 903, '../../assets/fotoPadrao.png', 'No'),
(70, 'Weepinbell', 70, 1, 2, 10, 14, 7, 172, 95, 130, 397, 1475, 1453, '../../assets/fotoPadrao.png', 'No'),
(71, 'Victreebel', 71, 1, 3, 10, 14, 7, 207, 138, 160, 505, 2268, 2236, '../../assets/fotoPadrao.png', 'No'),
(72, 'Tentacool', 72, 1, 1, 18, 14, 4, 97, 182, 80, 359, 956, 943, '../../assets/fotoPadrao.png', 'No'),
(73, 'Tentacruel', 73, 1, 2, 18, 14, 4, 166, 237, 160, 563, 2374, 2340, '../../assets/fotoPadrao.png', 'No'),
(74, 'Geodude', 74, 1, 1, 16, 11, 3, 132, 163, 80, 375, 1193, 1176, '../../assets/fotoPadrao.png', 'No'),
(75, 'Graveler', 75, 1, 2, 16, 11, 3, 164, 196, 110, 470, 1815, 1789, '../../assets/fotoPadrao.png', 'No'),
(76, 'Golem', 76, 1, 3, 16, 11, 3, 211, 229, 160, 600, 2916, 2875, '../../assets/fotoPadrao.png', 'No'),
(77, 'Ponyta', 77, 1, 1, 7, NULL, 7, 170, 132, 100, 402, 1502, 1480, '../../assets/fotoPadrao.png', 'No'),
(78, 'Rapidash', 78, 1, 2, 7, NULL, 7, 207, 167, 130, 504, 2252, 2220, '../../assets/fotoPadrao.png', 'No'),
(79, 'Slowpoke', 79, 1, 1, 18, 15, 4, 109, 109, 180, 398, 1204, 1187, '../../assets/fotoPadrao.png', 'No'),
(80, 'Slowbro', 80, 1, 2, 18, 15, 4, 177, 194, 190, 561, 2482, 2446, '../../assets/fotoPadrao.png', 'No'),
(81, 'Magnemite', 81, 1, 1, 4, 17, 4, 165, 128, 50, 343, 1083, 1068, '../../assets/fotoPadrao.png', 'No'),
(82, 'Magneton', 82, 1, 2, 4, 17, 4, 223, 182, 100, 505, 2237, 2205, '../../assets/fotoPadrao.png', 'No'),
(83, 'Farfetchd', 83, 1, 1, 13, 8, 3, 124, 118, 104, 346, 1092, 1076, '../../assets/fotoPadrao.png', 'No'),
(84, 'Doduo', 84, 1, 1, 13, 8, 3, 158, 88, 70, 316, 1011, 996, '../../assets/fotoPadrao.png', 'No'),
(85, 'Dodrio', 85, 1, 2, 13, 8, 3, 218, 145, 120, 483, 2138, 2108, '../../assets/fotoPadrao.png', 'No'),
(86, 'Seel', 86, 1, 1, 18, NULL, 4, 85, 128, 130, 343, 899, 886, '../../assets/fotoPadrao.png', 'No'),
(87, 'Dewgong', 87, 1, 2, 18, 12, 4, 139, 184, 180, 503, 1894, 1867, '../../assets/fotoPadrao.png', 'No'),
(88, 'Grimer', 88, 1, 1, 14, NULL, 1, 135, 90, 160, 385, 1269, 1251, '../../assets/fotoPadrao.png', 'No'),
(89, 'Muk', 89, 1, 2, 14, NULL, 1, 190, 184, 210, 584, 2709, 2670, '../../assets/fotoPadrao.png', 'No'),
(90, 'Shellder', 90, 1, 1, 18, NULL, 4, 116, 168, 60, 344, 958, 944, '../../assets/fotoPadrao.png', 'No'),
(91, 'Cloyster', 91, 1, 2, 18, 12, 4, 186, 323, 100, 609, 2475, 2439, '../../assets/fotoPadrao.png', 'No'),
(92, 'Gastly', 92, 1, 1, 9, 14, 2, 186, 70, 60, 316, 1002, 988, '../../assets/fotoPadrao.png', 'No'),
(93, 'Haunter', 93, 1, 2, 9, 14, 2, 223, 112, 90, 425, 1716, 1692, '../../assets/fotoPadrao.png', 'No'),
(94, 'Gengar', 94, 1, 3, 9, 14, 2, 261, 156, 120, 537, 2619, 2581, '../../assets/fotoPadrao.png', 'No'),
(95, 'Onix', 95, 1, 1, 16, 11, 3, 85, 288, 70, 443, 1002, 988, '../../assets/fotoPadrao.png', 'No'),
(96, 'Drowzee', 96, 1, 1, 15, NULL, 8, 89, 158, 120, 367, 992, 978, '../../assets/fotoPadrao.png', 'No'),
(97, 'Hypno', 97, 1, 2, 15, NULL, 8, 144, 215, 170, 529, 2048, 2019, '../../assets/fotoPadrao.png', 'No'),
(98, 'Krabby', 98, 1, 1, 18, NULL, 4, 181, 156, 60, 397, 1386, 1366, '../../assets/fotoPadrao.png', 'No'),
(99, 'Kingler', 99, 1, 2, 18, NULL, 4, 240, 214, 110, 564, 2694, 2656, '../../assets/fotoPadrao.png', 'No'),
(100, 'Voltorb', 100, 1, 1, 4, NULL, 4, 109, 114, 80, 303, 857, 845, '../../assets/fotoPadrao.png', 'No'),
(101, 'Electrode', 101, 1, 2, 4, NULL, 4, 173, 179, 120, 472, 1900, 1873, '../../assets/fotoPadrao.png', 'No'),
(102, 'Exeggcute', 102, 1, 1, 10, 15, 7, 107, 140, 120, 367, 1102, 1086, '../../assets/fotoPadrao.png', 'No'),
(103, 'Exeggutor', 103, 1, 2, 10, 15, 7, 233, 158, 190, 581, 2916, 2875, '../../assets/fotoPadrao.png', 'No'),
(104, 'Cubone', 104, 1, 1, 11, NULL, 7, 90, 165, 100, 355, 943, 930, '../../assets/fotoPadrao.png', 'No'),
(105, 'Marowak', 105, 1, 2, 11, NULL, 7, 144, 200, 120, 464, 1691, 1667, '../../assets/fotoPadrao.png', 'No'),
(106, 'Hitmonlee', 106, 1, 1, 6, NULL, 1, 224, 211, 100, 535, 2406, 2372, '../../assets/fotoPadrao.png', 'No'),
(107, 'Hitmonchan', 107, 1, 1, 6, NULL, 1, 193, 212, 100, 505, 2098, 2069, '../../assets/fotoPadrao.png', 'No'),
(108, 'Lickitung', 108, 1, 1, 13, NULL, 3, 108, 137, 180, 425, 1322, 1303, '../../assets/fotoPadrao.png', 'No'),
(109, 'Koffing', 109, 1, 1, 14, NULL, 1, 119, 164, 80, 363, 1091, 1075, '../../assets/fotoPadrao.png', 'No'),
(110, 'Weezing', 110, 1, 2, 14, NULL, 1, 174, 221, 130, 525, 2183, 2152, '../../assets/fotoPadrao.png', 'No'),
(111, 'Rhyhorn', 111, 1, 1, 11, 16, 7, 140, 157, 160, 457, 1679, 1655, '../../assets/fotoPadrao.png', 'No'),
(112, 'Rhydon', 112, 1, 2, 11, 16, 7, 222, 206, 210, 638, 3300, 3253, '../../assets/fotoPadrao.png', 'No'),
(113, 'Chansey', 113, 1, 1, 13, NULL, 3, 60, 176, 500, 736, 1469, 1448, '../../assets/fotoPadrao.png', 'No'),
(114, 'Tangela', 114, 1, 1, 10, NULL, 7, 183, 205, 130, 518, 2208, 2177, '../../assets/fotoPadrao.png', 'No'),
(115, 'Kangaskhan', 115, 1, 1, 13, NULL, 3, 181, 165, 210, 556, 2463, 2428, '../../assets/fotoPadrao.png', 'No'),
(116, 'Horsea', 116, 1, 1, 18, NULL, 4, 129, 125, 60, 314, 921, 908, '../../assets/fotoPadrao.png', 'No'),
(117, 'Seadra', 117, 1, 2, 18, NULL, 4, 187, 182, 110, 479, 1979, 1951, '../../assets/fotoPadrao.png', 'No'),
(118, 'Goldeen', 118, 1, 1, 18, NULL, 4, 123, 115, 90, 328, 1006, 992, '../../assets/fotoPadrao.png', 'No'),
(119, 'Seaking', 119, 1, 2, 18, NULL, 4, 175, 154, 160, 489, 2040, 2011, '../../assets/fotoPadrao.png', 'No'),
(120, 'Staryu', 120, 1, 1, 18, NULL, 4, 137, 112, 60, 309, 926, 913, '../../assets/fotoPadrao.png', 'No'),
(121, 'Starmie', 121, 1, 2, 18, 15, 4, 210, 184, 120, 514, 2303, 2270, '../../assets/fotoPadrao.png', 'No'),
(122, 'Mr Mime', 122, 1, 1, 15, 5, 8, 192, 233, 80, 505, 1984, 1956, '../../assets/fotoPadrao.png', 'No'),
(123, 'Scyther', 123, 1, 1, 1, 8, 4, 218, 170, 140, 528, 2464, 2429, '../../assets/fotoPadrao.png', 'No'),
(124, 'Jynx', 124, 1, 1, 12, 15, 5, 223, 182, 130, 535, 2512, 2476, '../../assets/fotoPadrao.png', 'No'),
(125, 'Electabuzz', 125, 1, 1, 4, NULL, 4, 198, 173, 130, 501, 2196, 2165, '../../assets/fotoPadrao.png', 'No'),
(126, 'Magmar', 126, 1, 1, 7, NULL, 7, 206, 169, 130, 505, 2254, 2222, '../../assets/fotoPadrao.png', 'No'),
(127, 'Pinsir', 127, 1, 1, 1, NULL, 4, 238, 197, 130, 565, 2770, 2730, '../../assets/fotoPadrao.png', 'No'),
(128, 'Tauros', 128, 1, 1, 13, NULL, 3, 198, 197, 150, 545, 2488, 2452, '../../assets/fotoPadrao.png', 'No'),
(129, 'Magikarp', 129, 1, 1, 18, NULL, 4, 29, 102, 40, 171, 220, 217, '../../assets/fotoPadrao.png', 'No'),
(130, 'Gyarados', 130, 1, 2, 18, 8, 4, 237, 197, 190, 624, 3281, 3234, '../../assets/fotoPadrao.png', 'No'),
(131, 'Lapras', 131, 1, 1, 18, 12, 4, 165, 180, 260, 605, 2603, 2566, '../../assets/fotoPadrao.png', 'No'),
(132, 'Ditto', 132, 1, 1, 13, NULL, 3, 91, 91, 96, 278, 718, 707, '../../assets/fotoPadrao.png', 'No'),
(133, 'Eevee', 133, 1, 1, 13, NULL, 3, 104, 121, 110, 335, 969, 955, '../../assets/fotoPadrao.png', 'No'),
(134, 'Vaporeon', 134, 1, 2, 18, NULL, 4, 205, 177, 260, 642, 3157, 3112, '../../assets/fotoPadrao.png', 'No'),
(135, 'Jolteon', 135, 1, 2, 4, NULL, 4, 232, 201, 130, 563, 2730, 2691, '../../assets/fotoPadrao.png', 'No'),
(136, 'Flareon', 136, 1, 2, 7, NULL, 7, 246, 204, 130, 580, 2904, 2863, '../../assets/fotoPadrao.png', 'No'),
(137, 'Porygon', 137, 1, 1, 13, NULL, 3, 153, 139, 130, 422, 1567, 1545, '../../assets/fotoPadrao.png', 'No'),
(138, 'Omanyte', 138, 1, 1, 16, 18, 3, 155, 174, 70, 399, 1345, 1326, '../../assets/fotoPadrao.png', 'No'),
(139, 'Omastar', 139, 1, 2, 16, 18, 3, 207, 227, 140, 574, 2685, 2647, '../../assets/fotoPadrao.png', 'No'),
(140, 'Kabuto', 140, 1, 1, 16, 18, 3, 148, 162, 60, 370, 1172, 1156, '../../assets/fotoPadrao.png', 'No'),
(141, 'Kabutops', 141, 1, 2, 16, 18, 3, 220, 203, 120, 543, 2517, 2481, '../../assets/fotoPadrao.png', 'No'),
(142, 'Aerodactyl', 142, 1, 1, 16, 8, 3, 221, 164, 160, 545, 2608, 2571, '../../assets/fotoPadrao.png', 'No'),
(143, 'Snorlax', 143, 1, 1, 13, NULL, 3, 190, 190, 320, 700, 3355, 3307, '../../assets/fotoPadrao.png', 'No'),
(144, 'Articuno', 144, 1, 1, 12, 8, 5, 192, 249, 180, 621, 2933, 2891, '../../assets/fotoPadrao.png', 'Yes'),
(145, 'Zapdos', 145, 1, 1, 4, 8, 4, 253, 188, 180, 621, 3330, 3282, '../../assets/fotoPadrao.png', 'Yes'),
(146, 'Moltres', 146, 1, 1, 7, 8, 7, 251, 184, 180, 615, 3272, 3225, '../../assets/fotoPadrao.png', 'Yes'),
(147, 'Dratini', 147, 1, 1, 3, NULL, 8, 119, 94, 82, 295, 860, 848, '../../assets/fotoPadrao.png', 'No'),
(148, '3air', 148, 1, 2, 3, NULL, 8, 163, 138, 122, 423, 1609, 1586, '../../assets/fotoPadrao.png', 'No'),
(149, '3ite', 149, 1, 3, 3, 8, 8, 263, 201, 182, 646, 3581, 3530, '../../assets/fotoPadrao.png', 'No'),
(150, 'Mewtwo', 150, 1, 1, 15, NULL, 8, 300, 182, 193, 675, 3982, 3925, '../../assets/fotoPadrao.png', 'Yes'),
(151, 'Mew', 151, 1, 1, 15, NULL, 8, 210, 210, 200, 620, 3090, 3046, '../../assets/fotoPadrao.png', '2'),
(152, 'Chikorita', 152, 2, 1, 10, NULL, 7, 92, 122, 90, 304, 801, 790, '../../assets/fotoPadrao.png', 'No'),
(153, 'Bayleef', 153, 2, 2, 10, NULL, 7, 122, 155, 120, 397, 1296, 1277, '../../assets/fotoPadrao.png', 'No'),
(154, 'Meganium', 154, 2, 3, 10, NULL, 7, 168, 202, 160, 530, 2227, 2195, '../../assets/fotoPadrao.png', 'No'),
(155, 'Cyndaquil', 155, 2, 1, 7, NULL, 7, 116, 96, 78, 290, 831, 819, '../../assets/fotoPadrao.png', 'No'),
(156, 'Quilava', 156, 2, 2, 7, NULL, 7, 158, 129, 116, 403, 1484, 1462, '../../assets/fotoPadrao.png', 'No'),
(157, 'Typhlosion', 157, 2, 3, 7, NULL, 7, 223, 176, 156, 555, 2686, 2648, '../../assets/fotoPadrao.png', 'No'),
(158, 'Totodile', 158, 2, 1, 18, NULL, 4, 117, 116, 100, 333, 1011, 997, '../../assets/fotoPadrao.png', 'No'),
(159, 'Croconaw', 159, 2, 2, 18, NULL, 4, 150, 151, 130, 431, 1598, 1576, '../../assets/fotoPadrao.png', 'No'),
(160, 'Feraligatr', 160, 2, 3, 18, NULL, 4, 205, 197, 170, 572, 2721, 2682, '../../assets/fotoPadrao.png', 'No'),
(161, 'Sentret', 161, 2, 1, 13, NULL, 3, 79, 77, 70, 226, 519, 511, '../../assets/fotoPadrao.png', 'No'),
(162, 'Furret', 162, 2, 2, 13, NULL, 3, 148, 130, 170, 448, 1667, 1643, '../../assets/fotoPadrao.png', 'No'),
(163, 'Hoothoot', 163, 2, 1, 13, 8, 3, 67, 101, 120, 288, 640, 631, '../../assets/fotoPadrao.png', 'No'),
(164, 'Noctowl', 164, 2, 2, 13, 8, 3, 145, 179, 200, 524, 2040, 2011, '../../assets/fotoPadrao.png', 'No'),
(165, 'Ledyba', 165, 2, 1, 1, 8, 4, 72, 142, 80, 294, 663, 654, '../../assets/fotoPadrao.png', 'No'),
(166, 'Ledian', 166, 2, 2, 1, 8, 4, 107, 209, 110, 426, 1275, 1256, '../../assets/fotoPadrao.png', 'No'),
(167, 'Spinarak', 167, 2, 1, 1, 14, 4, 105, 73, 80, 258, 685, 675, '../../assets/fotoPadrao.png', 'No'),
(168, 'Ariados', 168, 2, 2, 1, 14, 4, 161, 128, 140, 429, 1636, 1613, '../../assets/fotoPadrao.png', 'No'),
(170, 'Chinchou', 170, 2, 1, 18, 4, 4, 106, 106, 150, 362, 1067, 1052, '../../assets/fotoPadrao.png', 'No'),
(171, 'Lanturn', 171, 2, 2, 18, 4, 4, 146, 146, 250, 542, 2077, 2047, '../../assets/fotoPadrao.png', 'No'),
(172, 'Pichu', 172, 2, 0, 4, NULL, 4, 77, 63, 40, 180, 376, 370, '../../assets/fotoPadrao.png', 'No'),
(173, 'Cleffa', 173, 2, 0, 5, NULL, 1, 75, 91, 100, 266, 620, 611, '../../assets/fotoPadrao.png', 'No'),
(174, 'Igglybuff', 174, 2, 0, 13, 5, 3, 69, 34, 180, 283, 512, 505, '../../assets/fotoPadrao.png', 'No'),
(175, 'Togepi', 175, 2, 0, 5, NULL, 1, 67, 116, 70, 253, 540, 532, '../../assets/fotoPadrao.png', 'No'),
(176, 'Togetic', 176, 2, 1, 5, 8, 1, 139, 191, 110, 440, 1543, 1521, '../../assets/fotoPadrao.png', 'No'),
(177, 'Natu', 177, 2, 1, 15, 8, 8, 134, 89, 80, 303, 925, 911, '../../assets/fotoPadrao.png', 'No'),
(178, 'Xatu', 178, 2, 2, 15, 8, 8, 192, 146, 130, 468, 1975, 1947, '../../assets/fotoPadrao.png', 'No'),
(179, 'Mareep', 179, 2, 1, 4, NULL, 4, 114, 82, 110, 306, 887, 874, '../../assets/fotoPadrao.png', 'No'),
(180, 'Flaaffy', 180, 2, 2, 4, NULL, 4, 145, 112, 140, 397, 1402, 1382, '../../assets/fotoPadrao.png', 'No'),
(181, 'Ampharos', 181, 2, 3, 4, NULL, 4, 211, 172, 180, 563, 2695, 2656, '../../assets/fotoPadrao.png', 'No'),
(182, 'Bellossom', 182, 2, 3, 10, NULL, 7, 169, 189, 150, 508, 2108, 2078, '../../assets/fotoPadrao.png', 'No'),
(183, 'Marill', 183, 2, 1, 18, 5, 4, 37, 93, 140, 270, 420, 414, '../../assets/fotoPadrao.png', 'No'),
(184, 'Azumarill', 184, 2, 2, 18, 5, 4, 112, 152, 200, 464, 1503, 1481, '../../assets/fotoPadrao.png', 'No'),
(185, 'Sudowoodo', 185, 2, 1, 16, NULL, 3, 167, 198, 140, 505, 2065, 2035, '../../assets/fotoPadrao.png', 'No'),
(186, 'Politoed', 186, 2, 2, 18, NULL, 4, 174, 192, 180, 546, 2371, 2337, '../../assets/fotoPadrao.png', 'No'),
(187, 'Hoppip', 187, 2, 1, 10, 8, 7, 67, 101, 70, 238, 508, 501, '../../assets/fotoPadrao.png', 'No'),
(188, 'Skiploom', 188, 2, 2, 10, 8, 7, 91, 127, 110, 328, 882, 869, '../../assets/fotoPadrao.png', 'No'),
(189, 'Jumpluff', 189, 2, 3, 10, 8, 7, 118, 197, 150, 465, 1553, 1531, '../../assets/fotoPadrao.png', 'No'),
(190, 'Aipom', 190, 2, 1, 13, NULL, 3, 136, 112, 110, 358, 1188, 1171, '../../assets/fotoPadrao.png', 'No'),
(191, 'Sunkern', 191, 2, 1, 10, NULL, 7, 55, 55, 60, 170, 316, 312, '../../assets/fotoPadrao.png', 'No'),
(192, 'Sunflora', 192, 2, 2, 10, NULL, 7, 185, 148, 150, 483, 2048, 2019, '../../assets/fotoPadrao.png', 'No'),
(193, 'Yanma', 193, 2, 1, 1, 8, 4, 154, 94, 130, 378, 1326, 1308, '../../assets/fotoPadrao.png', 'No'),
(194, 'Wooper', 194, 2, 1, 18, 11, 4, 75, 75, 110, 260, 596, 587, '../../assets/fotoPadrao.png', 'No'),
(195, 'Quagsire', 195, 2, 2, 18, 11, 4, 152, 152, 190, 494, 1929, 1902, '../../assets/fotoPadrao.png', 'No'),
(196, 'Espeon', 196, 2, 2, 15, NULL, 8, 261, 194, 130, 585, 3000, 2958, '../../assets/fotoPadrao.png', 'No'),
(197, 'Umbreon', 197, 2, 2, 2, NULL, 2, 126, 250, 190, 566, 2052, 2023, '../../assets/fotoPadrao.png', 'No'),
(198, 'Murkrow', 198, 2, 1, 2, 8, 2, 175, 87, 120, 382, 1392, 1372, '../../assets/fotoPadrao.png', 'No'),
(199, 'Slowking', 199, 2, 2, 18, 15, 4, 177, 194, 190, 561, 2482, 2446, '../../assets/fotoPadrao.png', 'No'),
(200, 'Misdreavus', 200, 2, 1, 9, NULL, 2, 167, 167, 120, 454, 1781, 1756, '../../assets/fotoPadrao.png', 'No'),
(201, 'Unown', 201, 2, 1, 15, NULL, 8, 136, 91, 96, 323, 1022, 1008, '../../assets/fotoPadrao.png', 'No'),
(202, 'Wobbuffet', 202, 2, 1, 15, NULL, 8, 60, 106, 380, 546, 1024, 1009, '../../assets/fotoPadrao.png', 'No'),
(203, 'Girafarig', 203, 2, 1, 13, 15, 3, 182, 133, 140, 455, 1863, 1836, '../../assets/fotoPadrao.png', 'No'),
(204, 'Pineco', 204, 2, 1, 1, NULL, 4, 108, 146, 100, 354, 1045, 1030, '../../assets/fotoPadrao.png', 'No'),
(205, 'Forretress', 205, 2, 2, 1, 17, 4, 161, 242, 150, 553, 2263, 2231, '../../assets/fotoPadrao.png', 'No'),
(206, 'Dunsparce', 206, 2, 1, 13, NULL, 3, 131, 131, 200, 462, 1615, 1592, '../../assets/fotoPadrao.png', 'No'),
(207, 'Gligar', 207, 2, 1, 11, 8, 7, 143, 204, 130, 477, 1758, 1733, '../../assets/fotoPadrao.png', 'No'),
(208, '17ix', 208, 2, 2, 17, 11, 5, 148, 333, 150, 631, 2439, 2404, '../../assets/fotoPadrao.png', 'No'),
(209, 'Snubbull', 209, 2, 1, 5, NULL, 1, 137, 89, 120, 346, 1124, 1108, '../../assets/fotoPadrao.png', 'No'),
(210, 'Granbull', 210, 2, 2, 5, NULL, 1, 212, 137, 180, 529, 2440, 2406, '../../assets/fotoPadrao.png', 'No'),
(211, 'Qwilfish', 211, 2, 1, 18, 14, 4, 184, 148, 130, 462, 1910, 1883, '../../assets/fotoPadrao.png', 'No'),
(212, 'Scizor', 212, 2, 2, 1, 17, 4, 236, 191, 140, 567, 2801, 2761, '../../assets/fotoPadrao.png', 'No'),
(213, 'Shuckle', 213, 2, 1, 1, 16, 4, 17, 396, 40, 453, 300, 296, '../../assets/fotoPadrao.png', 'No'),
(214, 'Heracross', 214, 2, 1, 1, 6, 4, 234, 189, 160, 583, 2938, 2896, '../../assets/fotoPadrao.png', 'No'),
(215, 'Sneasel', 215, 2, 1, 2, 12, 2, 189, 157, 110, 456, 1868, 1841, '../../assets/fotoPadrao.png', 'No'),
(216, 'Teddiursa', 216, 2, 1, 13, NULL, 3, 142, 93, 120, 355, 1184, 1167, '../../assets/fotoPadrao.png', 'No'),
(217, 'Ursaring', 217, 2, 2, 13, NULL, 3, 236, 144, 180, 560, 2760, 2720, '../../assets/fotoPadrao.png', 'No'),
(218, 'Slugma', 218, 2, 1, 7, NULL, 7, 118, 71, 80, 269, 750, 740, '../../assets/fotoPadrao.png', 'No'),
(219, 'Magcargo', 219, 2, 2, 7, 16, 7, 139, 209, 100, 448, 1543, 1521, '../../assets/fotoPadrao.png', 'No'),
(220, 'Swinub', 220, 2, 1, 12, 11, 5, 90, 74, 100, 264, 663, 653, '../../assets/fotoPadrao.png', 'No'),
(221, 'Piloswine', 221, 2, 2, 12, 11, 5, 181, 147, 200, 528, 2284, 2252, '../../assets/fotoPadrao.png', 'No'),
(222, 'Corsola', 222, 2, 1, 18, 16, 4, 118, 156, 110, 384, 1214, 1197, '../../assets/fotoPadrao.png', 'No'),
(223, 'Remoraid', 223, 2, 1, 18, NULL, 4, 127, 69, 70, 266, 749, 738, '../../assets/fotoPadrao.png', 'No'),
(224, 'Octillery', 224, 2, 2, 18, NULL, 4, 197, 141, 150, 488, 2124, 2094, '../../assets/fotoPadrao.png', 'No'),
(225, 'Delibird', 225, 2, 1, 12, 8, 5, 128, 90, 90, 308, 937, 924, '../../assets/fotoPadrao.png', 'No'),
(226, 'Mantine', 226, 2, 1, 18, 8, 4, 148, 260, 130, 538, 2032, 2003, '../../assets/fotoPadrao.png', 'No'),
(227, 'Skarmory', 227, 2, 1, 17, 8, 5, 148, 260, 130, 538, 2032, 2003, '../../assets/fotoPadrao.png', 'No'),
(228, 'Houndour', 228, 2, 1, 2, 7, 2, 152, 93, 90, 335, 1110, 1094, '../../assets/fotoPadrao.png', 'No'),
(229, 'Houndoom', 229, 2, 2, 2, 7, 2, 224, 159, 150, 533, 2529, 2493, '../../assets/fotoPadrao.png', 'No'),
(230, 'Kingdra', 230, 2, 3, 18, 3, 4, 194, 194, 150, 538, 2424, 2389, '../../assets/fotoPadrao.png', 'No'),
(231, 'Phanpy', 231, 2, 1, 11, NULL, 7, 107, 107, 180, 394, 1175, 1158, '../../assets/fotoPadrao.png', 'No'),
(232, 'Donphan', 232, 2, 2, 11, NULL, 7, 214, 214, 180, 608, 3022, 2979, '../../assets/fotoPadrao.png', 'No'),
(233, 'Porygon2', 233, 2, 2, 13, NULL, 3, 198, 183, 170, 551, 2546, 2509, '../../assets/fotoPadrao.png', 'No'),
(234, 'Stantler', 234, 2, 1, 13, NULL, 3, 192, 132, 146, 470, 1988, 1960, '../../assets/fotoPadrao.png', 'No'),
(235, 'Smeargle', 235, 2, 1, 13, NULL, 3, 40, 88, 110, 238, 389, 384, '../../assets/fotoPadrao.png', 'No'),
(236, 'Tyrogue', 236, 2, 0, 6, NULL, 1, 64, 64, 70, 198, 404, 398, '../../assets/fotoPadrao.png', 'No'),
(237, 'Hitmontop', 237, 2, 1, 6, NULL, 1, 173, 214, 100, 487, 1905, 1878, '../../assets/fotoPadrao.png', 'No'),
(238, 'Smoochum', 238, 2, 0, 12, 15, 5, 153, 116, 90, 359, 1230, 1213, '../../assets/fotoPadrao.png', 'No'),
(239, 'Elekid', 239, 2, 0, 4, NULL, 4, 135, 110, 90, 335, 1073, 1057, '../../assets/fotoPadrao.png', 'No'),
(240, 'Magby', 240, 2, 0, 7, NULL, 7, 151, 108, 90, 349, 1178, 1161, '../../assets/fotoPadrao.png', 'No'),
(241, 'Miltank', 241, 2, 1, 13, NULL, 3, 157, 211, 190, 558, 2312, 2279, '../../assets/fotoPadrao.png', 'No'),
(242, 'Blissey', 242, 2, 2, 13, NULL, 3, 129, 229, 510, 868, 3219, 3173, '../../assets/fotoPadrao.png', 'No'),
(243, 'Raikou', 243, 2, 1, 4, NULL, 4, 241, 210, 180, 631, 3349, 3301, '../../assets/fotoPadrao.png', 'Yes'),
(244, 'Entei', 244, 2, 1, 7, NULL, 7, 235, 176, 230, 641, 3377, 3329, '../../assets/fotoPadrao.png', 'Yes'),
(245, 'Suicune', 245, 2, 1, 18, NULL, 4, 180, 235, 200, 615, 2823, 2783, '../../assets/fotoPadrao.png', 'Yes'),
(246, 'Larvitar', 246, 2, 1, 16, 11, 3, 115, 93, 100, 308, 904, 891, '../../assets/fotoPadrao.png', 'No'),
(247, 'Pupitar', 247, 2, 2, 16, 11, 3, 155, 133, 140, 428, 1608, 1585, '../../assets/fotoPadrao.png', 'No'),
(248, 'Tyranitar', 248, 2, 3, 16, 2, 3, 251, 212, 200, 663, 3670, 3617, '../../assets/fotoPadrao.png', 'No'),
(249, 'Lugia', 249, 2, 1, 15, 8, 8, 193, 323, 212, 728, 3598, 3547, '../../assets/fotoPadrao.png', 'Yes'),
(250, 'Ho Oh', 250, 2, 1, 7, 8, 7, 239, 274, 193, 706, 3889, 3833, '../../assets/fotoPadrao.png', 'Yes'),
(251, 'Celebi', 251, 2, 1, 15, 10, 8, 210, 210, 200, 620, 3090, 3046, '../../assets/fotoPadrao.png', '2'),
(252, 'Treecko', 252, 3, 1, 10, NULL, 7, 124, 104, 80, 308, 923, 909, '../../assets/fotoPadrao.png', 'No'),
(253, 'Grovyle', 253, 3, 2, 10, NULL, 7, 172, 130, 100, 402, 1508, 1486, '../../assets/fotoPadrao.png', 'No'),
(254, 'Sceptile', 254, 3, 3, 10, NULL, 7, 223, 180, 140, 543, 2584, 2547, '../../assets/fotoPadrao.png', 'No'),
(255, 'Torchic', 255, 3, 1, 7, NULL, 7, 130, 92, 90, 312, 959, 946, '../../assets/fotoPadrao.png', 'No'),
(256, 'Combusken', 256, 3, 2, 7, 6, 7, 163, 115, 120, 398, 1472, 1451, '../../assets/fotoPadrao.png', 'No'),
(257, 'Blaziken', 257, 3, 3, 7, 6, 7, 240, 141, 160, 541, 2631, 2593, '../../assets/fotoPadrao.png', 'No'),
(258, 'Mudkip', 258, 3, 1, 18, NULL, 4, 126, 93, 100, 319, 981, 967, '../../assets/fotoPadrao.png', 'No'),
(259, 'Marshtomp', 259, 3, 2, 18, 11, 4, 156, 133, 140, 429, 1617, 1594, '../../assets/fotoPadrao.png', 'No'),
(260, 'Swampert', 260, 3, 3, 18, 11, 4, 208, 175, 200, 583, 2815, 2774, '../../assets/fotoPadrao.png', 'No'),
(261, 'Poochyena', 261, 3, 1, 2, NULL, 2, 96, 63, 70, 229, 564, 556, '../../assets/fotoPadrao.png', 'No'),
(262, 'Mightyena', 262, 3, 2, 2, NULL, 2, 171, 137, 140, 448, 1783, 1757, '../../assets/fotoPadrao.png', 'No'),
(263, 'Zigzagoon', 263, 3, 1, 13, NULL, 3, 58, 80, 76, 214, 423, 417, '../../assets/fotoPadrao.png', 'No'),
(264, 'Linoone', 264, 3, 2, 13, NULL, 3, 142, 128, 156, 426, 1533, 1511, '../../assets/fotoPadrao.png', 'No'),
(265, 'Wurmple', 265, 3, 1, 1, NULL, 4, 75, 61, 90, 226, 502, 494, '../../assets/fotoPadrao.png', 'No'),
(266, 'Silcoon', 266, 3, 2, 1, NULL, 4, 60, 91, 100, 251, 517, 509, '../../assets/fotoPadrao.png', 'No'),
(267, 'Beautifly', 267, 3, 3, 1, 8, 4, 189, 98, 120, 407, 1573, 1551, '../../assets/fotoPadrao.png', 'No'),
(268, 'Cascoon', 268, 3, 2, 1, NULL, 4, 60, 91, 100, 251, 517, 509, '../../assets/fotoPadrao.png', 'No'),
(269, 'Dustox', 269, 3, 3, 1, 14, 4, 98, 172, 120, 390, 1121, 1105, '../../assets/fotoPadrao.png', 'No'),
(270, 'Lotad', 270, 3, 1, 18, 10, 4, 71, 86, 80, 237, 526, 518, '../../assets/fotoPadrao.png', 'No'),
(271, 'Lombre', 271, 3, 2, 18, 10, 4, 112, 128, 120, 360, 1102, 1086, '../../assets/fotoPadrao.png', 'No'),
(272, 'Ludicolo', 272, 3, 3, 18, 10, 4, 173, 191, 160, 524, 2229, 2197, '../../assets/fotoPadrao.png', 'No'),
(273, 'Seedot', 273, 3, 1, 10, NULL, 7, 71, 86, 80, 237, 526, 518, '../../assets/fotoPadrao.png', 'No'),
(274, 'Nuzleaf', 274, 3, 2, 10, 2, 7, 134, 78, 140, 352, 1117, 1101, '../../assets/fotoPadrao.png', 'No'),
(275, 'Shiftry', 275, 3, 3, 10, 2, 7, 200, 121, 180, 501, 2186, 2155, '../../assets/fotoPadrao.png', 'No'),
(276, 'Taillow', 276, 3, 1, 13, 8, 3, 106, 61, 80, 247, 642, 632, '../../assets/fotoPadrao.png', 'No'),
(277, 'Swellow', 277, 3, 2, 13, 8, 3, 185, 130, 120, 435, 1747, 1722, '../../assets/fotoPadrao.png', 'No'),
(278, 'Wingull', 278, 3, 1, 18, 8, 4, 106, 61, 80, 247, 642, 632, '../../assets/fotoPadrao.png', 'No'),
(279, 'Pelipper', 279, 3, 2, 18, 8, 4, 175, 189, 120, 484, 1969, 1941, '../../assets/fotoPadrao.png', 'No'),
(280, 'Ralts', 280, 3, 1, 15, 5, 8, 79, 63, 56, 198, 436, 430, '../../assets/fotoPadrao.png', 'No'),
(281, 'Kirlia', 281, 3, 2, 15, 5, 8, 117, 100, 76, 293, 843, 831, '../../assets/fotoPadrao.png', 'No'),
(282, 'Gardevoir', 282, 3, 3, 15, 5, 8, 237, 220, 136, 593, 2964, 2922, '../../assets/fotoPadrao.png', 'No'),
(283, 'Surskit', 283, 3, 1, 1, 18, 4, 93, 97, 80, 270, 695, 685, '../../assets/fotoPadrao.png', 'No'),
(284, 'Masquerain', 284, 3, 2, 1, 8, 4, 192, 161, 140, 493, 2135, 2104, '../../assets/fotoPadrao.png', 'No'),
(285, 'Shroomish', 285, 3, 1, 10, NULL, 7, 74, 110, 120, 304, 722, 711, '../../assets/fotoPadrao.png', 'No'),
(286, 'Breloom', 286, 3, 2, 10, 6, 7, 241, 153, 120, 514, 2407, 2373, '../../assets/fotoPadrao.png', 'No'),
(287, 'Slakoth', 287, 3, 1, 13, NULL, 3, 104, 104, 120, 328, 942, 928, '../../assets/fotoPadrao.png', 'No'),
(288, 'Vigoroth', 288, 3, 2, 13, NULL, 3, 159, 159, 160, 478, 1896, 1869, '../../assets/fotoPadrao.png', 'No'),
(289, 'Slaking', 289, 3, 3, 13, NULL, 3, 290, 183, 273, 746, 4548, 4484, '../../assets/fotoPadrao.png', 'No'),
(290, 'Nincada', 290, 3, 1, 1, 11, 4, 80, 153, 62, 295, 674, 665, '../../assets/fotoPadrao.png', 'No'),
(291, 'Ninjask', 291, 3, 2, 1, 8, 4, 199, 116, 122, 437, 1790, 1765, '../../assets/fotoPadrao.png', 'No'),
(292, 'Shedinja', 292, 3, 3, 1, 9, 4, 153, 80, 2, 235, 421, 415, '../../assets/fotoPadrao.png', 'No'),
(293, 'Whismur', 293, 3, 1, 13, NULL, 3, 92, 42, 128, 262, 603, 594, '../../assets/fotoPadrao.png', 'No'),
(294, 'Loudred', 294, 3, 2, 13, NULL, 3, 134, 81, 168, 383, 1233, 1215, '../../assets/fotoPadrao.png', 'No'),
(295, 'Exploud', 295, 3, 3, 13, NULL, 3, 179, 142, 208, 529, 2267, 2234, '../../assets/fotoPadrao.png', 'No'),
(296, 'Makuhita', 296, 3, 1, 6, NULL, 1, 99, 54, 144, 297, 745, 735, '../../assets/fotoPadrao.png', 'No'),
(297, 'Hariyama', 297, 3, 2, 6, NULL, 1, 209, 114, 288, 611, 2765, 2726, '../../assets/fotoPadrao.png', 'No'),
(298, 'Azurill', 298, 3, 0, 13, 5, 3, 36, 71, 100, 207, 316, 312, '../../assets/fotoPadrao.png', 'No'),
(299, 'Nosepass', 299, 3, 1, 16, NULL, 3, 82, 236, 60, 378, 831, 819, '../../assets/fotoPadrao.png', 'No'),
(300, 'Skitty', 300, 3, 1, 13, NULL, 3, 84, 84, 100, 268, 659, 650, '../../assets/fotoPadrao.png', 'No'),
(301, 'Delcatty', 301, 3, 2, 13, NULL, 3, 132, 132, 140, 404, 1385, 1366, '../../assets/fotoPadrao.png', 'No'),
(302, 'Sableye', 302, 3, 1, 2, 9, 2, 141, 141, 100, 382, 1305, 1286, '../../assets/fotoPadrao.png', 'No'),
(303, 'Mawile', 303, 3, 1, 17, 5, 5, 155, 155, 100, 410, 1484, 1463, '../../assets/fotoPadrao.png', 'No'),
(304, 'Aron', 304, 3, 1, 17, 16, 5, 121, 168, 100, 389, 1232, 1214, '../../assets/fotoPadrao.png', 'No'),
(305, 'Lairon', 305, 3, 2, 17, 16, 5, 158, 240, 120, 518, 2004, 1976, '../../assets/fotoPadrao.png', 'No'),
(306, 'Aggron', 306, 3, 3, 17, 16, 5, 198, 314, 140, 652, 3004, 2961, '../../assets/fotoPadrao.png', 'No'),
(307, 'Meditete', 307, 307, 307, 16, 16, 2, 78, 107, 60, 245, 555, 547, '../../assets/fotoPadrao.png', 'Yes'),
(309, 'Electrike', 309, 3, 1, 4, NULL, 4, 123, 78, 80, 281, 810, 798, '../../assets/fotoPadrao.png', 'No'),
(310, 'Manectric', 310, 3, 2, 4, NULL, 4, 215, 127, 140, 482, 2131, 2100, '../../assets/fotoPadrao.png', 'No'),
(311, 'Plusle', 311, 3, 1, 4, NULL, 4, 167, 147, 120, 434, 1681, 1657, '../../assets/fotoPadrao.png', 'No'),
(312, 'Minun', 312, 3, 1, 4, NULL, 4, 147, 167, 120, 434, 1585, 1563, '../../assets/fotoPadrao.png', 'No'),
(313, 'Volbeat', 313, 3, 1, 1, NULL, 4, 143, 171, 130, 444, 1620, 1597, '../../assets/fotoPadrao.png', 'No'),
(314, 'Illumise', 314, 3, 2, 1, NULL, 4, 143, 171, 130, 444, 1620, 1597, '../../assets/fotoPadrao.png', 'No'),
(315, 'Roselia', 315, 3, 1, 10, 14, 7, 186, 148, 100, 434, 1718, 1694, '../../assets/fotoPadrao.png', 'No'),
(316, 'Gulpin', 316, 3, 1, 14, NULL, 1, 80, 99, 140, 319, 788, 777, '../../assets/fotoPadrao.png', 'No'),
(317, 'Swalot', 317, 3, 2, 14, NULL, 1, 140, 159, 200, 499, 1872, 1845, '../../assets/fotoPadrao.png', 'No'),
(318, 'Carvanha', 318, 3, 1, 18, 2, 4, 171, 39, 90, 300, 874, 862, '../../assets/fotoPadrao.png', 'No'),
(319, 'Sharpedo', 319, 3, 1, 18, 2, 4, 243, 83, 140, 466, 1986, 1957, '../../assets/fotoPadrao.png', 'No'),
(320, 'Wailmer', 320, 3, 1, 18, NULL, 4, 136, 68, 260, 464, 1424, 1404, '../../assets/fotoPadrao.png', 'No'),
(321, 'Wailord', 321, 3, 2, 18, NULL, 4, 175, 87, 340, 602, 2258, 2225, '../../assets/fotoPadrao.png', 'No'),
(322, 'Numel', 322, 3, 1, 7, 11, 7, 119, 82, 120, 321, 957, 944, '../../assets/fotoPadrao.png', 'No'),
(323, 'Camerupt', 323, 3, 2, 7, 11, 7, 194, 139, 140, 473, 2016, 1987, '../../assets/fotoPadrao.png', 'No'),
(324, 'Torkoal', 324, 3, 1, 7, NULL, 7, 151, 234, 140, 525, 2036, 2007, '../../assets/fotoPadrao.png', 'No'),
(325, 'Spoink', 325, 3, 1, 15, NULL, 8, 125, 145, 120, 390, 1285, 1266, '../../assets/fotoPadrao.png', 'No'),
(326, 'Grumpig', 326, 3, 2, 15, NULL, 8, 171, 211, 160, 542, 2310, 2277, '../../assets/fotoPadrao.png', 'No'),
(327, 'Spinda', 327, 3, 1, 13, NULL, 3, 116, 116, 120, 352, 1088, 1072, '../../assets/fotoPadrao.png', 'No'),
(328, 'Trapinch', 328, 3, 1, 11, NULL, 7, 162, 78, 90, 330, 1092, 1076, '../../assets/fotoPadrao.png', 'No'),
(329, 'Vibrava', 329, 3, 2, 11, 3, 7, 134, 99, 100, 333, 1065, 1050, '../../assets/fotoPadrao.png', 'No'),
(330, 'Flygon', 330, 3, 3, 11, 3, 7, 205, 168, 160, 533, 2458, 2423, '../../assets/fotoPadrao.png', 'No'),
(331, 'Cacnea', 331, 3, 1, 10, NULL, 7, 156, 74, 100, 330, 1080, 1065, '../../assets/fotoPadrao.png', 'No'),
(332, 'Cacturne', 332, 3, 2, 10, 2, 7, 221, 115, 140, 476, 2092, 2062, '../../assets/fotoPadrao.png', 'No'),
(333, 'Swablu', 333, 3, 1, 13, 8, 3, 76, 139, 90, 305, 722, 712, '../../assets/fotoPadrao.png', 'No'),
(334, 'Altaria', 334, 3, 2, 3, 8, 8, 141, 208, 150, 499, 1868, 1842, '../../assets/fotoPadrao.png', 'No'),
(335, 'Zangoose', 335, 3, 1, 13, NULL, 3, 222, 124, 146, 492, 2214, 2182, '../../assets/fotoPadrao.png', 'No'),
(336, 'Seviper', 336, 3, 1, 14, NULL, 1, 196, 118, 146, 460, 1928, 1900, '../../assets/fotoPadrao.png', 'No'),
(337, 'Lunatone', 337, 3, 1, 16, 15, 3, 178, 163, 180, 521, 2245, 2213, '../../assets/fotoPadrao.png', 'No'),
(338, 'Sol16', 338, 3, 1, 16, 15, 3, 178, 163, 180, 521, 2245, 2213, '../../assets/fotoPadrao.png', 'No'),
(339, 'Barboach', 339, 3, 1, 18, 11, 4, 93, 83, 100, 276, 716, 705, '../../assets/fotoPadrao.png', 'No'),
(340, 'Whiscash', 340, 3, 2, 18, 11, 4, 151, 142, 220, 513, 1991, 1963, '../../assets/fotoPadrao.png', 'No'),
(341, 'Corphish', 341, 3, 1, 18, NULL, 4, 141, 113, 86, 340, 1107, 1092, '../../assets/fotoPadrao.png', 'No'),
(342, 'Crawdaunt', 342, 3, 2, 18, 2, 4, 224, 156, 126, 506, 2317, 2284, '../../assets/fotoPadrao.png', 'No'),
(343, 'Baltoy', 343, 3, 1, 11, 15, 7, 77, 131, 80, 288, 676, 667, '../../assets/fotoPadrao.png', 'No'),
(344, 'Claydol', 344, 3, 2, 11, 15, 7, 140, 236, 120, 496, 1782, 1756, '../../assets/fotoPadrao.png', 'No'),
(345, 'Lileep', 345, 3, 1, 16, 10, 3, 105, 154, 132, 391, 1181, 1164, '../../assets/fotoPadrao.png', 'No'),
(346, 'Cradily', 346, 3, 2, 16, 10, 3, 152, 198, 172, 522, 2081, 2051, '../../assets/fotoPadrao.png', 'No'),
(347, 'Anorith', 347, 3, 1, 16, 1, 3, 176, 100, 90, 366, 1310, 1292, '../../assets/fotoPadrao.png', 'No'),
(348, 'Armaldo', 348, 3, 2, 16, 1, 3, 222, 183, 150, 555, 2675, 2637, '../../assets/fotoPadrao.png', 'No'),
(349, 'Feebas', 349, 3, 1, 18, NULL, 4, 29, 102, 40, 171, 220, 217, '../../assets/fotoPadrao.png', 'No'),
(350, 'Milotic', 350, 3, 2, 18, NULL, 4, 192, 242, 190, 624, 2967, 2925, '../../assets/fotoPadrao.png', 'No'),
(351, 'Castform', 351, 3, 1, 13, NULL, 3, 139, 139, 140, 418, 1486, 1464, '../../assets/fotoPadrao.png', 'No'),
(352, 'Kecleon', 352, 3, 1, 13, NULL, 3, 161, 212, 120, 493, 1924, 1896, '../../assets/fotoPadrao.png', 'No'),
(353, 'Shuppet', 353, 3, 1, 9, NULL, 2, 138, 66, 88, 292, 872, 860, '../../assets/fotoPadrao.png', 'No'),
(354, 'Banette', 354, 3, 2, 9, NULL, 2, 218, 127, 128, 473, 2073, 2044, '../../assets/fotoPadrao.png', 'No'),
(355, 'Duskull', 355, 3, 1, 9, NULL, 2, 70, 162, 40, 272, 523, 516, '../../assets/fotoPadrao.png', 'No'),
(356, 'Dusclops', 356, 3, 2, 9, NULL, 2, 124, 234, 80, 438, 1335, 1316, '../../assets/fotoPadrao.png', 'No'),
(357, 'Tropius', 357, 3, 1, 10, 8, 7, 136, 165, 198, 499, 1846, 1820, '../../assets/fotoPadrao.png', 'No'),
(358, 'Chimecho', 358, 3, 1, 15, NULL, 8, 175, 174, 150, 499, 2095, 2065, '../../assets/fotoPadrao.png', 'No'),
(359, 'Absol', 359, 3, 1, 2, NULL, 2, 246, 120, 130, 496, 2280, 2248, '../../assets/fotoPadrao.png', 'No'),
(360, 'Wynaut', 360, 3, 0, 15, NULL, 8, 41, 86, 190, 317, 503, 496, '../../assets/fotoPadrao.png', 'No'),
(361, 'Snorunt', 361, 3, 1, 12, NULL, 5, 95, 95, 100, 290, 772, 761, '../../assets/fotoPadrao.png', 'No'),
(362, 'Glalie', 362, 3, 2, 12, NULL, 5, 162, 162, 160, 484, 1945, 1917, '../../assets/fotoPadrao.png', 'No'),
(363, 'Spheal', 363, 3, 1, 12, 18, 5, 95, 90, 140, 325, 876, 863, '../../assets/fotoPadrao.png', 'No'),
(364, 'Sealeo', 364, 3, 2, 12, 18, 5, 137, 132, 180, 449, 1607, 1584, '../../assets/fotoPadrao.png', 'No'),
(365, 'Walrein', 365, 3, 3, 12, 18, 5, 182, 176, 220, 578, 2606, 2569, '../../assets/fotoPadrao.png', 'No'),
(366, 'Clamperl', 366, 3, 1, 18, NULL, 4, 133, 149, 70, 352, 1091, 1075, '../../assets/fotoPadrao.png', 'No'),
(367, 'Huntail', 367, 3, 2, 18, NULL, 4, 197, 194, 110, 501, 2140, 2109, '../../assets/fotoPadrao.png', 'No'),
(368, 'Gorebyss', 368, 3, 2, 18, NULL, 4, 211, 194, 110, 515, 2281, 2248, '../../assets/fotoPadrao.png', 'No'),
(369, 'Relicanth', 369, 3, 1, 18, 16, 4, 162, 234, 200, 596, 2557, 2521, '../../assets/fotoPadrao.png', 'No'),
(370, 'Luvdisc', 370, 3, 1, 18, NULL, 4, 81, 134, 86, 301, 735, 725, '../../assets/fotoPadrao.png', 'No'),
(371, 'Bagon', 371, 3, 1, 3, NULL, 8, 134, 107, 90, 331, 1053, 1038, '../../assets/fotoPadrao.png', 'No'),
(372, 'Shelgon', 372, 3, 2, 3, NULL, 8, 172, 179, 130, 481, 1958, 1930, '../../assets/fotoPadrao.png', 'No'),
(373, 'Salamence', 373, 3, 3, 3, 8, 8, 277, 168, 190, 635, 3532, 3481, '../../assets/fotoPadrao.png', 'No'),
(374, 'Beldum', 374, 3, 1, 17, 15, 5, 96, 141, 80, 317, 843, 831, '../../assets/fotoPadrao.png', 'No'),
(375, 'Metang', 375, 3, 2, 17, 15, 5, 138, 185, 120, 443, 1570, 1547, '../../assets/fotoPadrao.png', 'No'),
(376, 'Metagross', 376, 3, 3, 17, 15, 5, 257, 248, 160, 665, 3644, 3592, '../../assets/fotoPadrao.png', 'No'),
(377, 'Regi16', 377, 3, 1, 16, NULL, 3, 179, 356, 160, 695, 3087, 3043, '../../assets/fotoPadrao.png', 'Yes'),
(378, 'Reg12', 378, 3, 1, 12, NULL, 5, 179, 356, 160, 695, 3087, 3043, '../../assets/fotoPadrao.png', 'Yes'),
(379, 'Regi17', 379, 3, 1, 17, NULL, 5, 143, 285, 160, 588, 2261, 2228, '../../assets/fotoPadrao.png', 'Yes'),
(380, 'Latias', 380, 3, 1, 3, 15, 8, 228, 268, 160, 656, 3377, 3329, '../../assets/fotoPadrao.png', 'Yes'),
(381, 'Latios', 381, 3, 1, 3, 15, 8, 268, 228, 160, 656, 3644, 3592, '../../assets/fotoPadrao.png', 'Yes'),
(382, 'Kyogre', 382, 3, 1, 18, NULL, 4, 270, 251, 182, 703, 4074, 4016, '../../assets/fotoPadrao.png', 'Yes'),
(383, 'Groudon', 383, 3, 1, 11, NULL, 7, 270, 251, 182, 703, 4074, 4016, '../../assets/fotoPadrao.png', 'Yes'),
(384, 'Rayquaza', 384, 3, 1, 3, 8, 8, 284, 170, 191, 645, 3645, 3593, '../../assets/fotoPadrao.png', 'Yes'),
(385, 'Jirachi', 385, 3, 1, 17, 15, 5, 210, 210, 200, 620, 3090, 3046, '../../assets/fotoPadrao.png', '2'),
(386, 'Deoxys Defense', 386, 3, 1, 15, NULL, 8, 144, 330, 100, 574, 1978, 1949, '../../assets/fotoPadrao.png', '2'),
(387, 'Deoxys 13', 386, 3, 1, 15, NULL, 8, 345, 115, 100, 560, 2749, 2709, '../../assets/fotoPadrao.png', '2'),
(388, 'Deoxys Attack', 386, 3, 1, 15, NULL, 8, 414, 46, 100, 560, 2244, 2212, '../../assets/fotoPadrao.png', '2'),
(389, 'Deoxys Speed', 386, 3, 1, 15, NULL, 8, 230, 218, 100, 548, 2504, 2469, '../../assets/fotoPadrao.png', '2'),
(390, 'Turtwig', 387, 4, 1, 10, NULL, 7, 119, 115, 110, 344, 1066, 1051, '../../assets/fotoPadrao.png', 'No'),
(391, 'Grotle', 388, 4, 2, 10, NULL, 7, 157, 152, 150, 459, 1783, 1757, '../../assets/fotoPadrao.png', 'No'),
(392, 'Torterra', 389, 4, 3, 10, 11, 7, 202, 197, 190, 589, 2825, 2785, '../../assets/fotoPadrao.png', 'No'),
(393, 'Chimchar', 390, 4, 1, 7, NULL, 7, 113, 86, 88, 287, 815, 803, '../../assets/fotoPadrao.png', 'No'),
(394, 'Monferno', 391, 4, 2, 7, 6, 7, 158, 105, 128, 391, 1415, 1395, '../../assets/fotoPadrao.png', 'No'),
(395, 'Infernape', 392, 4, 3, 7, 6, 7, 222, 151, 152, 525, 2464, 2429, '../../assets/fotoPadrao.png', 'No'),
(396, 'Piplup', 393, 4, 1, 18, NULL, 4, 112, 103, 106, 321, 947, 934, '../../assets/fotoPadrao.png', 'No'),
(397, 'Prinplup', 394, 4, 2, 18, NULL, 4, 150, 143, 128, 421, 1549, 1526, '../../assets/fotoPadrao.png', 'No'),
(398, 'Empoleon', 395, 4, 3, 18, 17, 4, 210, 193, 168, 571, 2741, 2702, '../../assets/fotoPadrao.png', 'No'),
(399, 'Starly', 396, 4, 1, 13, 8, 3, 101, 58, 80, 239, 603, 594, '../../assets/fotoPadrao.png', 'No'),
(400, 'Staravia', 397, 4, 2, 13, 8, 3, 142, 99, 110, 351, 1170, 1153, '../../assets/fotoPadrao.png', 'No'),
(401, 'Staraptor', 398, 4, 3, 13, 8, 3, 234, 145, 170, 549, 2675, 2637, '../../assets/fotoPadrao.png', 'No'),
(402, 'Bidoof', 399, 4, 1, 13, NULL, 3, 80, 73, 118, 271, 641, 632, '../../assets/fotoPadrao.png', 'No'),
(403, 'Bibarel', 400, 4, 2, 13, 18, 3, 162, 119, 158, 439, 1683, 1659, '../../assets/fotoPadrao.png', 'No'),
(404, 'Kricketot', 401, 4, 1, 1, NULL, 4, 45, 74, 74, 193, 333, 328, '../../assets/fotoPadrao.png', 'No'),
(405, 'Kricketune', 402, 4, 2, 1, NULL, 4, 160, 100, 154, 414, 1523, 1501, '../../assets/fotoPadrao.png', 'No'),
(406, 'Shinx', 403, 4, 1, 4, NULL, 4, 117, 64, 90, 271, 750, 740, '../../assets/fotoPadrao.png', 'No'),
(407, 'Luxio', 404, 4, 2, 4, NULL, 4, 159, 95, 120, 374, 1324, 1305, '../../assets/fotoPadrao.png', 'No'),
(408, 'Luxray', 405, 4, 3, 4, NULL, 4, 232, 156, 160, 548, 2668, 2630, '../../assets/fotoPadrao.png', 'No'),
(409, 'Budew', 406, 4, 0, 10, 14, 7, 91, 126, 80, 297, 766, 755, '../../assets/fotoPadrao.png', 'No'),
(410, 'Roserade', 407, 4, 2, 10, 14, 7, 243, 206, 120, 569, 2783, 2743, '../../assets/fotoPadrao.png', 'No'),
(411, 'Cranidos', 408, 4, 1, 16, NULL, 3, 218, 75, 134, 427, 1685, 1661, '../../assets/fotoPadrao.png', 'No'),
(412, 'Rampardos', 409, 4, 2, 16, NULL, 3, 295, 114, 194, 603, 3179, 3133, '../../assets/fotoPadrao.png', 'No'),
(413, 'Shieldon', 410, 4, 1, 16, 17, 3, 76, 208, 60, 344, 735, 724, '../../assets/fotoPadrao.png', 'No'),
(414, 'Bastiodon', 411, 4, 2, 16, 17, 3, 94, 299, 120, 513, 1401, 1381, '../../assets/fotoPadrao.png', 'No'),
(415, 'Burmy (Plant Cloak)', 412, 4, 1, 1, NULL, 4, 53, 83, 80, 216, 409, 403, '../../assets/fotoPadrao.png', 'No'),
(417, 'Meu Pokemon Lendario :)', 420, 1, 1, 13, 12, 5, 30, 50, 80, 160, 2300, 2800, '../../assets/fotoPadrao.png', 'Yes'),
(418, 'Meu novo Pokemon FInal', 421, 1, 1, 5, 4, 5, 50, 50, 100, 200, 2000, 2000, '../../assets/fotoPadrao.png', 'No');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbtipopokemon`
--

CREATE TABLE `tbtipopokemon` (
  `codTipoPokemon` int(11) NOT NULL,
  `tipoPokemon` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbtipopokemon`
--

INSERT INTO `tbtipopokemon` (`codTipoPokemon`, `tipoPokemon`) VALUES
(1, 'bug'),
(2, 'dark'),
(3, 'dragon'),
(4, 'electric'),
(5, 'fairy'),
(6, 'fighting'),
(7, 'fire'),
(8, 'flying'),
(9, 'ghost'),
(10, 'grass'),
(11, 'ground'),
(12, 'ice'),
(13, 'normal'),
(14, 'poison'),
(15, 'psychic'),
(16, 'rock'),
(17, 'steel'),
(18, 'water');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbclima`
--
ALTER TABLE `tbclima`
  ADD PRIMARY KEY (`codClima`);

--
-- Indexes for table `tbpokemon`
--
ALTER TABLE `tbpokemon`
  ADD PRIMARY KEY (`codPokemon`),
  ADD KEY `tipoPokemon1` (`tipoPokemon1`),
  ADD KEY `tipoPokemon2` (`tipoPokemon2`),
  ADD KEY `clima` (`clima`);

--
-- Indexes for table `tbtipopokemon`
--
ALTER TABLE `tbtipopokemon`
  ADD PRIMARY KEY (`codTipoPokemon`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbclima`
--
ALTER TABLE `tbclima`
  MODIFY `codClima` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=833;

--
-- AUTO_INCREMENT for table `tbpokemon`
--
ALTER TABLE `tbpokemon`
  MODIFY `codPokemon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=419;

--
-- AUTO_INCREMENT for table `tbtipopokemon`
--
ALTER TABLE `tbtipopokemon`
  MODIFY `codTipoPokemon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=875;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `tbpokemon`
--
ALTER TABLE `tbpokemon`
  ADD CONSTRAINT `tbpokemon_ibfk_1` FOREIGN KEY (`tipoPokemon1`) REFERENCES `tbtipopokemon` (`codTipoPokemon`),
  ADD CONSTRAINT `tbpokemon_ibfk_2` FOREIGN KEY (`tipoPokemon2`) REFERENCES `tbtipopokemon` (`codTipoPokemon`),
  ADD CONSTRAINT `tbpokemon_ibfk_3` FOREIGN KEY (`clima`) REFERENCES `tbclima` (`codClima`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
