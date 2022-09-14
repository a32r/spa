<?php

require_once('functions.php');
require_once('db_connect.php');

if (isset($_POST['page'])) {
	$curPage = $_POST['page'];
}
if (isset($_POST['table'])) {
	$table = $_POST['table'];
}
if (isset($_POST['limit'])) {
	$limit = $_POST['limit'];
}

$skip = $limit * ($curPage - 1);
$arr = $db->query("SELECT * FROM $table LIMIT $skip, $limit")->fetchAll();
$allRows = $db->query("SELECT COUNT(*) FROM $table")->fetch(PDO::FETCH_COLUMN);
$lastPage = ceil($allRows / $limit);

if ($curPage == 1) {
	$prevDisabled = "disabled";
	$firstPageHidden = $prevDotsHidden = $prevPageHidden = "hidden";
}
if ($curPage - 1 == 1) {
	$firstPageHidden = $prevDotsHidden = "hidden";
}
if ($curPage - 2 == 1) {
	$firstPageHidden = "hidden";
}
if ($curPage + 2 == $lastPage) {
	$lastPageHidden = "hidden";
}
if ($curPage + 1 == $lastPage) {
	$lastPageHidden = $nextDotsHidden = "hidden";
}
if ($curPage == $lastPage) {
	$nextDisabled = "disabled";
	$lastPageHidden = $nextDotsHidden = $nextPageHidden = "hidden";
}

if (isset($_POST['staff']) && $_POST['staff'] == "pagination") {
	require_once('../tpl/pagination.tpl');
} else {
	require_once('rows.php');
}

?>
