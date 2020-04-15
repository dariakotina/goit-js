'use strict';

let cost;
const getCountry = prompt('Введите Вашу страну');
let message;

switch (getCountry.toUpperCase()) {
    case 'КИТАЙ':
        cost = 100;
        message = `Доставка в ${getCountry.toUpperCase()} будет стоить ${cost} кредитов`;
        break;

    case 'ЧИЛИ':
        cost = 250;
        message = `Доставка в ${getCountry.toUpperCase()} будет стоить ${cost} кредитов`;
        break;

    case 'АВСТРАЛИЯ':
        cost = 170;
        message = `Доставка в ${getCountry.toUpperCase()} будет стоить ${cost} кредитов`;
        break;

    case 'ИНДИЯ':
        cost = 80;
        message = `Доставка в ${getCountry.toUpperCase()} будет стоить ${cost} кредитов`;
        break;
        
    case 'ЯМАЙКА':
        cost = 120;
        message = `Доставка в ${getCountry.toUpperCase()} будет стоить ${cost} кредитов`;
        break;      
    
        default:
        message = `В вашей стране доставка не доступна`;  
}
alert(message);
