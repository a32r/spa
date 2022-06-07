$('.content').on('click', '.pagination a', function(e) {
	e.preventDefault();
	page_js = $(this).text();
	direction_js = $(this).attr('data-direction');
	if(typeof direction_js !== 'undefined') {
		page_js = direction_js;
	}
	$.ajax({
		url: 'app/php/db_get.php',
		method: 'post',
		data: { 
			page: page_js
		}
	})
		.done(function(data) {
			$('tbody').html(data);
		})
		.fail(function(data) {
			$('tbody').html(data);
		});
	$.ajax({
		url: 'app/php/db_get.php',
		method: 'post',
		data: { 
			page: page_js,
			staff: "pagination"
		}
	})
		.done(function(data) {
			$('.pag').html(data);
		})
		.fail(function(data) {
			$('.pag').html(data);
		})
})
