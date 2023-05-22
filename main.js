'use strict';

const button = document.querySelector('.button');
const userName = document.querySelector('.name');
let messageGreetings = document.querySelector('.greetings');


button.addEventListener ('click', () => {
    messageGreetings.innerHTML = 'Hola ' + userName.value;
})