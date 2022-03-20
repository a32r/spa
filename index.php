<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="app/assets/css/app.min.css">
	<title>Ajax Test</title>
</head>
<body>
<form id="send" method="post" action="">

	<div class="container">
		<div>Форма ввода данных</div>
		<div>
			<label for="name">Имя</label>
			<input class="form-control" type="text" form="send" name="name" id="name" placeholder="Имя">
		</div>
		<div>
			<label for="email">Email</label>
			<input class="form-control" type="text" form="send" name="email" id="email" placeholder="Email">
		</div>
		<div>
			<label for="description">Описание</label>
			<textarea class="form-control" form="send" name="description" rows="5" id="description" placeholder="Описание"></textarea>
		</div>
		<input class="btn btn-primary" type="submit" form="send" value="Отправить">
	</div>

	<script src="app/assets/js/app.min.js"></script>
</body>
</html>
