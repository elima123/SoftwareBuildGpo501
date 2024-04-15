-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: miprimeradb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `entregan`
--

DROP TABLE IF EXISTS `entregan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregan` (
  `Clave` bigint(20) DEFAULT NULL,
  `RFC` varchar(15) DEFAULT NULL,
  `Número` bigint(20) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Cantidad` bigint(20) DEFAULT NULL,
  KEY `Clave` (`Clave`),
  KEY `RFC` (`RFC`),
  KEY `Número` (`Número`),
  CONSTRAINT `entregan_ibfk_1` FOREIGN KEY (`Clave`) REFERENCES `materiales` (`Clave`),
  CONSTRAINT `entregan_ibfk_2` FOREIGN KEY (`RFC`) REFERENCES `proveedores` (`RFC`),
  CONSTRAINT `entregan_ibfk_3` FOREIGN KEY (`Número`) REFERENCES `proyectos` (`Número`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregan`
--

LOCK TABLES `entregan` WRITE;
/*!40000 ALTER TABLE `entregan` DISABLE KEYS */;
/*!40000 ALTER TABLE `entregan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `Clave` bigint(20) NOT NULL,
  `Descripción` varchar(100) DEFAULT NULL,
  `Precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES (1000,'Varilla 3/16',100.00),(1010,'Varilla 4/32',115.00),(1020,'Varilla 3/17',130.00),(1030,'Varilla 4/33',145.00),(1040,'Varilla 3/18',160.00),(1050,'Varilla 4/34',175.00),(1060,'Varilla 3/19',190.00),(1070,'Varilla 4/35',205.00),(1080,'Ladrillos rojos',50.00),(1090,'Ladrillos grises',35.00),(1100,'Block',30.00),(1110,'Megablock',40.00),(1120,'Sillar rosa',100.00),(1130,'Sillar gris',110.00),(1140,'Cantera blanca',200.00),(1150,'Cantera gris',1210.00),(1160,'Cantera rosa',1420.00),(1170,'Cantera amarilla',230.00),(1180,'Recubrimiento P1001',200.00),(1190,'Recubrimiento P1010',220.00),(1200,'Recubrimiento P1019',240.00),(1210,'Recubrimiento P1028',250.00),(1220,'Recubrimiento P1037',280.00),(1230,'Cemento ',300.00),(1240,'Arena',200.00),(1250,'Grava',100.00),(1260,'Gravilla',90.00),(1270,'Tezontle',80.00),(1280,'Tepetate',34.00),(1290,'Tubería 3.5',200.00),(1300,'Tubería 4.3',210.00),(1310,'Tubería 3.6',220.00),(1320,'Tubería 4.4',230.00),(1330,'Tubería 3.7',240.00),(1340,'Tubería 4.5',250.00),(1350,'Tubería 3.8',260.00),(1360,'Pintura C1010',125.00),(1370,'Pintura B1020',125.00),(1380,'Pintura C1011',725.00),(1390,'Pintura B1021',125.00),(1400,'Pintura C1011',125.00),(1410,'Pintura B1021',125.00),(1420,'Pintura C1012',125.00),(1430,'Pintura B1022',125.00);
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `RFC` varchar(15) NOT NULL,
  `RazonSocial` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES ('AAAA800101','La fragua'),('BBBB800101','Oviedo'),('CCCC800101','La Ferre'),('DDDD800101','Cecoferre'),('EEEE800101','Alvin'),('FFFF800101','Comex'),('GGGG800101','Tabiquera del centro'),('HHHH800101','Tubasa');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyectos` (
  `Número` bigint(20) NOT NULL,
  `Denominación` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Número`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (5000,'Vamos Mexico'),(5001,'Aztecón'),(5002,'CIT Campeche'),(5003,'Mexico sin ti no estamos completos'),(5004,'Educando en Coahuila'),(5005,'Infonavit Durango'),(5006,'Reconstrucción del templo de Guadalupe'),(5007,'Construcción de plaza Magnolias'),(5008,'Televisa en acción'),(5009,'Disco Atlantic'),(5010,'Construcción de Hospital Infantil'),(5011,'Remodelación de aulas del IPP'),(5012,'Restauración de instalaciones del CEA'),(5013,'Reparación de la plaza Sonora'),(5014,'Remodelación de Soriana'),(5015,'CIT Yucatan'),(5016,'Ampliación de la carretera a la huasteca'),(5017,'Reparación de la carretera del sol'),(5018,'Tu cambio por la educacion'),(5019,'Queretaro limpio');
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15  8:55:39
