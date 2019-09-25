/*
    1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

    2. Построить прямоугольный треугольник состоящий из символа "*".

    3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

    4. Дано два числа A и B где (A<B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   
*/

// Задание №1

var number_1 = +prompt('Введите значение №1');
var number_2 = +prompt('Введите значение №2');
var number_3 = +prompt('Введите значение №3');

var value = (number_1 + number_2 + number_3) / 3;

alert (value);

if (number_1 === number_2 || number_1 === number_3 || number_3 === number_2) {
    alert ('ERROR');
}


//Задание №2

document.write('*<br/>');
document.write('**<br/>');
document.write('***<br/>');
document.write('****<br/>');
document.write('*****<br/>');
document.write('******<br/>');
document.write('*******<br/>');
document.write('********<br/>');
document.write('*********<br/>');
document.write('**********<br/>');
  
document.write('<p> Задание успешно выполнено!' + ' Все согласно условию задачи :)<p>');


//Задание №3

if ((number_1 > number_2) && (number_1 > number_3)) {
    alert ('Максимальное число ' + number_1);
}
else if ((number_2 > number_1) && (number_2 > number_3)) {
    alert ('Максимальное число ' + number_2);
}
else if ((number_3 > number_2) && (number_3 > number_1)) {
    alert ('Максимальное число ' + number_3);
}
else {
    alert ('Одинаковое значение чисел');
}


//Задание №4

var a = parseInt(prompt("Введите число A"));
    var b = parseInt(prompt("Введите число B"));
        if (a < b) {
            var i = a; 
            var sum = 0;
            var list = "";
            while (i < b){
                sum += i;
                if (i % 2 !== 0) {
                    list += " " + i;
                }
                i++;
            }
            document.write("Сумма чисел от А до В равна " + sum);
            if (list.length > 0) {
                document.write(" <p>" + "В числовом промежутке от А до В найдены не четные числа:" + list);
            }
            else{
                document.write(" <p>" + "В числовом промежутке от А до В не найдены не четные числа!");
            }
        }
        else{
            document.write("Условие А < В не выполняется!")
        }

