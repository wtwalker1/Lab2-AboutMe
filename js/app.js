'use strict';
console.log('app.js is connected.');

let userName;
console.log('this is the user name', userName);

while(!userName){
    userName = prompt('What is your name?');
}
console.log('after while loop', userName);

alert('Hello new friend ' + userName);
    let lowerCaseName = userName.toLowerCase();
    console.log(lowerCaseName);

prompt('')