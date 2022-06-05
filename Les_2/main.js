// 1. Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2    -унарный оператор в префиксной форме, сначала инкрементирование, затем возврат значения
d = b++; alert(d); // 1    -унарный оператор в постфиксной форме, сначала возврат значения, потом инкрементирование 
c = (2 + ++a); alert(c); // 5  -префиксная форма (2 + 3 = 5) (a = 3)
d = (2 + b++); alert(d); // 4  -постфиксная форма (2 + 2 = 4) (после возврата значения b = 3)
alert(a); // 3 -осталось a = 3
alert(b); // 3 -после возврата значения b = 3

// 2. Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2); // x = 5

/* 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:

1) если a и b положительные, вывести их разность;
2) если а и b отрицательные, вывести их произведение;
3) если а и b разных знаков, вывести их сумму;

Ноль можно считать положительным числом. */

function calc(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(a - b);
    } else if (a < 0 && b < 0) {
        console.log(a * b);
    } else {
        console.log(a + b);
    }
}

calc(-4, 6);

/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15. */


function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

randomNum = getRandom(16, 0);
console.log(randomNum);

function getInterval(num) {
    switch (num) {
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        default:
            console.log(15);
    }
}

getInterval(randomNum);

/* 5. Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return */

function add(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function div(x, y) {
    return Math.floor(x / y);
}

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = add(arg1, arg2);
            console.log(result);
            break;
        case '-':
            result = minus(arg1, arg2);
            console.log(result);
            break;
        case '*':
            result = multiplication(arg1, arg2);
            console.log(result);
            break;
        case '/':
            result = div(arg1, arg2);
            console.log(result);
            break;
        default:
            console.log('Такого знака нет в этом калькуляторе');
    }
}

mathOperation(16, 5, '+');
mathOperation(16, 5, '/');

// 7. * Сравнить null и 0. Объяснить результат.

// NULL - это отсутствие значения. 0 - не значит отсутсвие значения, это цифра или false

/* 8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень */

function power(val, pow) {
    if (pow === 1) {
        return val;
    } else {
        return power(val, pow - 1) * val;
    }
}

num = power(2, 10);
console.log(num);

