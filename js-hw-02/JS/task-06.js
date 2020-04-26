'use strict';

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Please enter number...');
    if (isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`);
        continue;
    }
    numbers.push(input);
} while (input !== null);

for (const number of numbers) {
    total += Number(number);
}
alert(`Общая сумма чисел равна ${total}`);
