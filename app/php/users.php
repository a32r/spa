<?php

require_once('functions.php');
require_once('db_connect.php');

$table = 'users';
$limit = '8';
$query = "SELECT * FROM $table LIMIT $limit";
$arr = $db->query($query)->fetchAll();

?>

<div class="users">
	<table>
		<tr>
			<th>№ п/п</th>
			<th>Пользователь</th>
			<th>E-Mail</th>
			<th>Примечание</th>
		</tr>

<?php

foreach($arr as $key => $user) {
	$id = $user['id'];
	$name = $user['name'];
	$email = $user['email'];
	$description = $user['description'];

	echo <<<ROW
	<tr>
		<td>$id</td>
		<td>$name</td>
		<td>$email</td>
		<td>$description</td>
	</tr>
	ROW;

}

?>

	</table>
</div>
