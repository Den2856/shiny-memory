<?php
// Настройки базы данных
define('DB_HOST', 'MariaDB-11.2');
define('DB_NAME', 'LOKI');
define('DB_USER', 'root');
define('DB_PASS', '');

try {

    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8", DB_USER, DB_PASS);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}
catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}
?>