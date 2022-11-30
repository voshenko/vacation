-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vacations
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(45) NOT NULL,
  `description` varchar(800) NOT NULL,
  `image` varchar(500) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'Japan','Japan is the eleventh most populous country in the world','https://wallpaperaccess.com/full/43577.jpg','2022-12-05','2022-12-25',4950),(3,'Sinai Peninsula','Egypt has one of the longest histories of any country, tracing its heritage along','https://wallpaperaccess.com/full/202822.jpg','2021-09-17','2021-09-25',350),(4,'Dubai','In the eastern Arabian Peninsula on the coast of the Persian Gulf.','https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg','2022-08-21','2022-08-31',1260),(5,'Paris','The City of Paris is the centre of the Île-de-France region, or Paris Region.','https://lp-cms-production.imgix.net/image_browser/Effiel%20Tower%20-%20Paris%20Highlights.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850','2023-09-12','2023-09-17',620),(6,'China','China, officially the People\'s Republic of China (PRC) is a country in East Asia. ','https://wallpaperaccess.com/full/316996.jpg','2022-08-30','2022-09-04',1455),(7,'Turkey','Turkey (Turkish: Türkiye [ˈtyɾcije]), officially the Republic of Türkiye.','https://wallpaperaccess.com/full/35642.jpg','2023-09-04','2023-09-09',490),(8,'Uganda','Uganda is named after the Buganda kingdom, which encompasses a large portion','https://wallpaperaccess.com/full/1350278.jpg','2022-09-07','2022-09-15',1560),(9,'Maldives','Comprising a territory spanning roughly 90,000  including the sea','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3bFUbYdS6vc8PJ7ZDiENfQIyd95UEcmzHBRSqIuxdL6nPUhocO7vG-AQK3u1wS7lmwg&usqp=CAU','2022-11-04','2022-11-10',1100),(10,'Zanzibar','the Zanzibar Archipelago, together with Tanzania\'s Mafia Island','https://wallpaperaccess.com/full/2305759.jpg','2023-11-07','2023-11-15',790),(12,'Georgia','Georgia is a representative democracy governed as a unitary parliamentary republi','https://siteselection.com/issues/2020/nov/images/TbilisiCity.jpg','2022-12-28','2022-01-05',980),(24,'USA','The United States of America  commonly known as the United States (U.S. or US)','https://wallpaperaccess.com/full/329363.jpg','2022-11-25','2022-11-30',1500),(25,'Argentina','Argentina is a vast country located in the southern part of South America','https://wallpaperaccess.com/thumb/3333140.jpg','2025-01-01','2026-01-01',3000),(26,'Thailand','The Second best place in the World. is bordered to the north by Myanmar and Laos.','https://wallpaperaccess.com/thumb/150575.jpg','2022-12-01','2026-12-01',450);
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-30  2:07:49
