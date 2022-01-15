"use strict";

let arrUser = [
    {
    login: "vasya",
    password: "1234"
    }
];
 
function auth () {
    return {
        login: prompt ( "Введите Ваш логин:" ),
        password: prompt ( "Введите Ваш пароль" )
    }
};

function makeUser () { 
    return {
        login: prompt ( "Придумайте логин:" ),
        password: prompt ( "Придумайте пароль:" )
    }
};

function authUser ( intrUser , currUser ) {
    if ( intrUser.login === currUser.login && intrUser.password === currUser.password ) {
        alert ( ` Добро пожаловать` );
        return true
    }
    else if ( intrUser.login === currUser.login ) {
        if ( intrUser.password === null ) { 
            alert ( "Досвидания" );
            return true
        }
        else {
            intrUser.password = prompt ( "Неправильно, введите Ваш пароль" );
            authUser ( intrUser , currUser );
        }
    }
};

function procUser ( intrUser ) {
    for ( let index = 0; index < arrUser.length; ++index) {
        if ( authUser ( intrUser , arrUser [ index ] ) ) {
        return
        }
    };
    if (confirm ("Такого пользователя не существует, создайте новую учетную запись!")) {
        arrUser.push ( makeUser () );
        procUser ( auth() )
    }
};

alert ( "Привет" ) ;
procUser ( auth() ) ;