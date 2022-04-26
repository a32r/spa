<?php

require_once('functions.php');
require_once('db_connect.php');

$table = 'send';

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['description'])) {
	$name = htmlspecialchars($_POST['name']);
	$email = $_POST['email'];
	$description = htmlspecialchars($_POST['description']);
	$query = "INSERT INTO $table VALUES (NULL, ?, ?, ?)";
	$stmt = $db->prepare($query);
	$stmt->execute([$name, $email, $description]);

	if($stmt) {
		exit(true);
	}
}

?>

<div class="send card">
	<div>Форма ввода данных</div>
	<div>
		<label for="name">Имя</label>
		<input class="form-control name" type="text" name="name" placeholder="Имя">
	</div>
	<div>
		<label for="email">Email</label>
		<input class="form-control email" type="text" name="email" placeholder="Email">
	</div>
	<div>
		<label for="description">Описание</label>
		<textarea class="form-control description" name="description" rows="5" placeholder="Описание"></textarea>
	</div>
	<input class="btn btn-primary" type="submit" value="Отправить">
</div>
