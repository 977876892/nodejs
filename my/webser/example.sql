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
-- Table structure for table `example`
--

CREATE TABLE `example` (
  `id` int(10) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `number` int(10) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `example`
--

INSERT INTO `example` (`id`, `name`, `email`, `number`, `created_at`, `updated_at`) VALUES
(23, 'John', 'Highway 71', 0, '0000-00-00', '0000-00-00'),
(24, 'Peter', 'Lowstreet 4', 0, '0000-00-00', '0000-00-00'),
(25, 'Amy', 'Apple st 652', 0, '0000-00-00', '0000-00-00'),
(26, 'Hannah', 'Mountain 21', 0, '0000-00-00', '0000-00-00'),
(27, 'Michael', 'Valley 345', 0, '0000-00-00', '0000-00-00'),
(28, 'Sandy', 'Ocean blvd 2', 0, '0000-00-00', '0000-00-00'),
(29, 'Betty', 'Green Grass 1', 0, '0000-00-00', '0000-00-00'),
(30, 'Richard', 'Sky st 331', 0, '0000-00-00', '0000-00-00'),
(31, 'Susan', 'One way 98', 0, '0000-00-00', '0000-00-00'),
(32, 'Vicky', 'Yellow Garden 2', 0, '0000-00-00', '0000-00-00'),
(33, 'Ben', 'Park Lane 38', 0, '0000-00-00', '0000-00-00'),
(34, 'William', 'Central st 954', 0, '0000-00-00', '0000-00-00'),
(35, 'Chuck', 'Main Road 989', 0, '0000-00-00', '0000-00-00'),
(36, 'Viola', 'Sideway 1633', 0, '0000-00-00', '0000-00-00'),
(101, '', '', 0, '0000-00-00', '0000-00-00'),
(107, 'sitaram', 'sit@gail.com', 14, '2018-03-02', '2018-03-02'),
(106, 'sitaram', 'sit@gail.com', 43, '2018-03-02', '2018-03-02'),
(104, 'sitaram', 'sit@gail.com', 55, '2018-03-02', '2018-03-02'),
(17, 'Susan', 'One way 98', 355, '0000-00-00', '0000-00-00'),
(103, 'sitaram', 'sit@gail.com', 3534, '2018-03-02', '2018-03-02'),
(108, 'sitaram', 'sit@gail.com', 4355, '2018-03-02', '2018-03-02'),
(18, 'Vicky', 'Yellow Garden 2', 12312, '0000-00-00', '0000-00-00'),
(13, 'Michael', 'Valley 345', 23423, '0000-00-00', '0000-00-00'),
(102, 'sitaram', 'sit@gail.com', 34543, '2018-03-02', '2018-03-02'),
(16, 'Richard', 'Sky st 331', 42342, '0000-00-00', '0000-00-00'),
(15, 'Betty', 'Green Grass 11', 42424, '0000-00-00', '0000-00-00'),
(20, '', 'Central st 954', 45435, '0000-00-00', '0000-00-00'),
(21, 'Chuck', 'Main Road 989', 213123, '0000-00-00', '0000-00-00'),
(105, 'Hannah', 'sit@gail.com', 345345, '2018-03-02', '2018-03-02'),
(19, 'Hannah', 'Park Lane 38', 435435, '0000-00-00', '0000-00-00'),
(114, 'erererer', 'rerersds@sdfsdf', 535223, '2018-03-08', '2018-03-08'),
(11, 'Hannah', 'Apple st 652', 657657, '0000-00-00', '0000-00-00'),
(12, 'Hannah', 'Mountain 21', 675743, '0000-00-00', '0000-00-00'),
(14, 'afg0', 'Ocean blvd 2', 3242342, '0000-00-00', '0000-00-00'),
(109, 'sitaram', 'sit@gail.com', 34543543, '2018-03-02', '2018-03-02'),
(115, 'twwr', 'tqwer@sdfsdf', 63611222, '2018-03-08', '2018-03-08'),
(111, 'erererer', 'rerersds@sdfsdf', 2147483647, '2018-03-08', '2018-03-08'),
(112, 'erererer', 'rerersds@sdfsdf', 2147483647, '2018-03-08', '2018-03-08'),
(113, 'erererer', 'rerersds@sdfsdf', 2147483647, '2018-03-08', '2018-03-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `example`
--
ALTER TABLE `example`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `example`
--
ALTER TABLE `example`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
