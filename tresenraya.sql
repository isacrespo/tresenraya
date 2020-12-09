-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 09, 2020 at 09:03 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tresenraya`
--

-- --------------------------------------------------------

--
-- Table structure for table `partida`
--

CREATE TABLE `partida` (
  `id` int(11) NOT NULL,
  `nombreJugador1` varchar(25) NOT NULL,
  `simboloJugador1` varchar(1) NOT NULL,
  `nombreJugador2` varchar(25) NOT NULL,
  `simboloJugador2` varchar(1) NOT NULL,
  `casilla1` varchar(1) NOT NULL,
  `casilla2` varchar(1) NOT NULL,
  `casilla3` varchar(1) NOT NULL,
  `casilla4` varchar(1) NOT NULL,
  `casilla5` varchar(1) NOT NULL,
  `casilla6` varchar(1) NOT NULL,
  `casilla7` varchar(1) NOT NULL,
  `casilla8` varchar(1) NOT NULL,
  `casilla9` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `partida`
--

INSERT INTO `partida` (`id`, `nombreJugador1`, `simboloJugador1`, `nombreJugador2`, `simboloJugador2`, `casilla1`, `casilla2`, `casilla3`, `casilla4`, `casilla5`, `casilla6`, `casilla7`, `casilla8`, `casilla9`) VALUES
(1, 'Humano', 'X', 'Machine', 'O', 'X', '-', 'O', '-', 'O', 'X', 'O', 'X', '-'),
(2, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'),
(3, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'X', 'O', '-', 'O', '-', '-'),
(4, 'Humano', 'X', 'Machine', 'O', 'O', '-', '-', 'X', 'O', '-', 'X', 'X', 'O'),
(5, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O', '-', 'X'),
(6, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', '-', 'X', '-', '-'),
(7, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', '-', 'O', 'O', 'X'),
(8, 'Humano', 'X', 'Machine', 'O', 'X', '-', 'O', 'X', 'X', 'O', '-', '-', 'O'),
(9, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', '-', 'O', 'X', 'O', 'X', 'O'),
(10, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', '-', 'O', '-', 'O'),
(11, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'),
(12, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', '-', 'O', '-', 'O', '-', '-'),
(13, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', '-', 'O', '-', '-', '-', '-'),
(14, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', '-', 'O', '-', 'O', '-', '-'),
(15, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', '-', 'O', '-', '-', '-', 'O'),
(16, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', '-', 'O', '-', 'O', '-', '-'),
(17, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'),
(18, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'),
(19, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'),
(20, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'),
(21, 'Humano', 'X', 'Machine', 'O', '-', '-', 'O', '-', 'O', 'X', 'O', 'X', 'X'),
(22, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'),
(23, 'Humano', 'X', 'Machine', 'O', 'X', '-', 'O', 'X', 'X', 'O', '-', '-', 'O'),
(24, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'),
(25, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'X', 'X', 'O', '-', 'O', 'X', 'O'),
(26, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'),
(27, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'X', '-', 'X'),
(28, 'Humano', 'X', 'Machine', 'O', '-', 'X', 'X', 'O', 'O', 'O', 'O', 'X', 'X'),
(29, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', '-', 'O', '-', '-'),
(30, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'),
(31, 'Humano', 'X', 'Machine', 'O', 'X', '-', '-', '-', 'O', '-', 'O', '-', 'X'),
(32, 'Humano', 'X', 'Machine', 'O', 'O', '-', 'X', '-', 'O', '-', 'X', 'X', 'O'),
(33, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'),
(34, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'),
(35, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'),
(36, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'),
(37, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'),
(38, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'),
(39, 'Jugador 1', 'X', 'Jugador 2', 'O', 'X', '-', '-', 'O', 'O', 'O', 'X', 'X', '-'),
(40, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'),
(41, 'Jugador 1', 'X', 'Jugador 2', 'O', 'X', '-', '-', 'O', 'X', '-', 'O', '-', 'X'),
(42, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(43, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(44, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(45, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(46, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(47, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(48, 'Humano', 'X', 'Machine', 'O', 'X', 'X', '-', 'X', 'O', 'X', 'O', 'O', 'O'),
(49, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'),
(50, 'Jugador 1', 'X', 'Jugador 2', 'O', 'X', 'O', '-', 'O', 'X', '-', '-', '-', 'X'),
(51, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'X', '-', 'O', 'O', 'O', '-', 'X'),
(52, 'Humano', 'X', 'Machine', 'O', 'X', '-', 'O', 'X', 'O', '-', 'X', 'O', 'X'),
(53, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'),
(54, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', '-', 'X', 'O', 'X', 'O', 'O'),
(55, 'Luis', 'X', 'Inma', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'),
(56, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'),
(57, 'Humano', 'X', 'Machine', 'O', 'O', 'O', 'O', '-', 'X', '-', '-', 'X', 'X'),
(58, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'),
(59, 'Humano', 'X', 'Machine', 'O', 'X', '-', 'O', 'X', 'O', '-', 'X', 'O', 'X'),
(60, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'),
(61, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'),
(62, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O', 'X'),
(63, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'),
(64, 'Humano', 'X', 'Machine', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'),
(65, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'),
(66, 'Isa', 'X', 'Felipe', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', '-', '-'),
(67, 'Isa', 'X', 'Felipe', 'O', 'X', '-', 'O', 'X', 'X', 'O', '-', '-', 'O'),
(68, 'Humano', 'X', 'Machine', 'O', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'),
(69, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', '-', 'O', 'X', 'O', '-', '-'),
(70, 'Humano', 'X', 'Machine', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `partida`
--
ALTER TABLE `partida`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `partida`
--
ALTER TABLE `partida`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
