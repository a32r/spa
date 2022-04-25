<ul class="pagination justify-content-center">
	<li class="page-item"><a class="page-link" href="#">Назад</a></li>

<?php
for ($page=1; $page <= $pages; $page++) {
	if($page == $curPage)  {
		$active = "active";
	} else {
		unset($active);
	}
	echo <<<PAGINATION
	<li class="page-item $active">
		<a class="page-link" href="#">
			$page
		</a>
	</li>
	PAGINATION;
}
?>

	<li class="page-item"><a class="page-link" href="#">Вперед</a></li>
</ul>
