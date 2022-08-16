// Define variables
salt = 'j8eGr(4N*dLw'

$('.content').on('blur', '.get .login', function() {
	login_js = $(this).val();
});

$('.content').on('blur', '.get .pass', function() {
	pass_js = $(this).val();
});

$('.content').on('click', '.get input[value="Вход"]', function(e) {
	e.preventDefault();
	if ((typeof(login_js) !== 'undefined') && (login_js !== '') && (pass_js !== '')) {
		var md = forge.md.sha256.create();
		md.update(salt + pass_js);
		hash_js = md.digest().toHex();
		$.ajax({
			url: 'app/php/login.php',
			method: 'post',
			data: {
				login: login_js,
				hash: hash_js
			}
		})
			.done(function(data) {
				if(data) {
					message = "Успешный вход";
				} else {
					message = "Неверные логин и пароль";
				}
				if ($('.get .message').length == 0) {
					$('.get').append('<div class="message"></div>');
					$('.get .message').text(message);
					setTimeout(function() {
						$('.get .message').remove();
						if(data) {
							$('.content').load('app/php/users.php');
							setTimeout(function() {
								$('.pagination').addClass('records-users');
							}, 300);
						}
					}, 1000);
				}
			})
			.fail(function() {
				if ($('.get .message').length == 0) {
					$('.get').append('<div class="message">Произошла ошибка. Попробуйте снова</div>');
					setTimeout(function() {
						$('.get .message').remove();
					}, 1000);
				}
			});
		login_js = undefined;
		pass_js = undefined;
		hash_js = undefined;
		$('.get .login, .get .pass').val('');
	} else {
		if ($('.get .message').length == 0) {
			$('.get').append('<div class="message">Необходимо заполнить все поля</div>');
			setTimeout(function() {
				$('.get .message').remove();
			}, 1000);
		}
	}
});
