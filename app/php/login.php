<?php

require_once('functions.php');
require_once('db_connect.php');

if(!empty($_POST['login']) && !empty($_POST['hash'])) {
	$login_js = htmlspecialchars($_POST['login']);
	$hash_js = $_POST['hash'];
	die('1');
}

$query = "SELECT * FROM users";
$arr = $db->query($query)->fetch(PDO::FETCH_ASSOC);
$login = $arr['login'];
$hash = $arr['hash'];

?>

<div class="get card">
	<div>Форма входа</div>
	<div>
		<label for="login">Логин (Admin)</label>
		<input class="form-control login" type="text" name="login" placeholder="Admin" value="Admin">
	</div>
	<div>
		<label for="pass">Пароль (111)</label>
		<input class="form-control pass" type="password" name="pass" placeholder="111" value="111">
	</div>
	<input class="btn btn-primary" type="submit" value="Вход">
</div>
