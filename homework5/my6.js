"use strict";
const whatDrink1 = confirm ("Чай(Да) или кофе(Отмена)?");

if (whatDrink1 === true) {
    const sugar1 = confirm ("Чай с сахаром?");
    const drink = (sugar1 === true) ? 'Заказ на чай с сахаром принят!':
    'Заказ на чай без сахара принят!';
    alert(drink);
}   else {
    const sugar2 = confirm ("Кофе с сахаром?");
    const drink = (sugar2 === true) ? 'Заказ на кофе с сахаром принят!':
    'Заказ на кофе без сахара принят!';
    alert(drink);
}


