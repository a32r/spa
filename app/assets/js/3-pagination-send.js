$('.content').on('click', '.records a', function(e) {
	e.preventDefault();
	cur_page_js = Number($('.active').text());
	page_js = $(this).text();
	direction_js = $(this).attr('data-direction');
	if(direction_js == "next") {
		page_js = cur_page_js + 1;
	} else if (direction_js == "prev") {
		page_js = cur_page_js - 1;
	}
	$.ajax({
		url: 'app/php/db_get.php',
		method: 'post',
		data: { 
			page: page_js,
			table: "send",
			limit: 3
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
			staff: "pagination",
			table: "send",
			limit: 3
		}
	})
		.done(function(data) {
			$('.pagination').replaceWith(data);
			$('.pagination').addClass('records');
		})
		.fail(function(data) {
			$('.pagination').replaceWith(data);
		})
})
