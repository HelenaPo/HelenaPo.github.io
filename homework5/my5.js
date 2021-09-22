"use strict";
const whatDrink = confirm ("Чай(Да) или кофе(Отмена)?");

if (whatDrink===true) {
    const sugar1 = confirm ("Чай с сахаром?")
    if (sugar1===true) {
        alert ("Заказ на чай с сахаром принят!")
}   else {
        alert("Заказ на чай без сахара принят!");
    }
} else {
    const sugar2 = confirm ("Кофе с сахаром?")
    if (sugar2 === true){
        alert ("Заказ на кофе с сахаром принят!")
}   else {
        alert("Заказ на кофе без сахара принят!");
    }
}