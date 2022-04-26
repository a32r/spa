-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: ajax1
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ajax1`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ajax1` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `ajax1`;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `hash` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'Admin','4f3a9aef711d1260d939a0e892a677ecd54b18ecdcfb7d50fbb0371cefc580b3');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `send`
--

DROP TABLE IF EXISTS `send`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `send` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `send`
--

LOCK TABLES `send` WRITE;
/*!40000 ALTER TABLE `send` DISABLE KEYS */;
INSERT INTO `send` VALUES (1,'5','5','5'),(2,'1','1','1'),(3,'p','o','p');
/*!40000 ALTER TABLE `send` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Первый','first@mail.com','Первый пользователь'),(2,'Второй','second@mail.com','Второй пользователь'),(3,'Третий','third@mail.com','Третий пользователь'),(4,'Четвертый','fourth@mail.com','Четвертый пользователь'),(5,'Пятый','fiveth@mail.com','Пятый пользователь'),(6,'Шестой','sixth@mail.com','Шестой пользователь'),(7,'Седьмой','seventh@mail.com','Седьмой пользователь'),(8,'Восьмой','eighth@mail.com','Восьмой пользователь'),(9,'Девятый','nineth@mail.com','Девятый пользователь'),(10,'Десятый','tenth@mail.com','Десятый пользователь'),(11,'Одиннадцатый','eleventh@mail.com','Одиннадцатый пользователь'),(12,'Двенадцатый','twelfth@mail.com','Двенадцатый пользователь'),(13,'Тринадцатый','thirteenth@mail.com','Тринадцатый пользователь'),(14,'Четырнадцатый','fourteenth@mail.com','Четырнадцатый пользователь'),(15,'Пятнадцатый','fifteenth@mail.com','Пятнадцатый пользователь'),(16,'Шестнадцатый','sixteenth@mail.com','Шестнадцатый пользователь'),(17,'Семнадцатый','seventeenth@mail.com','Семнадцатый пользователь'),(18,'Восемнадцатый','eighteenth@mail.com','Восемнадцатый пользователь'),(19,'Девятнадцатый','nineteenth@mail.com','Девятнадцатый пользователь'),(20,'Двадцатый','twentieth@mail.com','Двадцатый пользователь'),(21,'Двадцать первый','twentyfirst@mail.com','Двадцать первый пользователь'),(22,'Двадцать второй','twentysecond@mail.com','Двадцать второй пользователь'),(23,'Двадцать третий','twentythird@mail.com','Двадцать третий пользователь');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27 22:51:42
