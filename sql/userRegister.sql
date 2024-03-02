CREATE DATABASE registration;

USE registration;

CREATE TABLE users (
   id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   firstname VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   birthday DATE,
   gender VARCHAR(6),
   phone VARCHAR(20),
   residence VARCHAR(50),
   email VARCHAR(100) NOT NULL UNIQUE,
   username VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL
);