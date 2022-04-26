<?php

require_once('functions.php');
require_once('db_connect.php');

$table = 'users';
$limit = 3;
$curPage = 1;
$skip = $limit * ($curPage - 1);
$arr = $db->query("SELECT * FROM $table LIMIT $skip, $limit")->fetchAll();
$allRows = $db->query("SELECT COUNT(*) FROM $table")->fetch(PDO::FETCH_COLUMN);
$lastPage = ceil($allRows / $limit);

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
foreach($arr as $user) {
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

<?php

require_once('pagination.php');

?>
