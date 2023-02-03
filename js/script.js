"use strict";

const isNumber = function (num) {
    return !isNaN(num) && isFinite(num) && num !== null;
};

function startGame(x) {
    return function one(){
        let y = +prompt('Введите число'); // пользователь вводит своё число
        console.log('Число Х: ' + x);
        console.log('Число Y: ' + y);
        if (y === 0) {
            alert('Игра окончена');
        } else {
            if (x < y) {
                alert('Загаданное число меньше. Поробуй снова');
                one();
            } else if (x > y) {
                alert('Загаданное число больше. Поробуй снова');
                one();
            } else if (!isNumber(y)) {
                alert('Введи число!');
                one();
            } else if (x === y) {
                alert('Поздравляю, Вы угадали!!!');
            } else {
                alert('Игра окончена');
            }
        }
    }
}


const game = startGame(Math.floor(Math.random() * 100));
game();