salt = 'j8eGr(4N*dLw'

$('.get .name').blur(function() {
	login_js = $(this).val();
});

$('.get .pass').blur(function() {
	pass_js = $(this).val();
});

$('.get input[value="Вход"]').click(function(e) {
	e.preventDefault();
	// console.log(pass_js);
	// console.log(salt);
	// console.log(salt + pass_js);
	console.log(login_js);
	var md = forge.md.sha256.create();
	md.update(login_js);
	console.log(md.digest().toHex());
	// str=JSON.stringify(md,null,4);
	// console.log(str);
});

