"use strict";
//№1
function pow(a, b) {
    let result = 1;
    for (let i=0; i < b; i++) {
        result *=a;
    }
    return result;
}
pow(2, 3);

//№2

function createUser(firstName = null, lastName = null, age = null) {
    const user = {
        firstName: firstName,
        lastname : lastName,
        age: age
    }

    return user;
}
createUser()

//№3
function receiveData(nomber) {
    nomber;
    if (nomber<=100){
        return function() {
            data1;
        }
    } else{
        return function() {
            data2;
        }
    }
}
receiveData()