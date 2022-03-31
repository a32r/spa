<?php

require_once('functions.php');
require_once('db_connect.php');

$hash = htmlspecialchars($_POST['hash']);
echo $hash;
?>
