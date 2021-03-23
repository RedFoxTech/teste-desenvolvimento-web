-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pokemon
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `family_id` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `atk` int NOT NULL,
  `def` int NOT NULL,
  `sta` int NOT NULL,
  `sta_total` int NOT NULL,
  `evolution_stage` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemons`
--

LOCK TABLES `pokemons` WRITE;
/*!40000 ALTER TABLE `pokemons` DISABLE KEYS */;
INSERT INTO `pokemons` VALUES (1,'Bulbasaur',1,'grass',118,118,90,326,1,'2021-03-22 23:50:07','2021-03-22 23:50:07'),(2,'Ivysaur',1,'grass',151,151,120,422,2,'2021-03-23 00:03:34','2021-03-23 00:03:34'),(3,'Venusaur',1,'grass',198,198,160,556,3,'2021-03-23 00:04:56','2021-03-23 00:04:56'),(4,'Charmander',2,'Fire',116,96,78,290,1,'2021-03-23 00:06:16','2021-03-23 00:06:16'),(5,'Charmeleon',2,'Fire',158,129,116,403,2,'2021-03-23 00:07:26','2021-03-23 00:07:26'),(6,'Charizard',2,'Fire',223,176,156,555,3,'2021-03-23 00:08:22','2021-03-23 00:08:22'),(7,'Squirtle',3,'Water',94,122,88,304,1,'2021-03-23 00:09:00','2021-03-23 00:09:00'),(8,'Wartortle',3,'Water',126,155,118,399,2,'2021-03-23 00:09:36','2021-03-23 00:09:36'),(9,'Blastoise',3,'Water',223,176,156,555,3,'2021-03-23 00:10:09','2021-03-23 00:10:09'),(13,'Caterpie',4,'bug',55,62,90,556290,0,'2021-03-23 15:04:38','2021-03-23 15:04:38'),(14,'Metapod',4,'bug',45,94,100,239,2,'2021-03-23 15:17:04','2021-03-23 15:17:04');
/*!40000 ALTER TABLE `pokemons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-23 12:23:29
