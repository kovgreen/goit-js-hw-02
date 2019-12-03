'use strict';
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введи число');
  let inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else {
    numbers.push(inputNumber);
  }
} while (input !== null);

for (let number of numbers) {
  total += number;
}

if (total !== 0) {
  console.log(`Общая сумма чисел равна ${total}`);
}
