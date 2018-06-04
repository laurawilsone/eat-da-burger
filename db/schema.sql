DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;



CREATE TABLE burger
 (
 	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (150) NOT NULL,
	devoured BOOLEAN,
    date TIMESTAMP,
	PRIMARY KEY (id)

);