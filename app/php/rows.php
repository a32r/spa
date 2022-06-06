<?php

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

?>
