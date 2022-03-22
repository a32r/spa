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

			<nav class="nav">
				<li class="nav-item">Ввести данные</li>
				<li class="nav-item">Вывести данные</li>
			</nav>

			<div class="send">
				<div>Форма ввода данных</div>
				<div>
					<label for="name">Имя</label>
					<input class="form-control name" type="text" form="send" name="name" placeholder="Имя">
				</div>
				<div>
					<label for="email">Email</label>
					<input class="form-control email" type="text" form="send" name="email" placeholder="Email">
				</div>
				<div>
					<label for="description">Описание</label>
					<textarea class="form-control description" form="send" name="description" rows="5" placeholder="Описание"></textarea>
				</div>
				<input class="btn btn-primary" type="submit" form="send" value="Отправить">
			</div>

			<div class="get">
				<p>
				Форма входа
				</p>
				<p>
				Вывод данных
				</p>
			</div>

			<script src="app/assets/js/app.min.js"></script>
	</body>
</html>
