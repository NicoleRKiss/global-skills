-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-08-2020 a las 00:36:28
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `globalskills_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `salePrice` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subTotal` int(11) DEFAULT NULL,
  `state` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `salePrice`, `quantity`, `subTotal`, `state`, `productId`, `userId`, `cartId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 5000, 1, 5000, 1, 12, 11, NULL, '2020-08-21 20:38:15', '2020-08-21 20:38:15', NULL),
(2, 2500, 1, 2500, 1, 10, 11, NULL, '2020-08-21 20:54:59', '2020-08-21 20:54:59', NULL),
(3, 4000, 1, 4000, 1, 24, 11, NULL, '2020-08-21 21:34:57', '2020-08-21 21:34:57', NULL),
(4, 4000, 2, 8000, 1, 24, 11, NULL, '2020-08-21 21:35:39', '2020-08-21 21:35:39', NULL),
(5, 3000, 3, 9000, 1, 19, 12, NULL, '2020-08-21 21:43:10', '2020-08-21 21:43:10', NULL),
(6, 5000, 1, 5000, 1, 15, 11, NULL, '2020-08-23 22:03:17', '2020-08-23 22:03:17', NULL),
(7, 5000, 1, 5000, 1, 15, 11, NULL, '2020-08-23 22:15:03', '2020-08-23 22:15:03', NULL),
(8, 5000, 1, 5000, 1, 15, 11, NULL, '2020-08-23 22:22:07', '2020-08-23 22:22:07', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
