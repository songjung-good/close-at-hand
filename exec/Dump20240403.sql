CREATE DATABASE  IF NOT EXISTS `closeathand` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `closeathand`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: j10e207.p.ssafy.io    Database: closeathand
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `clothes`
--

DROP TABLE IF EXISTS `clothes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clothes` (
  `clothes_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `clothes_img_url` varchar(255) DEFAULT NULL,
  `detection` varchar(255) DEFAULT NULL,
  `last_wash_date` datetime(6) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `status` enum('AIDONE','BASIC') DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `clothes_token` varchar(255) NOT NULL,
  `location` enum('ENABLE','DISABLE') DEFAULT NULL,
  PRIMARY KEY (`clothes_id`),
  UNIQUE KEY `UK_8akqwpyvxlh5hnaaytc1voxc4` (`clothes_token`),
  KEY `FKciuihnqiq0t44yg7jyow95iqg` (`user_id`),
  CONSTRAINT `FKciuihnqiq0t44yg7jyow95iqg` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothes`
--

LOCK TABLES `clothes` WRITE;
/*!40000 ALTER TABLE `clothes` DISABLE KEYS */;
INSERT INTO `clothes` VALUES (1,'2024-03-31 08:28:46.284685','2024-04-03 01:26:54.599168','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_6dbMRvQ31eU1hnr3',NULL,NULL,NULL,'AIDONE',4,'clo_6dbMRvQ31eU1hnr3','ENABLE'),(2,'2024-03-31 08:30:11.616737','2024-04-03 01:26:57.510019','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_wFuLbXBuXcg1Fcz8',NULL,NULL,NULL,'AIDONE',4,'clo_wFuLbXBuXcg1Fcz8','ENABLE'),(3,'2024-03-31 08:30:17.153537','2024-04-03 01:26:59.060965','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_ok8z6zerDi4uaYyu',NULL,NULL,NULL,'AIDONE',4,'clo_ok8z6zerDi4uaYyu','ENABLE'),(4,'2024-03-31 08:31:05.547385','2024-04-03 01:27:00.259438','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_4oHniVohgdhpDFVf',NULL,NULL,NULL,'AIDONE',4,'clo_4oHniVohgdhpDFVf','ENABLE'),(5,'2024-03-31 08:31:15.541467','2024-04-03 01:27:01.423042','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_ZYhN8okEkYvKxit3',NULL,NULL,NULL,'AIDONE',4,'clo_ZYhN8okEkYvKxit3','ENABLE'),(6,'2024-03-31 08:31:28.910838','2024-04-03 01:27:03.328992','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_6ubBFSpQpYqXObxi',NULL,NULL,NULL,'AIDONE',4,'clo_6ubBFSpQpYqXObxi','ENABLE'),(7,'2024-03-31 08:31:38.541232','2024-04-03 01:27:04.493326','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_FsYzflyOvFJBuSGT',NULL,NULL,NULL,'AIDONE',4,'clo_FsYzflyOvFJBuSGT','ENABLE'),(8,'2024-03-31 08:31:49.220469','2024-04-03 01:27:05.619255','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_tIfcUfgcRxrY97kR',NULL,NULL,NULL,'AIDONE',4,'clo_tIfcUfgcRxrY97kR','ENABLE'),(9,'2024-03-31 08:32:06.353139','2024-04-03 01:27:06.776869','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_E2kaO7ZunSsRzBPY',NULL,NULL,NULL,'AIDONE',4,'clo_E2kaO7ZunSsRzBPY','ENABLE'),(11,'2024-03-31 08:32:43.782592','2024-04-03 01:27:10.972653','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_1s46Zyj8YHMFyKNx',NULL,NULL,NULL,'AIDONE',4,'clo_1s46Zyj8YHMFyKNx','ENABLE'),(12,'2024-03-31 08:32:53.336774','2024-04-03 01:27:12.623197','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_ZXZi6VGtrN6Nye7L',NULL,NULL,NULL,'AIDONE',4,'clo_ZXZi6VGtrN6Nye7L','ENABLE'),(13,'2024-03-31 08:33:03.965356','2024-04-03 01:27:13.959406','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_dULBiyTClIpg9aPv',NULL,NULL,NULL,'AIDONE',4,'clo_dULBiyTClIpg9aPv','ENABLE'),(14,'2024-03-31 08:33:46.029206','2024-04-03 01:27:15.112495','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_ulcLrRHWf7SeN0GD',NULL,NULL,NULL,'AIDONE',4,'clo_ulcLrRHWf7SeN0GD','ENABLE'),(15,'2024-03-31 08:43:13.336572','2024-04-03 01:27:16.371605','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_VtEadQoYtXTNjHBM',NULL,NULL,NULL,'AIDONE',4,'clo_VtEadQoYtXTNjHBM','ENABLE'),(16,'2024-03-31 08:46:04.592934','2024-04-03 01:27:17.540607','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_KHybCwlDlfQrIPXk',NULL,NULL,NULL,'AIDONE',4,'clo_KHybCwlDlfQrIPXk','ENABLE'),(17,'2024-03-31 08:48:59.112800','2024-04-03 01:27:18.997354','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_ExxEXrhv1nIQSo4i',NULL,NULL,NULL,'AIDONE',4,'clo_ExxEXrhv1nIQSo4i','ENABLE'),(18,'2024-03-31 08:52:01.986013','2024-04-03 01:27:20.713354','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_XF260UX2nF4IhUu1',NULL,NULL,NULL,'AIDONE',4,'clo_XF260UX2nF4IhUu1','ENABLE'),(19,'2024-03-31 08:54:05.881430','2024-04-03 01:27:22.234676','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_AY9saygGvcODacHZ',NULL,NULL,NULL,'AIDONE',4,'clo_AY9saygGvcODacHZ','ENABLE'),(20,'2024-03-31 09:02:34.165321','2024-04-03 01:27:25.735943','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_upE7QieVuQAgwGpG',NULL,NULL,NULL,'AIDONE',4,'clo_upE7QieVuQAgwGpG','ENABLE'),(23,'2024-04-01 08:38:33.609259','2024-04-03 01:27:32.211796','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_BugrKnC7EUzPMFRv',NULL,NULL,NULL,'AIDONE',4,'clo_BugrKnC7EUzPMFRv','ENABLE'),(24,'2024-04-01 08:41:11.758780','2024-04-03 01:27:36.290142','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_CxPSxLwKYribYJUt',NULL,NULL,NULL,'AIDONE',4,'clo_CxPSxLwKYribYJUt','ENABLE'),(25,'2024-04-01 08:42:51.118326','2024-04-03 01:27:37.376110','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_TIZ5elnmVhX2bLLH',NULL,NULL,NULL,'AIDONE',4,'clo_TIZ5elnmVhX2bLLH','ENABLE'),(26,'2024-04-01 08:44:01.470846','2024-04-03 01:27:38.461501','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_mcyN7WjwXNYVGtPT',NULL,NULL,NULL,'AIDONE',4,'clo_mcyN7WjwXNYVGtPT','ENABLE'),(27,'2024-04-01 08:45:35.846975','2024-04-03 01:27:39.659577','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_bextujKwsL4gPMR3',NULL,NULL,NULL,'AIDONE',4,'clo_bextujKwsL4gPMR3','ENABLE'),(28,'2024-04-01 08:46:55.409728','2024-04-03 01:27:40.724335','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_63TTzE07l7c4mQLX',NULL,NULL,NULL,'AIDONE',4,'clo_63TTzE07l7c4mQLX','ENABLE'),(29,'2024-04-01 08:47:46.453546','2024-04-03 01:27:43.991329','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_kzd9Qr0dz3ESP1Mz',NULL,NULL,NULL,'AIDONE',4,'clo_kzd9Qr0dz3ESP1Mz','ENABLE'),(30,'2024-04-01 08:48:46.639940','2024-04-03 01:27:47.684888','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_eeZE94CaaXvU3507',NULL,NULL,NULL,'AIDONE',4,'clo_eeZE94CaaXvU3507','ENABLE'),(31,'2024-04-01 08:49:57.605771','2024-04-03 01:27:51.137540','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_rA2mctImbL2yn1St',NULL,NULL,NULL,'AIDONE',4,'clo_rA2mctImbL2yn1St','ENABLE'),(32,'2024-04-01 08:51:04.610632','2024-04-03 01:27:52.370529','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_UXuKWAl819a8NRBj',NULL,NULL,NULL,'AIDONE',4,'clo_UXuKWAl819a8NRBj','ENABLE'),(33,'2024-04-01 08:52:00.000238','2024-04-03 01:27:53.584248','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_5arPnOzmNxx3b1IA',NULL,NULL,NULL,'AIDONE',4,'clo_5arPnOzmNxx3b1IA','ENABLE'),(34,'2024-04-02 00:01:51.264337','2024-04-03 01:27:54.813728','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_7jn87dMToxmUGB3E',NULL,NULL,NULL,'AIDONE',4,'clo_7jn87dMToxmUGB3E','ENABLE'),(35,'2024-04-02 00:03:14.237467','2024-04-03 01:27:56.133546','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_0GCxxZxi7xM2LJeJ',NULL,NULL,NULL,'AIDONE',4,'clo_0GCxxZxi7xM2LJeJ','ENABLE'),(36,'2024-04-03 02:11:15.053614','2024-04-03 02:40:28.359744','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_aClSp2gyNZ8cF5wn',NULL,NULL,NULL,'AIDONE',4,'clo_aClSp2gyNZ8cF5wn','ENABLE'),(37,'2024-04-03 02:11:21.161349','2024-04-03 02:40:17.186615','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_Sp7UHyz3oX4LtTFN',NULL,NULL,NULL,'AIDONE',4,'clo_Sp7UHyz3oX4LtTFN','ENABLE'),(38,'2024-04-03 02:11:25.997146','2024-04-03 02:40:31.379816','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_LaFaOCsHVr1nOOgF',NULL,NULL,NULL,'AIDONE',4,'clo_LaFaOCsHVr1nOOgF','ENABLE'),(39,'2024-04-03 02:11:30.921908','2024-04-03 02:40:46.400700','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_ArHTysgkxwzF0RCU',NULL,NULL,NULL,'AIDONE',4,'clo_ArHTysgkxwzF0RCU','ENABLE'),(40,'2024-04-03 02:11:35.247186','2024-04-03 02:40:48.880680','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_LhvIAACGv90RfwsM',NULL,NULL,NULL,'AIDONE',4,'clo_LhvIAACGv90RfwsM','ENABLE'),(41,'2024-04-03 02:11:39.659114','2024-04-03 02:40:50.538065','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_5knhbSSVZzEPwjA2',NULL,NULL,NULL,'AIDONE',4,'clo_5knhbSSVZzEPwjA2','ENABLE'),(42,'2024-04-03 02:11:45.238783','2024-04-03 02:40:51.920232','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_Riya0mrMkVhkI50H',NULL,NULL,NULL,'AIDONE',4,'clo_Riya0mrMkVhkI50H','ENABLE'),(43,'2024-04-03 02:20:17.986133','2024-04-03 02:40:57.838649','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_I6APcX7V2rkf1Z1l',NULL,NULL,NULL,'AIDONE',4,'clo_I6APcX7V2rkf1Z1l','ENABLE'),(44,'2024-04-03 02:45:09.011795','2024-04-03 02:47:13.539744','https://rainmirror.s3.ap-northeast-2.amazonaws.com/clothes/clo_iSWtn0dmwN5WjvGg',NULL,NULL,NULL,'AIDONE',4,'clo_iSWtn0dmwN5WjvGg','ENABLE');
/*!40000 ALTER TABLE `clothes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clothes_tag`
--

DROP TABLE IF EXISTS `clothes_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clothes_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) DEFAULT NULL,
  `clothes_tag_group_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgklau8p3u0cli6wolu23hb39a` (`clothes_tag_group_id`),
  CONSTRAINT `FKgklau8p3u0cli6wolu23hb39a` FOREIGN KEY (`clothes_tag_group_id`) REFERENCES `clothes_tag_group` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=852 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothes_tag`
--

LOCK TABLES `clothes_tag` WRITE;
/*!40000 ALTER TABLE `clothes_tag` DISABLE KEYS */;
INSERT INTO `clothes_tag` VALUES (278,'팬츠',120),(279,'슬랙스',121),(280,'베이지',122),(281,'화이트',122),(282,'라벤더',122),(283,'합성섬유',123),(284,'면',123),(285,'실크',123),(286,'오피스룩',124),(287,'캐주얼',124),(288,'페미닌',124),(289,'무지',125),(290,'스트라이프',125),(291,'체크',125),(292,'캐주얼상의',126),(293,'티셔츠',127),(294,'블랙',128),(295,'네이비',128),(296,'화이트',128),(297,'면',129),(298,'저지',129),(299,'합성섬유',129),(300,'캐주얼',130),(301,'페미닌',130),(302,'펑크',130),(303,'레터링',131),(304,'무지',131),(305,'그래픽',131),(306,'니트웨어',132),(307,'가디건',133),(308,'그레이',134),(309,'스카이블루',134),(310,'화이트',134),(311,'니트',135),(312,'울/캐시미어',135),(313,'트위드',135),(314,'캐주얼',136),(315,'페미닌',136),(316,'오피스룩',136),(317,'무지',137),(318,'체크',137),(319,'스트라이프',137),(320,'재킷',138),(321,'데님재킷',139),(322,'네이비',140),(323,'블루',140),(324,'블랙',140),(325,'데님',141),(326,'합성섬유',141),(327,'코듀로이',141),(328,'캐주얼',142),(329,'복고',142),(330,'펑크',142),(331,'무지',143),(332,'그라데이션',143),(333,'타이다이',143),(334,'셔츠',144),(335,'셔츠',145),(336,'스카이블루',146),(337,'블루',146),(338,'민트',146),(339,'합성섬유',147),(340,'면',147),(341,'실크',147),(342,'오피스룩',148),(343,'캐주얼',148),(344,'페미닌',148),(345,'무지',149),(346,'스트라이프',149),(347,'레터링',149),(348,'캐주얼상의',150),(349,'티셔츠',151),(350,'스카이블루',152),(351,'화이트',152),(352,'그레이',152),(353,'면',153),(354,'합성섬유',153),(355,'저지',153),(356,'캐주얼',154),(357,'페미닌',154),(358,'아웃도어',154),(359,'레터링',155),(360,'무지',155),(361,'그래픽',155),(362,'재킷',156),(363,'바람막이',157),(364,'화이트',158),(365,'블랙',158),(366,'베이지',158),(367,'합성섬유',159),(368,'면',159),(369,'비닐/PVC',159),(370,'캐주얼',160),(371,'아웃도어',160),(372,'페미닌',160),(373,'무지',161),(374,'레터링',161),(375,'그래픽',161),(376,'코트',162),(377,'트렌치코트',163),(378,'베이지',164),(379,'브라운',164),(380,'오렌지',164),(381,'울/캐시미어',165),(382,'합성섬유',165),(383,'가죽',165),(384,'캐주얼',166),(385,'페미닌',166),(386,'오피스룩',166),(387,'무지',167),(388,'레터링',167),(389,'체크',167),(390,'캐주얼상의',168),(391,'스웨트셔츠',169),(392,'화이트',170),(393,'베이지',170),(394,'그레이',170),(395,'면',171),(396,'합성섬유',171),(397,'저지',171),(398,'캐주얼',172),(399,'펑크',172),(400,'페미닌',172),(401,'그래픽',173),(402,'레터링',173),(403,'해골',173),(404,'재킷',174),(405,'더블브레스티드재킷',175),(406,'핑크',176),(407,'라벤더',176),(408,'레드',176),(409,'울/캐시미어',177),(410,'합성섬유',177),(411,'트위드',177),(412,'페미닌',178),(413,'캐주얼',178),(414,'복고',178),(415,'무지',179),(416,'도트',179),(417,'체크',179),(418,'스커트',180),(419,'스커트',181),(420,'그레이',182),(421,'블랙',182),(422,'카키',182),(423,'합성섬유',183),(424,'면',183),(425,'저지',183),(426,'캐주얼',184),(427,'페미닌',184),(428,'오피스룩',184),(429,'무지',185),(430,'레터링',185),(431,'체크',185),(432,'스커트',186),(433,'데님스커트',187),(434,'네이비',188),(435,'블랙',188),(436,'블루',188),(437,'데님',189),(438,'코듀로이',189),(439,'면',189),(440,'캐주얼',190),(441,'페미닌',190),(442,'히피',190),(443,'무지',191),(444,'그라데이션',191),(445,'체크',191),(446,'청바지',192),(447,'청바지',193),(448,'그레이',194),(449,'스카이블루',194),(450,'블루',194),(451,'데님',195),(452,'면',195),(453,'합성섬유',195),(454,'캐주얼',196),(455,'복고',196),(456,'페미닌',196),(457,'무지',197),(458,'그라데이션',197),(459,'타이다이',197),(460,'드레스',198),(461,'셔츠원피스',199),(462,'네이비',200),(463,'블루',200),(464,'블랙',200),(465,'데님',201),(466,'울/캐시미어',201),(467,'합성섬유',201),(468,'복고',202),(469,'캐주얼',202),(470,'페미닌',202),(471,'무지',203),(472,'스트라이프',203),(473,'체크',203),(474,'탑',204),(475,'튜브탑',205),(476,'블랙',206),(477,'네이비',206),(478,'브라운',206),(479,'면',207),(480,'합성섬유',207),(481,'니트',207),(482,'캐주얼',208),(483,'페미닌',208),(484,'리조트',208),(485,'무지',209),(486,'도트',209),(487,'플로럴',209),(488,'캐주얼상의',210),(489,'후드',211),(490,'그레이',212),(491,'화이트',212),(492,'블랙',212),(493,'면',213),(494,'합성섬유',213),(495,'저지',213),(496,'캐주얼',214),(497,'아웃도어',214),(498,'페미닌',214),(499,'무지',215),(500,'레터링',215),(501,'그래픽',215),(502,'팬츠',216),(503,'스웨트팬츠',217),(504,'그레이',218),(505,'스카이블루',218),(506,'화이트',218),(507,'면',219),(508,'합성섬유',219),(509,'저지',219),(510,'캐주얼',220),(511,'오피스룩',220),(512,'페미닌',220),(513,'무지',221),(514,'레터링',221),(515,'스트라이프',221),(516,'니트웨어',222),(517,'스웨터',223),(518,'라벤더',224),(519,'핑크',224),(520,'베이지',224),(521,'니트',225),(522,'면',225),(523,'울/캐시미어',225),(524,'캐주얼',226),(525,'페미닌',226),(526,'오피스룩',226),(527,'무지',227),(528,'스트라이프',227),(529,'도트',227),(530,'니트웨어',228),(531,'스웨터',229),(532,'베이지',230),(533,'라벤더',230),(534,'브라운',230),(535,'니트',231),(536,'울/캐시미어',231),(537,'앙고라',231),(538,'캐주얼',232),(539,'페미닌',232),(540,'컨트리',232),(541,'무지',233),(542,'체크',233),(543,'지그재그',233),(544,'셔츠',234),(545,'셔츠',235),(546,'화이트',236),(547,'베이지',236),(548,'옐로우',236),(549,'면',237),(550,'합성섬유',237),(551,'실크',237),(552,'오피스룩',238),(553,'캐주얼',238),(554,'페미닌',238),(555,'무지',239),(556,'스트라이프',239),(557,'레터링',239),(558,'스커트',240),(559,'플레어스커트',241),(560,'베이지',242),(561,'화이트',242),(562,'라벤더',242),(563,'면',243),(564,'합성섬유',243),(565,'린넨',243),(566,'페미닌',244),(567,'캐주얼',244),(568,'컨트리',244),(569,'무지',245),(570,'스트라이프',245),(571,'플로럴',245),(572,'드레스',246),(573,'데님원피스',247),(574,'블루',248),(575,'스카이블루',248),(576,'네이비',248),(577,'데님',249),(578,'면',249),(579,'합성섬유',249),(580,'캐주얼',250),(581,'복고',250),(582,'페미닌',250),(583,'무지',251),(584,'그라데이션',251),(585,'플로럴',251),(586,'청바지',252),(587,'청바지',253),(588,'스카이블루',254),(589,'블루',254),(590,'민트',254),(591,'데님',255),(592,'면',255),(593,'합성섬유',255),(594,'캐주얼',256),(595,'복고',256),(596,'페미닌',256),(597,'무지',257),(598,'그라데이션',257),(599,'스트라이프',257),(600,'청바지',258),(601,'청바지',259),(602,'블루',260),(603,'스카이블루',260),(604,'네이비',260),(605,'데님',261),(606,'코듀로이',261),(607,'합성섬유',261),(608,'캐주얼',262),(609,'복고',262),(610,'컨트리',262),(611,'무지',263),(612,'그라데이션',263),(613,'타이다이',263),(614,'니트웨어',264),(615,'가디건',265),(616,'베이지',266),(617,'화이트',266),(618,'블랙',266),(619,'니트',267),(620,'울/캐시미어',267),(621,'면',267),(622,'캐주얼',268),(623,'페미닌',268),(624,'프레피',268),(625,'스트라이프',269),(626,'무지',269),(627,'지그재그',269),(628,'캐주얼상의',270),(629,'티셔츠',271),(630,'화이트',272),(631,'베이지',272),(632,'그레이',272),(633,'면',273),(634,'합성섬유',273),(635,'저지',273),(636,'캐주얼',274),(637,'페미닌',274),(638,'펑크',274),(639,'레터링',275),(640,'무지',275),(641,'그래픽',275),(642,'캐주얼상의',276),(643,'티셔츠',277),(644,'블랙',278),(645,'네이비',278),(646,'그레이',278),(647,'면',279),(648,'합성섬유',279),(649,'저지',279),(650,'캐주얼',280),(651,'마린',280),(652,'리조트',280),(653,'스트라이프',281),(654,'지그재그',281),(655,'체크',281),(656,'캐주얼상의',282),(657,'티셔츠',283),(658,'블랙',284),(659,'네이비',284),(660,'화이트',284),(661,'면',285),(662,'합성섬유',285),(663,'저지',285),(664,'캐주얼',286),(665,'마린',286),(666,'페미닌',286),(667,'스트라이프',287),(668,'무지',287),(669,'지그재그',287),(670,'니트웨어',288),(671,'가디건',289),(672,'레드',290),(673,'핑크',290),(674,'오렌지',290),(675,'니트',291),(676,'울/캐시미어',291),(677,'면',291),(678,'캐주얼',292),(679,'페미닌',292),(680,'프레피',292),(681,'무지',293),(682,'레터링',293),(683,'그래픽',293),(684,'니트웨어',294),(685,'가디건',295),(686,'화이트',296),(687,'베이지',296),(688,'라벤더',296),(689,'니트',297),(690,'울/캐시미어',297),(691,'앙고라',297),(692,'캐주얼',298),(693,'페미닌',298),(694,'프레피',298),(695,'무지',299),(696,'스트라이프',299),(697,'레터링',299),(698,'재킷',300),(699,'테일러드재킷',301),(700,'블랙',302),(701,'네이비',302),(702,'브라운',302),(703,'합성섬유',303),(704,'울/캐시미어',303),(705,'면',303),(706,'오피스룩',304),(707,'캐주얼',304),(708,'페미닌',304),(709,'무지',305),(710,'레터링',305),(711,'체크',305),(712,'팬츠',306),(713,'슬랙스',307),(714,'블랙',308),(715,'네이비',308),(716,'블루',308),(717,'합성섬유',309),(718,'면',309),(719,'울/캐시미어',309),(720,'캐주얼',310),(721,'오피스룩',310),(722,'페미닌',310),(723,'무지',311),(724,'스트라이프',311),(725,'체크',311),(726,'청바지',312),(727,'청바지',313),(728,'그레이',314),(729,'스카이블루',314),(730,'블루',314),(731,'데님',315),(732,'면',315),(733,'합성섬유',315),(734,'캐주얼',316),(735,'복고',316),(736,'페미닌',316),(737,'무지',317),(738,'그라데이션',317),(739,'타이다이',317),(740,'재킷',318),(741,'발마칸재킷',319),(742,'블랙',320),(743,'그레이',320),(744,'네이비',320),(745,'울/캐시미어',321),(746,'합성섬유',321),(747,'면',321),(748,'오피스룩',322),(749,'페미닌',322),(750,'캐주얼',322),(751,'무지',323),(752,'체크',323),(753,'스트라이프',323),(754,'스커트',324),(755,'데님스커트',325),(756,'네이비',326),(757,'블랙',326),(758,'블루',326),(759,'데님',327),(760,'코듀로이',327),(761,'면',327),(762,'캐주얼',328),(763,'페미닌',328),(764,'히피',328),(765,'무지',329),(766,'그라데이션',329),(767,'체크',329),(768,'캐주얼상의',330),(769,'티셔츠',331),(770,'스카이블루',332),(771,'화이트',332),(772,'그레이',332),(773,'면',333),(774,'합성섬유',333),(775,'저지',333),(776,'캐주얼',334),(777,'페미닌',334),(778,'아웃도어',334),(779,'레터링',335),(780,'무지',335),(781,'그래픽',335),(782,'캐주얼상의',336),(783,'티셔츠',337),(784,'블랙',338),(785,'네이비',338),(786,'그레이',338),(787,'면',339),(788,'합성섬유',339),(789,'저지',339),(790,'캐주얼',340),(791,'페미닌',340),(792,'펑크',340),(793,'레터링',341),(794,'무지',341),(795,'그래픽',341),(796,'스커트',342),(797,'스커트',343),(798,'네이비',344),(799,'블랙',344),(800,'블루',344),(801,'합성섬유',345),(802,'면',345),(803,'저지',345),(804,'캐주얼',346),(805,'페미닌',346),(806,'아웃도어',346),(807,'무지',347),(808,'레터링',347),(809,'스트라이프',347),(810,'니트웨어',348),(811,'가디건',349),(812,'화이트',350),(813,'베이지',350),(814,'라벤더',350),(815,'니트',351),(816,'울/캐시미어',351),(817,'면',351),(818,'캐주얼',352),(819,'페미닌',352),(820,'프레피',352),(821,'무지',353),(822,'레터링',353),(823,'그래픽',353),(824,'캐주얼상의',354),(825,'티셔츠',355),(826,'화이트',356),(827,'베이지',356),(828,'옐로우',356),(829,'면',357),(830,'저지',357),(831,'합성섬유',357),(832,'캐주얼',358),(833,'펑크',358),(834,'페미닌',358),(835,'그래픽',359),(836,'레터링',359),(837,'해골',359),(838,'드레스',360),(839,'셔츠원피스',361),(840,'라벤더',362),(841,'베이지',362),(842,'핑크',362),(843,'합성섬유',363),(844,'면',363),(845,'울/캐시미어',363),(846,'오피스룩',364),(847,'캐주얼',364),(848,'페미닌',364),(849,'무지',365),(850,'스트라이프',365),(851,'레터링',365);
/*!40000 ALTER TABLE `clothes_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clothes_tag_group`
--

DROP TABLE IF EXISTS `clothes_tag_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clothes_tag_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clothes_tag_group_name` varchar(255) DEFAULT NULL,
  `clothes_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6xcba1d6n8ffthxux3qc3e9gp` (`clothes_id`),
  CONSTRAINT `FK6xcba1d6n8ffthxux3qc3e9gp` FOREIGN KEY (`clothes_id`) REFERENCES `clothes` (`clothes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=366 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothes_tag_group`
--

LOCK TABLES `clothes_tag_group` WRITE;
/*!40000 ALTER TABLE `clothes_tag_group` DISABLE KEYS */;
INSERT INTO `clothes_tag_group` VALUES (1,'category',1),(2,'item',1),(3,'colors',1),(4,'textures',1),(5,'looks',1),(6,'prints',1),(7,'category',2),(8,'item',2),(9,'colors',2),(10,'textures',2),(11,'looks',2),(12,'prints',2),(13,'category',3),(14,'item',3),(15,'colors',3),(16,'textures',3),(17,'looks',3),(18,'prints',3),(19,'category',4),(20,'item',4),(21,'colors',4),(22,'textures',4),(23,'looks',4),(24,'prints',4),(25,'category',5),(26,'item',5),(27,'colors',5),(28,'textures',5),(29,'looks',5),(30,'prints',5),(31,'category',6),(32,'item',6),(33,'colors',6),(34,'textures',6),(35,'looks',6),(36,'prints',6),(37,'category',7),(38,'item',7),(39,'colors',7),(40,'textures',7),(41,'looks',7),(42,'prints',7),(43,'category',8),(44,'item',8),(45,'colors',8),(46,'textures',8),(47,'looks',8),(48,'prints',8),(49,'category',9),(50,'item',9),(51,'colors',9),(52,'textures',9),(53,'looks',9),(54,'prints',9),(55,'category',11),(56,'item',11),(57,'colors',11),(58,'textures',11),(59,'looks',11),(60,'prints',11),(61,'category',12),(62,'item',12),(63,'colors',12),(64,'textures',12),(65,'looks',12),(66,'prints',12),(67,'category',13),(68,'item',13),(69,'colors',13),(70,'textures',13),(71,'looks',13),(72,'prints',13),(73,'category',14),(74,'item',14),(75,'colors',14),(76,'textures',14),(77,'looks',14),(78,'prints',14),(79,'category',15),(80,'item',15),(81,'colors',15),(82,'textures',15),(83,'looks',15),(84,'prints',15),(85,'category',16),(86,'item',16),(87,'colors',16),(88,'textures',16),(89,'looks',16),(90,'prints',16),(96,'category',17),(97,'item',17),(98,'colors',17),(99,'textures',17),(100,'looks',17),(101,'prints',17),(102,'category',25),(103,'item',25),(104,'colors',25),(105,'textures',25),(106,'looks',25),(107,'prints',25),(108,'category',24),(109,'item',24),(110,'colors',24),(111,'textures',24),(112,'looks',24),(113,'prints',24),(114,'category',28),(115,'item',28),(116,'colors',28),(117,'textures',28),(118,'looks',28),(119,'prints',28),(120,'category',1),(121,'item',1),(122,'colors',1),(123,'textures',1),(124,'looks',1),(125,'prints',1),(126,'category',2),(127,'item',2),(128,'colors',2),(129,'textures',2),(130,'looks',2),(131,'prints',2),(132,'category',3),(133,'item',3),(134,'colors',3),(135,'textures',3),(136,'looks',3),(137,'prints',3),(138,'category',4),(139,'item',4),(140,'colors',4),(141,'textures',4),(142,'looks',4),(143,'prints',4),(144,'category',5),(145,'item',5),(146,'colors',5),(147,'textures',5),(148,'looks',5),(149,'prints',5),(150,'category',6),(151,'item',6),(152,'colors',6),(153,'textures',6),(154,'looks',6),(155,'prints',6),(156,'category',7),(157,'item',7),(158,'colors',7),(159,'textures',7),(160,'looks',7),(161,'prints',7),(162,'category',8),(163,'item',8),(164,'colors',8),(165,'textures',8),(166,'looks',8),(167,'prints',8),(168,'category',9),(169,'item',9),(170,'colors',9),(171,'textures',9),(172,'looks',9),(173,'prints',9),(174,'category',11),(175,'item',11),(176,'colors',11),(177,'textures',11),(178,'looks',11),(179,'prints',11),(180,'category',12),(181,'item',12),(182,'colors',12),(183,'textures',12),(184,'looks',12),(185,'prints',12),(186,'category',13),(187,'item',13),(188,'colors',13),(189,'textures',13),(190,'looks',13),(191,'prints',13),(192,'category',14),(193,'item',14),(194,'colors',14),(195,'textures',14),(196,'looks',14),(197,'prints',14),(198,'category',15),(199,'item',15),(200,'colors',15),(201,'textures',15),(202,'looks',15),(203,'prints',15),(204,'category',16),(205,'item',16),(206,'colors',16),(207,'textures',16),(208,'looks',16),(209,'prints',16),(210,'category',17),(211,'item',17),(212,'colors',17),(213,'textures',17),(214,'looks',17),(215,'prints',17),(216,'category',18),(217,'item',18),(218,'colors',18),(219,'textures',18),(220,'looks',18),(221,'prints',18),(222,'category',19),(223,'item',19),(224,'colors',19),(225,'textures',19),(226,'looks',19),(227,'prints',19),(228,'category',20),(229,'item',20),(230,'colors',20),(231,'textures',20),(232,'looks',20),(233,'prints',20),(234,'category',23),(235,'item',23),(236,'colors',23),(237,'textures',23),(238,'looks',23),(239,'prints',23),(240,'category',24),(241,'item',24),(242,'colors',24),(243,'textures',24),(244,'looks',24),(245,'prints',24),(246,'category',25),(247,'item',25),(248,'colors',25),(249,'textures',25),(250,'looks',25),(251,'prints',25),(252,'category',26),(253,'item',26),(254,'colors',26),(255,'textures',26),(256,'looks',26),(257,'prints',26),(258,'category',27),(259,'item',27),(260,'colors',27),(261,'textures',27),(262,'looks',27),(263,'prints',27),(264,'category',28),(265,'item',28),(266,'colors',28),(267,'textures',28),(268,'looks',28),(269,'prints',28),(270,'category',29),(271,'item',29),(272,'colors',29),(273,'textures',29),(274,'looks',29),(275,'prints',29),(276,'category',30),(277,'item',30),(278,'colors',30),(279,'textures',30),(280,'looks',30),(281,'prints',30),(282,'category',31),(283,'item',31),(284,'colors',31),(285,'textures',31),(286,'looks',31),(287,'prints',31),(288,'category',32),(289,'item',32),(290,'colors',32),(291,'textures',32),(292,'looks',32),(293,'prints',32),(294,'category',33),(295,'item',33),(296,'colors',33),(297,'textures',33),(298,'looks',33),(299,'prints',33),(300,'category',34),(301,'item',34),(302,'colors',34),(303,'textures',34),(304,'looks',34),(305,'prints',34),(306,'category',35),(307,'item',35),(308,'colors',35),(309,'textures',35),(310,'looks',35),(311,'prints',35),(312,'category',37),(313,'item',37),(314,'colors',37),(315,'textures',37),(316,'looks',37),(317,'prints',37),(318,'category',36),(319,'item',36),(320,'colors',36),(321,'textures',36),(322,'looks',36),(323,'prints',36),(324,'category',38),(325,'item',38),(326,'colors',38),(327,'textures',38),(328,'looks',38),(329,'prints',38),(330,'category',39),(331,'item',39),(332,'colors',39),(333,'textures',39),(334,'looks',39),(335,'prints',39),(336,'category',40),(337,'item',40),(338,'colors',40),(339,'textures',40),(340,'looks',40),(341,'prints',40),(342,'category',41),(343,'item',41),(344,'colors',41),(345,'textures',41),(346,'looks',41),(347,'prints',41),(348,'category',42),(349,'item',42),(350,'colors',42),(351,'textures',42),(352,'looks',42),(353,'prints',42),(354,'category',43),(355,'item',43),(356,'colors',43),(357,'textures',43),(358,'looks',43),(359,'prints',43),(360,'category',44),(361,'item',44),(362,'colors',44),(363,'textures',44),(364,'looks',44),(365,'prints',44);
/*!40000 ALTER TABLE `clothes_tag_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ootd`
--

DROP TABLE IF EXISTS `ootd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ootd` (
  `ootd_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `ootd_img_url` varchar(255) NOT NULL,
  `user_token` bigint DEFAULT NULL,
  PRIMARY KEY (`ootd_id`),
  KEY `FK8t2tv4fp9f9h6a094w04h5fhb` (`user_token`),
  CONSTRAINT `FK8t2tv4fp9f9h6a094w04h5fhb` FOREIGN KEY (`user_token`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ootd`
--

LOCK TABLES `ootd` WRITE;
/*!40000 ALTER TABLE `ootd` DISABLE KEYS */;
INSERT INTO `ootd` VALUES (1,'2024-04-01 00:59:18.975025','2024-04-01 01:17:49.091178','https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/1',4),(2,'2024-04-01 01:01:53.599341','2024-04-01 01:01:53.599370','https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/noImg.png',2),(3,'2024-04-01 01:23:40.439253','2024-04-01 01:23:40.439280','https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/noImg.png',5),(4,'2024-04-01 15:51:09.547586','2024-04-01 15:51:09.547600','https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/noImg.png',4),(5,'2024-04-03 00:28:59.886518','2024-04-03 05:23:50.117151','https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/5',4),(6,'2024-04-03 07:58:00.348445','2024-04-03 07:58:00.348465','https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/noImg.png',9);
/*!40000 ALTER TABLE `ootd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ootd_clothes`
--

DROP TABLE IF EXISTS `ootd_clothes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ootd_clothes` (
  `ootd_clothes_id` bigint NOT NULL,
  `clothes_id` bigint DEFAULT NULL,
  `ootd_id` bigint DEFAULT NULL,
  PRIMARY KEY (`ootd_clothes_id`),
  KEY `FK78s1f0brhyy0u0dxsafo2y7ji` (`clothes_id`),
  KEY `FKg580205i5likmgsbcsky6rxw2` (`ootd_id`),
  CONSTRAINT `FK78s1f0brhyy0u0dxsafo2y7ji` FOREIGN KEY (`clothes_id`) REFERENCES `clothes` (`clothes_id`),
  CONSTRAINT `FKg580205i5likmgsbcsky6rxw2` FOREIGN KEY (`ootd_id`) REFERENCES `ootd` (`ootd_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ootd_clothes`
--

LOCK TABLES `ootd_clothes` WRITE;
/*!40000 ALTER TABLE `ootd_clothes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ootd_clothes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ootd_detail`
--

DROP TABLE IF EXISTS `ootd_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ootd_detail` (
  `ootd_detail_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `clothes_clothes_id` bigint DEFAULT NULL,
  `ootd_ootd_id` bigint DEFAULT NULL,
  `ootd_id` bigint NOT NULL,
  `clothes_id` bigint NOT NULL,
  PRIMARY KEY (`ootd_detail_id`,`ootd_id`,`clothes_id`),
  KEY `FK37o9k2tabbtk46axqb2hebxn9` (`clothes_clothes_id`),
  KEY `FKaxxrgwj1iob7jeb3dpqmo0j7o` (`ootd_ootd_id`),
  KEY `FK9dg3ctce7b37jddjgqinofgdi` (`clothes_id`),
  KEY `FKrjd6dvdgrliqk64hpr0cxclov` (`ootd_id`),
  CONSTRAINT `FK37o9k2tabbtk46axqb2hebxn9` FOREIGN KEY (`clothes_clothes_id`) REFERENCES `clothes` (`clothes_id`),
  CONSTRAINT `FK9dg3ctce7b37jddjgqinofgdi` FOREIGN KEY (`clothes_id`) REFERENCES `clothes` (`clothes_id`),
  CONSTRAINT `FKaxxrgwj1iob7jeb3dpqmo0j7o` FOREIGN KEY (`ootd_ootd_id`) REFERENCES `ootd` (`ootd_id`),
  CONSTRAINT `FKrjd6dvdgrliqk64hpr0cxclov` FOREIGN KEY (`ootd_id`) REFERENCES `ootd` (`ootd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ootd_detail`
--

LOCK TABLES `ootd_detail` WRITE;
/*!40000 ALTER TABLE `ootd_detail` DISABLE KEYS */;
INSERT INTO `ootd_detail` VALUES (1,NULL,NULL,NULL,NULL,1,1),(2,NULL,NULL,NULL,NULL,1,3),(3,NULL,NULL,NULL,NULL,1,5),(9,NULL,NULL,NULL,NULL,5,1),(12,NULL,NULL,NULL,NULL,5,3),(21,NULL,NULL,NULL,NULL,5,5);
/*!40000 ALTER TABLE `ootd_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preset`
--

DROP TABLE IF EXISTS `preset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preset` (
  `preset_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `preset_img_url` varchar(255) DEFAULT NULL,
  `preset_name` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`preset_id`),
  KEY `FKr2lbnvf5cndc0evpmvk85k3br` (`user_id`),
  CONSTRAINT `FKr2lbnvf5cndc0evpmvk85k3br` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preset`
--

LOCK TABLES `preset` WRITE;
/*!40000 ALTER TABLE `preset` DISABLE KEYS */;
INSERT INTO `preset` VALUES (18,'2024-04-03 02:28:42.008650','2024-04-03 08:52:53.250563','https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/18urFUQ','젤라또',4),(19,'2024-04-03 02:39:26.755417','2024-04-03 08:38:04.200342','https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/19','변경2',4),(20,'2024-04-03 02:42:08.102321','2024-04-03 02:42:08.102340','https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/noImg.png','이름없는 프리셋',4),(21,'2024-04-03 02:42:32.299529','2024-04-03 02:42:32.299552','https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/noImg.png','이름없는 프리셋',4),(22,'2024-04-03 02:42:43.021521','2024-04-03 02:42:43.021541','https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/noImg.png','이름없는 프리셋',4),(23,'2024-04-03 03:06:07.019433','2024-04-03 03:06:07.019540','https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/noImg.png','한글이름으로 전송',4);
/*!40000 ALTER TABLE `preset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preset_detail`
--

DROP TABLE IF EXISTS `preset_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preset_detail` (
  `preset_detail_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `clothes_clothes_id` bigint DEFAULT NULL,
  `preset_preset_id` bigint DEFAULT NULL,
  `preset_id` bigint NOT NULL,
  `clothes_id` bigint NOT NULL,
  PRIMARY KEY (`preset_detail_id`,`preset_id`,`clothes_id`),
  KEY `FKq97jmb94l0q0840x0e6mrkfi4` (`clothes_clothes_id`),
  KEY `FKouc34h9q28kcpoi5ekgujffq5` (`preset_preset_id`),
  KEY `FKkkny3y1gqfr0cu7uaiq6l82kp` (`clothes_id`),
  KEY `FK50s7ski63q582oqf7dwnbxeb0` (`preset_id`),
  CONSTRAINT `FK50s7ski63q582oqf7dwnbxeb0` FOREIGN KEY (`preset_id`) REFERENCES `preset` (`preset_id`),
  CONSTRAINT `FKkkny3y1gqfr0cu7uaiq6l82kp` FOREIGN KEY (`clothes_id`) REFERENCES `clothes` (`clothes_id`),
  CONSTRAINT `FKouc34h9q28kcpoi5ekgujffq5` FOREIGN KEY (`preset_preset_id`) REFERENCES `preset` (`preset_id`),
  CONSTRAINT `FKq97jmb94l0q0840x0e6mrkfi4` FOREIGN KEY (`clothes_clothes_id`) REFERENCES `clothes` (`clothes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preset_detail`
--

LOCK TABLES `preset_detail` WRITE;
/*!40000 ALTER TABLE `preset_detail` DISABLE KEYS */;
INSERT INTO `preset_detail` VALUES (61,NULL,NULL,NULL,NULL,19,43),(63,NULL,NULL,NULL,NULL,20,40),(64,NULL,NULL,NULL,NULL,20,41),(65,NULL,NULL,NULL,NULL,21,38),(66,NULL,NULL,NULL,NULL,21,42),(69,NULL,NULL,NULL,NULL,22,36),(70,NULL,NULL,NULL,NULL,18,44),(75,NULL,NULL,NULL,NULL,23,6),(76,NULL,NULL,NULL,NULL,23,5),(77,NULL,NULL,NULL,NULL,23,4);
/*!40000 ALTER TABLE `preset_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `account` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `height` float DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('ENABLE','DISABLE') DEFAULT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_token` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_dnq7r8jcmlft7l8l4j79l1h74` (`account`),
  UNIQUE KEY `UK_tlpl91ve4wp39ml55rngbfy5k` (`user_token`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2024-03-22 08:50:02.349595','2024-03-22 08:50:02.349679','lurel',NULL,NULL,'rainbo','ENABLE','jinu','cli_SMLLH7ojncOZPxH8'),(2,'2024-03-28 07:11:07.968370','2024-03-28 07:11:07.968467','zxcvd',NULL,NULL,'$2a$10$vG2COURz8XYOJdZNd..dEej3gF9KZrUYCdqEc51MMUz0U/BDjCGPW','ENABLE','zxc','cli_lCJvujs8Ls0Z8u5j'),(3,'2024-03-28 08:51:50.069613','2024-03-28 08:51:50.069698','string',NULL,NULL,'$2a$10$r20/0/6ZTrejIMT/BfEavuZvV0i/209KX8HW6cq5.Ih3R43mBCRue','ENABLE','string','cli_uMFZLWGPyuVnlkOB'),(4,'2024-03-29 06:14:50.480943','2024-03-29 06:14:50.481040','abcd1234',NULL,NULL,'$2a$10$EtkJfsPPcgME..oD5AieWe4k9Zx7SHrjtbrmLHhCIFUx3bYfNUJzq','ENABLE','handcream','cli_PCs9j0QFoOkhHZKO'),(5,'2024-03-31 08:04:01.180802','2024-03-31 08:04:01.180881','asdfg',NULL,NULL,'$2a$10$uqP1mG5TA4G938fQHvEafuURZPndE9OPNJbEvQohqMuJscEp3rZYW','ENABLE','fwafawf','cli_jTEcFTiodLKiafu9'),(6,'2024-03-31 08:21:24.448263','2024-03-31 08:21:24.448306','ing',NULL,NULL,'$2a$10$8IBC8DVSdNhvShDvBnhTGOmKKQcWnEDIs2cw3tozcPdvAD3BN2LrW','ENABLE','ing','cli_M9Lh0ov88XrDDGTG'),(7,'2024-03-31 10:02:56.244144','2024-03-31 10:02:56.244240','asdf11',NULL,NULL,'$2a$10$3ALeL8tMnRGthBFVecT3COB8sMIF4WtiSEPRRBC5p/aQUDupLSZaa','ENABLE','asdf11','cli_0IJ9rOuyg8s58aSl'),(8,'2024-04-02 06:51:26.809699','2024-04-02 06:51:26.809781','aaaa',NULL,NULL,'$2a$10$gUy9J.BS1vaa8m27rRmhvOSHZ2jXnk9bt2NspgbWUFu43tIKzbOpi','ENABLE','aaaa','cli_Q8JiF2esn7d13HQu'),(9,'2024-04-03 07:57:56.427580','2024-04-03 07:57:56.427636','test1',NULL,NULL,'$2a$10$0dYk6ZUY5pF2GtzgrtfDIOi.yjMsBxvR8.MofoUuxsxjBgARgoIHK','ENABLE','test1','cli_IUHhkuZklg4KzRjp');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03 20:09:32
