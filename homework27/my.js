"use strict"

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://async-demo.herokuapp.com/unstable?maxRandom=<20>&prob=<percent>&status=<500>');
xhr.send();
xhr.addEventListener('load', () => {
    if (xhr.status != 200) {
        console.error(xhr.response);
        return;
    }
    const nomber = +xhr.response;
    for(let i=0; i < nomber; i+=1) {
        console.log( "Hello World" )
    }
})

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov'
}

function sendRequest(
    method, 
    url, 
    {body, headers = {}} = {}, 
    callback
) {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, url);

    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });

    xhr.send(body);
    
    xhr.addEventListener('load', () => {
        if ([200, 201, 204].includes(xhr.status)) {
          callback(xhr.response);
        } else {
          callback(null, xhr.response);
        }
    });
}

sendRequest('POST', '/objects', {body: JSON.stringify(user)}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }
        let newUser;
        try {
        newUser = JSON.parse(response);
        } catch(err) {
        console.error(err);
        return;
        }
        sendRequest('PATCH', `/objects/${newUser.id}`, {body: JSON.stringify({age:33})}, (err, response) => {
            if (err) {
                console.error(err);
                return;
            }
                sendRequest('DELETE', '/objects', undefined, (err, response) => {
                    if (err) {
                        console.error(err);
                        return;
                        } else {
                            console.log("User deleted")
                        }
                    }

                );
            }
        );
    }
);