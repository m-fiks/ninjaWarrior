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

INSERT INTO ninjaTables (username, score) VALUES ('ninja0', '200');
INSERT INTO ninjaTables (username, score) VALUES ('ninja2', '200');
INSERT INTO ninjaTables (username, score) VALUES ('ninja3', '200');
INSERT INTO ninjaTables (username, score) VALUES ('ninja4', '200');
INSERT INTO ninjaTables (username, score) VALUES ('ninja5', '200');
INSERT INTO ninjaTables (username, score) VALUES ('ninja6', '200');
INSERT INTO ninjaTables (username, score) VALUES ('ninja7', '200');

