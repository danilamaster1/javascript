/* 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H. */

function makeBoard() {
    let mainBlock = document.querySelector('.chess__board');
    let block;
    let flag = true;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j === 0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

makeBoard();


/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

const bascket1 = document.querySelector('.basket');
bascket1.addEventListener('click', () => {
    alert(cart.getTotalPrice());
});

const cart = {
    items: [
        {
            name: 'guitar',
            price: 6499,
            count: 2,
        },
        {
            name: 'piano',
            price: 20000,
            count: 1,
        }
    ],

    getTotalPrice() {
        if (this.items.length === 0) {
            return 'Пусто!';
        } else {
            return this.items.reduce((acc, item) => {
                return acc + item.price * item.count;
            }, 0);
        }
    },
}

