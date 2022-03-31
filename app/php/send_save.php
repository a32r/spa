<?php

require_once('functions.php');
require_once('db_connect.php');

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['description'])) {
	$name = htmlspecialchars($_POST['name']);
	$email = $_POST['email'];
	$description = htmlspecialchars($_POST['description']);
	$query = "INSERT INTO send VALUES (NULL, ?, ?, ?)";
	$stmt = $db->prepare($query);
	$stmt->execute([$name, $email, $description]);
}

?>
