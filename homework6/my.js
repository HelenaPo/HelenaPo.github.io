"use strict";
const login = prompt ("Введите ваш логин: vasya");
let password = prompt ("Введите Ваш пароль: 1234");
const welcome = "Добро пожаловать!!!";

if ((login ==="vasya") && (password ==="1234")) {
    alert(welcome)
}   else {
    while (login && password) {
        if (login!=="vasya") {
        alert ("Неверный логин!");
        break;
        } else {
            while (password!=="1234"){
            password = prompt("Неверный пароль, попробуйте еще раз:");
                if (password==="1234") {
                alert (welcome)
                break;
                }
                if (password === null) {
                alert("Пароль не верный, доступ закрыт");
                break;
                    }
                }
            break;
        }
    }
}
