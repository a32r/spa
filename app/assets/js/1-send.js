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
	if ((typeof name_js !== 'undefined') && (typeof email_js !== 'undefined') && (typeof description_js !== 'undefined')) {
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
				if(data) {
					if ($('.send .message').length == 0) {
						$('.send').append('<div class="message">Данные успешно внесены в базу</div>');
						setTimeout(function() {
							$('.send .message').remove();
						}, 1000);
					}
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
