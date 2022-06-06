<?php
if (isset($_POST['page'])) {
	$curPage = $_POST['page'];
} else {
	$curPage = 1;
}

if ($curPage == 1) {
	$prevDisabled = "disabled";
	$firstPageHidden = $prevDotsHidden = $prevPageHidden = "hidden";
} elseif ($curPage - 1 == 1) {
	$firstPageHidden = $prevDotsHidden = "hidden";
} elseif ($curPage - 2 == 1) {
	$firstPageHidden = "hidden";
} elseif ($curPage + 2 == $lastPage) {
	$lastPageHidden = "hidden";
} elseif ($curPage + 1 == $lastPage) {
	$lastPageHidden = $nextDotsHidden = "hidden";
} elseif ($curPage == $lastPage) {
	$nextDisabled = "disabled";
	$lastPageHidden = $nextDotsHidden = $nextPageHidden = "hidden";
}

?>

<ul class="pagination justify-content-center">
	<li class="page-item <?=$prevDisabled?>"><a data-direction="prev" class="page-link" href="#">Назад</a></li>
	<li class="page-item" <?=$firstPageHidden?>><a class="page-link" href="#">1</a></li>
	<li class="page-item disabled" <?=$prevDotsHidden?>><a class="page-link" href="#">...</a></li>
	<li class="page-item" <?=$prevPageHidden?>><a class="page-link" href="#"><?=$curPage-1?></a></li>
	<li class="page-item active"><a class="page-link" href="#"><?=$curPage?></a></li>
	<li class="page-item" <?=$nextPageHidden?>><a class="page-link" href="#"><?=$curPage+1?></a></li>
	<li class="page-item disabled" <?=$nextDotsHidden?>><a class="page-link" href="#">...</a></li>
	<li class="page-item" <?=$lastPageHidden?>><a class="page-link" href="#"><?=$lastPage?></a></li>
	<li class="page-item <?=$nextDisabled?>"><a data-direction="next" class="page-link" href="#">Вперед</a></li>
</ul>
