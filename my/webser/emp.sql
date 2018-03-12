-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2018 at 02:17 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `id` int(10) NOT NULL,
  `ename` varchar(100) NOT NULL,
  `esalary` int(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  `file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`id`, `ename`, `esalary`, `position`, `file`) VALUES
(1, 'John', 6000, 'dev', ''),
(2, 'John', 3100, 'dev', ''),
(3, 'John', 10054, 'dev', ''),
(4, 'John', 3600, 'dev', ''),
(5, 'Peter', 4200, 'test', ''),
(6, 'Amy', 3500, 'wri', ''),
(7, 'Hannah', 3000, 'ios', ''),
(8, 'Michael', 5400, 'ano', ''),
(9, 'sadsa', 5200, 'dev', ''),
(10, 'Peter', 19004, 'test', ''),
(11, 'Amy', 20000, 'wri', ''),
(12, 'Hannah', 3000, 'ios', ''),
(13, 'Michael', 5400, 'ano', ''),
(14, 'John', 10054, 'dev', ''),
(15, 'Peter', 19004, 'test', ''),
(16, 'Amy', 20000, 'wri', ''),
(17, 'Hannah', 3000, 'ios', ''),
(18, 'sdfsdfdf', 5400, 'ano', ''),
(19, 'John', 10054, 'dev', ''),
(20, 'Peter', 19004, 'test', ''),
(21, 'Amy', 20000, 'wri', ''),
(22, 'Hannah', 3000, 'ios', ''),
(23, 'Michael', 5400, 'ano', ''),
(24, 'John', 10054, 'dev', ''),
(25, 'Peter', 19004, 'test', ''),
(26, 'Amy', 20000, 'wri', ''),
(27, 'Hannah', 3000, 'ios', ''),
(28, 'Michael', 5400, 'ano', ''),
(29, 'John', 10054, 'dev', ''),
(30, 'Peter', 19004, 'test', ''),
(31, 'Amy', 20000, 'wri', ''),
(32, 'Hannah', 3000, 'ios', ''),
(33, 'Michael', 5400, 'ano', ''),
(34, 'erswa', 11056, '', ''),
(35, 'erswa', 11056, '', ''),
(36, 'John5', 11056, '', ''),
(37, 'John58', 11056, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emp`
--
ALTER TABLE `emp`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
