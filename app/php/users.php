<?php

$table = 'users';
$limit = 3;

require_once('functions.php');
require_once('db_connect.php');
require_once('pagination.php');

echo <<<HEADER
<div class="users">
	<table>
		<tr>
			<th>№ п/п</th>
			<th>Пользователь</th>
			<th>E-Mail</th>
			<th>Примечание</th>
		</tr>
HEADER;

foreach($arr as $user) {
	$id = $user['id'];
	$name = $user['name'];
	$email = $user['email'];
	$description = $user['description'];

	echo <<<ROWS
	<tr>
		<td>$id</td>
		<td>$name</td>
		<td>$email</td>
		<td>$description</td>
	</tr>
	ROWS;
}

echo <<<FOOTER
	</table>
</div>
FOOTER;

require_once('../tpl/pagination.tpl');

?>
