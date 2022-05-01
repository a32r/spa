$('.content').on('click', '.pagination a', function(e) {
	e.preventDefault();
	page_js = $(this).text();
	direction_js = $(this).attr('data-direction');
	if(typeof direction_js !== 'undefined') {
		page_js = direction_js;
	}
	$.ajax({
		url: 'app/php/pagination.php',
		method: 'post',
		data: { page: page_js }
	})
		.done(function(data) {
			$('.content').load('app/php/users.php');
		})
})
