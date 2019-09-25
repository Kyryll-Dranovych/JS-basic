// Задание №1

console.log ('Задание №1')

var y1 = prompt('Введите значение y1');
var y2 = prompt('Введите значение y2');
var x1 = prompt('Введите значение x1');
var x2 = prompt('Введите значение x2');

var k = (y1 - y2) / (x1 - x2);
var b = y2 - k*x2;

console.log ('y = ' + k + 'x + ' + b);

// Задание №2

console.log ('Задание №2')

var a = 10;
var b = 20;

var test;

test = a;
a = b;
b = test;

console.log ('Переменная a = ' + a);
console.log ('Переменная b = ' + b);


// Задание №3

console.log ('Задание №3')

var admin = name;
var name = 'Василий';

console.log ('Доброго времени суток ' +admin);

// Задание №4

console.log ('Задание №4')

var first_name = prompt('Введите свое имя');
var last_name = prompt('Введите свою фамилию');
var age = prompt('Введите свой возраст');

alert ('Ваше имя - ' + first_name + ', Фамилия - ' + last_name + ', Ваш возраст - ' + age + ' лет');

console.log ('Ваше имя - ' + first_name + ', Фамилия - ' + last_name + ', Ваш возраст - ' + age + ' лет');

// Задание №5

console.log ('Задание №5')

var user_age = prompt('Еще раз введите свой возраст');
var user_age_2 = confirm('Вы уверены, что Ваш возраст ' + user_age + ' лет?');

alert (user_age_2);

console.log (user_age_2);