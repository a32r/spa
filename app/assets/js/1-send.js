$('.content').on('blur', '.send .name', function() {
	name_js = $(this).val();
});

$('.content').on('blur', '.send .email', function() {
	email_js = $(this).val();
});

$('.content').on('blur', '.send .description', function() {
	description_js = $(this).val();
});

$('.content').on('click', '.send input[value="Отправить"]', function(e) {
	e.preventDefault();
	if ( (typeof(name_js) !== 'undefined') && (name_js !== '') && (email_js !== '') && (description_js !== '')) {
		$.ajax({
			url: 'app/php/send.php',
			method: 'post',
			data: {
				name: name_js,
				email: email_js,
				description: description_js
			}
		})
			.done(function(data) {
				console.log(data);
				if(data) {
					if ($('.send .message').length == 0) {
						$('.send').append('<div class="message">Данные успешно внесены в базу</div>');
						setTimeout(function() {
							$('.send .message').remove();
						}, 1000);
					}
					$.ajax({
						url: 'app/php/db_get.php',
						method: 'post',
						data: { 
							page: data,
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
							page: data,
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
				}
			})
			.fail(function() {
				if ($('.send .message').length == 0) {
					$('.send').append('<div class="message">Ошибка ввода данных</div>');
					setTimeout(function() {
						$('.send .message').remove();
					}, 1000);
				}
			});
		name_js = undefined;
		email_js = undefined;
		description_js = undefined;
		$('.send .name, .send .email, .send .description').val('');
	} else {
		if ($('.send .message').length == 0) {
			$('.send').append('<div class="message">Необходимо заполнить все поля</div>');
			setTimeout(function() {
				$('.send .message').remove();
			}, 1000);
		}
	}
});
$('.content').on('click', '.send input[value="Очистить БД"]', function(e) {
	e.preventDefault();
	$.ajax({
		url: 'app/php/send.php',
		method: 'post',
		data: {
			truncate: 1
		}
	})
		.done(function(data) {
			if(data) {
				if ($('.send .message').length == 0) {
					$('.send').append('<div class="message">База данных успешно очищена</div>');
					setTimeout(function() {
						$('.send .message').remove();
					}, 1000);
				}
			}
		})
		.fail(function() {
			if ($('.send .message').length == 0) {
				$('.send').append('<div class="message">Ошибка. Операция не выполнена</div>');
				setTimeout(function() {
					$('.send .message').remove();
				}, 1000);
			}
		});
});
