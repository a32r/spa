<?php

$curPage = 1;
$skip = $limit * ($curPage - 1);
$arr = $db->query("SELECT * FROM $table LIMIT $skip, $limit")->fetchAll();
$allRows = $db->query("SELECT COUNT(*) FROM $table")->fetch(PDO::FETCH_COLUMN);
$lastPage = ceil($allRows / $limit);

if($curPage == 1) {
	$prevDisabled = "disabled";
	$firstPageHidden = $prevDotsHidden = $prevPageHidden = "hidden";
} elseif($curPage - 1 == 1) {
	$firstPageHidden = $prevDotsHidden = "hidden";
} elseif($curPage - 2 == 1) {
	$firstPageHidden = "hidden";
} elseif($curPage + 2 == $lastPage) {
	$lastPageHidden = "hidden";
} elseif($curPage + 1 == $lastPage) {
	$lastPageHidden = $nextDotsHidden = "hidden";
} elseif($curPage == $lastPage) {
	$nextDisabled = "disabled";
	$lastPageHidden = $nextDotsHidden = $nextPageHidden = "hidden";
}

?>
