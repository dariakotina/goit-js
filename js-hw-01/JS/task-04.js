'use strict';

let credits = 23580;
const pricePerDroid = 3000;

const enter = prompt('Какое количество дроидов Вы хотите купить?');

let message

if (enter === null) {
    message = 'Отменено пользователем!';
} else { 
    const totalPrice = Number(enter) * pricePerDroid;
    if (credits >= totalPrice) {
        credits = credits - totalPrice;
        message = `Вы купили ${Number(enter)} дроидов, на счету осталось ${credits} кредитов.`;
    }
   else {
    message = `Недостаточно средств на счету!`;
   }
}
alert(message);