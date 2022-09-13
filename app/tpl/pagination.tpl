<ul class="pagination justify-content-center" <?=$tableHidden?>>
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
