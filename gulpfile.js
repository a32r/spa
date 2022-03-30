const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

// Functions
function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		// server: { baseDir: './src' }, // browserSync alone
		proxy: "localhost/ajax1/src", // xampp proxy
		port: 8080, // Порт proxy
		notify: false, // Отключение уведомлений
		online: false // Режим работы: true или false
	})
}

function js() {
	return src([
		'./src/app/assets/js/**/*.js', // Подключение пользовательских скриптов
		'!./src/app/assets/js/**/*.min.js' // Кроме скриптов *.min.js
	])
		.pipe(concat('custom.min.js')) // Объединение скриптов в один custom.min.js файл
		.pipe(uglify()) // Сжатие JavaScript
		.pipe(dest('./src/app/assets/js/')) // Выгрузка объединенного скрипта в папку назначения
}

function scripts() {
	return src([
		'./node_modules/jquery/dist/jquery.min.js', // Подключение jQuery
		'./node_modules/bootstrap/dist/js/bootstrap.bundle.js', // Подкдючение Bootstrap js с Popper
		'./node_modules/node-forge/dist/forge.min.js', // Подкдючение node-forge для вычисления sha256sum
		'./src/app/assets/js/custom.min.js' // Подключение пользовательских скриптов
	], { allowEmpty: true })
		.pipe(concat('app.min.js')) // Объединение скриптов в один файл
		.pipe(dest('./src/app/assets/js/')) // Выгрузка объединенного скрипта в папку назначения
		.pipe(browserSync.stream()) // Обновление страницы в браузере с помощью Browsersync
}

function scss() {
	return src('./src/app/assets/css/**/*.scss') // Подключение пользовательских scss стилей
		.pipe(sass({outputStyle: 'compressed'})) // Обработка  файлов препроцессором sass
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создание префиксов с помощью Autoprefixer
		.pipe(concat('custom.min.css')) // Объединение стилей в один custom.min.css файл
		.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минификация стилей
		.pipe(dest('./src/app/assets/css')) // Выгрузка main.min.scss в папку назначения
}

function styles() {
	return src([
		'./node_modules/bootstrap/dist/css/bootstrap.min.css', // Подключение Bootstrap css
		'./src/app/assets/css/custom.min.css' // Подключение пользовательских стилей
	], { allowEmpty: true })
		.pipe(concat('app.min.css')) // Объединение стилей в один файл
		.pipe(dest('./src/app/assets/css')) // Выгрузка объединенных стилей в папку назначения
		.pipe(browserSync.stream()) // Обновление страницы в браузере с помощью Browsersync
}

function startwatch() {
	watch(['./src/app/assets/js/**/*.js', '!./src/app/assets/js/**/*.min.js'], series(js, scripts)); // Наблюдение за файлами js кроме файлов *.min.js
	watch('./src/app/assets/css/**/*.scss', series(scss, styles)); // Наблюдение за файлами scss
	// watch('./src/**/*.css').on('change', browserSync.reload); // Наблюдение за файлами css
	watch('./src/**/*.html').on('change', browserSync.reload); // Наблюдение за файлами html
	watch('./src/**/*.php').on('change', browserSync.reload); // Наблюдение за файлами php
	watch('./src/**/*.tpl').on('change', browserSync.reload); // Наблюдение за файлами tpl
}

// Exports section
exports.browsersync = browsersync;
exports.js = js;
exports.scripts = scripts;
exports.scss = scss;
exports.styles = styles;
// exports.default = parallel(styles, scripts, browsersync, startwatch); // Запуск с первоначальными задачами styles и scripts
exports.default = parallel(browsersync, startwatch); // Запуск с первоначальными задачами
