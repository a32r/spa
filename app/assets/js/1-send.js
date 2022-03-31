send = false;
$('#send').click(function() {
	if (send) {
		$('.content').empty();
		send = false;
	} else {
		$('.content').load('app/php/send.php');
		send = true;
	}
});

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
	if (name_js && email_js && description_js) {
		$.ajax({
			url: 'app/php/send.php',
			method: 'post',
			data: {
				name: name_js,
				email: email_js,
				description: description_js
			}
		})
			.done(function() {
				if ($('.send .message').length == 0) {
					$('.send').append('<div class="message">Данные успешно внесены в базу</div>');
					setTimeout(function() {
						$('.send .message').remove();
					}, 1000);
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
	};
});
