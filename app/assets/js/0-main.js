// Define variables
content = false;

// Temporary load to .content
// $('.content').load('app/php/users.php');

$('#send').click(function() {
	if (content) {
		if ($('.content .send').length == 0) {
			$('.content').load('app/php/send.php');
			setTimeout(function() {
				$('.pagination').addClass('records');
			}, 1000);
		} else {
			$('.content').empty();
			content = false;
		}
	} else {
		$('.content').load('app/php/send.php');
		setTimeout(function() {
			$('.pagination').addClass('records');
		}, 1000);
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
