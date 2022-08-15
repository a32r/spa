<div class="wrap">
	<div class="users">
		<table>
			<thead>
				<tr>
					<th>№ п/п</th>
					<th>Пользователь</th>
					<th>E-Mail</th>
					<th>Примечание</th>
				</tr>
			</thead>
			<tbody>

			<?php
				require_once('db_get.php');
			?>

			</tbody>
		</table>
	</div>
</div>

<?php
	require_once('../tpl/pagination.tpl');
?>
