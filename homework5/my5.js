"use strict";
const whatDrink = confirm ("Чай(Да) или кофе(Отмена)?");
let drink;

if (whatDrink===true) {
    const sugar1 = confirm ("Чай с сахаром?")
    if (sugar1===true) {
        drink = ("Заказ на чай с сахаром принят!")
}   else {
        drink = ("Заказ на чай без сахара принят!");
    }
} else {
    const sugar2 = confirm ("Кофе с сахаром?")
    if (sugar2 === true){
        drink =  ("Заказ на кофе с сахаром принят!")
}   else {
        drink = ("Заказ на кофе без сахара принят!");
    }
}
alert(drink);