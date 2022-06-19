// Define variables
content = false;

// Temporary load to .content
// $('.content').load('app/php/send.php');

$('#send').click(function() {
	if (content) {
		if ($('.content .send').length == 0) {
			$('.content').load('app/php/send.php');
		} else {
			$('.content').empty();
			content = false;
		}
	} else {
		$('.content').load('app/php/send.php');
		content = true;
	}
});

$('#get').click(function() {
	if (content) {
		if ($('.content .get').length == 0) {
			$('.content').load('app/php/login.php');
		} else {
			$('.content').empty();
			content = false;
		}
	} else {
		$('.content').load('app/php/login.php');
		content = true;
	}
});
