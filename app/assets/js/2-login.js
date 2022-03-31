salt = 'j8eGr(4N*dLw'

$('.get .login').blur(function() {
	login_js = $(this).val();
});

$('.get .pass').blur(function() {
	pass_js = $(this).val();
});

$('.get input[value="Вход"]').click(function(e) {
	e.preventDefault();
	if (login_js && pass_js) {
		var md = forge.md.sha256.create();
		md.update(salt + pass_js);
		hash_js = md.digest().toHex();
		$.ajax({
			url: 'app/php/get_login.php',
			method: 'post',
			data: {
				login: login_js,
				hash: hash_js
			}
		})
			.done(function() {
				if ($('.get .message').length == 0) {
					$('.get').append('<div class="login"></div>');
					$('.get .login').load('app/php/get_login.php');
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
		// $('.get .login, .get .pass').val('');
	};
});

// Temporary hide send block
// $('.get').hide();
