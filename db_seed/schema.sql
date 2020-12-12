DROP DATABASE IF EXISTS loan_db;
CREATE DATABASE loan_db;

USE loan_db;

CREATE TABLE loan_submissions (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state_abbrev VARCHAR(2) NOT NULL,
    zip_code VARCHAR(30) NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    dob VARCHAR(30) NOT NULL,
    ssn VARCHAR(4) NOT NULL,
    pre_tax_income INT NOT NULL
)