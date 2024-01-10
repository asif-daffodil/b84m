-- Create Database and Tables for sms84a
CREATE DATABASE sms84a

-- Drop Database sms84a
-- DROP DATABASE sms84a;

-- query Create Table students
CREATE TABLE `students` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `gender` VARCHAR(6) DEFAULT 'Male',
    `city` VARCHAR(100) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`)
);

-- query to drop the table students
-- DROP TABLE students;

-- Query to insert single data into students table
INSERT INTO `students` (`name`,`email`,`phone`,`gender`,`city`) VALUES ('Sohebul', 'shohebul@gmail.com', '01711111111', 'Male', 'Chadpur');

-- Query to insert multiple data into students table
INSERT INTO `students`(`name`, `email`, `phone`, `gender`, `city`) VALUES 
('Hasnat', 'hasnat@gmail.com', '0188888888', 'Male', 'Cumilla'), 
('Mawa', 'mawa@gmail.com', '01111111111', 'Female', 'Noyakhali'), 
('Asif', 'asif@gmail.com', '01999999999', 'Male', 'Barishal')

-- Query to select data from students table
SELECT * FROM `students`