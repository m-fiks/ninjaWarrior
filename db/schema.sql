DROP DATABASE IF EXISTS ninjawarrior_db;
CREATE DATABASE ninjawarrior_db;
USE ninjawarrior_db;

CREATE TABLE ninjaTables
(
    id int NOT NULL AUTO_INCREMENT,
	username varchar (255) NOT NULL,
	score INTEGER,
    PRIMARY KEY(id), 
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO ninjaTables (username, score) VALUES ('salah', '200');
