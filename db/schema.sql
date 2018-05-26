DROP DATABASE IF EXISTS ninjawarrior_db;
CREATE DATABASE ninjawarrior_db;
USE ninjawarrior_db;

CREATE TABLE ninjaInfo
(
    id int NOT NULL AUTO_INCREMENT,
	information varchar (255) NOT NULL,
	scores TEXT NOT NULL,
	PRIMARY KEY (id)
);