salt = 'j8eGr(4N*dLw'

$('.get .name').blur(function() {
	login_js = $(this).val();
});

$('.get .pass').blur(function() {
	pass_js = $(this).val();
});

$('.get input[value="Вход"]').click(function(e) {
	e.preventDefault();
	console.log(login_js);
	console.log(pass_js);
	console.log(salt);
	console.log(salt + pass_js);
});
