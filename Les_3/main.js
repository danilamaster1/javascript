// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

for (let i = 2; i < 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров
3. Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины */

function countBasketPrice(priceList) {
    let result = 0;
    for (let i in priceList) {
        result += priceList[i];
    }

    return result;
}

let priceList = [14, 45.54, 867, 34.1];
let finallyPrice = countBasketPrice(priceList);

console.log(finallyPrice);

// *4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла

for (let i = 0; i < 10; console.log(i++)) { }

// *5. Нарисовать пирамиду с 20 рядами с помощью console.log

let str = 'x';
console.log(str);
for (let i = 0; i < 19; i++) {
    console.log(str += "xx");
}