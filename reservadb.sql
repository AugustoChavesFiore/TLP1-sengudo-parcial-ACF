-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-06-2023 a las 21:36:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `nombre` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `idReserva` int(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `deletedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`nombre`, `fecha`, `idReserva`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('Augusto', '0000-00-00', 12, 0, '0000-00-00', '0000-00-00', '0000-00-00'),
('Augusto', '0000-00-00', 12, 0, '0000-00-00', '0000-00-00', '0000-00-00'),
('Augusto', '0000-00-00', 0, 1, '0000-00-00', '0000-00-00', '0000-00-00'),
('Augusto', '0000-00-00', 10, 1, '0000-00-00', '0000-00-00', '0000-00-00'),
('Augusto', '0000-00-00', 10, 1, '0000-00-00', '0000-00-00', '0000-00-00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
