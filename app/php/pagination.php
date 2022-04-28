<?php

$curPage = 1;
$skip = $limit * ($curPage - 1);
$arr = $db->query("SELECT * FROM $table LIMIT $skip, $limit")->fetchAll();
$allRows = $db->query("SELECT COUNT(*) FROM $table")->fetch(PDO::FETCH_COLUMN);
$lastPage = ceil($allRows / $limit);

if($curPage == 1) {
	$prevDisabled = "disabled";
} elseif($curPage == $lastPage) {
	$nextDisabled = "disabled";
}

?>
