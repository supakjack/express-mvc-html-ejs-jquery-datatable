SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET
    AUTOCOMMIT = 0;

START TRANSACTION;

SET
    time_zone = "+00:00";

CREATE TABLE users (
    id INT(8) UNSIGNED AUTO_INCREMENT NOT NULL,
    gender ENUM('male', 'female ','other') NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    username VARCHAR(20) NOT NULL,
    firstname VARCHAR(50) NULL,
    lastname VARCHAR(50) NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telephone VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    birthDate TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    createDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updateDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    createBy INT(8) UNSIGNED NOT NULL,
    updateBy INT(8) UNSIGNED NOT NULL,
    status ENUM('active', 'inactive', 'delete') DEFAULT 'active',
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE utf8_general_ci;
