<?php

require_once('functions.php');
require_once('db_connect.php');

if(!empty($_POST['login']) && !empty($_POST['hash'])) {
	$login_js = htmlspecialchars($_POST['login']);
	$hash_js = $_POST['hash'];

	$query = "SELECT * FROM login";
	$arr = $db->query($query)->fetch(PDO::FETCH_ASSOC);
	$login = $arr['login'];
	$hash = $arr['hash'];

	if($login_js == $login && $hash_js == $hash) {
		exit(true);
	}
	else {
		exit(false);
	}
}

require_once('../tpl/login_form.tpl');
?>
