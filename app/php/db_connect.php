<?php

$dbHost = "localhost";
$dbName = "ajax1";
$dbUser = "root";
$dbPass = "";
$dbOpts = [
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

try {
	$db = new PDO(
		"mysql:host=$dbHost;dbname=$dbName;charset=utf8",
		"$dbUser",
		"$dbPass",
		$dbOpts
	);
}

catch (PDOException $e) {
	echo "Невозможно установить соединение с базой данных";
}
