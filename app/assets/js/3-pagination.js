$('.content').on('click', '.pagination a', function(e) {
	e.preventDefault();
	curPage_js = $(this).text();
	direction_js = $(this).attr('data-direction');
	$.ajax({
		url: 'app/php/users.php',
		method: 'post',
		data: {
			curPage: curPage_js,
			direction: direction_js
		}
	})
		.done(function(data) {
			console.log('Success!');
		})
})
