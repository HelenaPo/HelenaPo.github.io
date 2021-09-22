"use strict";
const age = prompt ("Введите Ваш возраст:");
let welcome;

if ( age > 30) {
    welcome = ("Здравствуйте! Рады Вас видеть!");
} else if ( (age >= 18) && (age <= 30) ) {
    welcome = ("Хай, дружище!!");
} else {
    welcome = ("Извините, доступ открыт пользователям 18+");
}
alert(welcome);