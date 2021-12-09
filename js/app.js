'use strict';
console.log('app.js is connected.');

let userName = prompt('Hello! What is your name?');
console.log('this is the user name', userName);

alert('Hello new friend ' + userName);


let userAnswer = prompt("Do I live in Des Moines, IA?");
    console.log('The user said', userAnswer);
    
        if (userAnswer == 'Yes') {
            alert('Correct, I live in the capitol of the Heartland');
        } else {
            alert('Actually I do live in Des Moines');
        }


let userAnswer2 = prompt('Was my first job at Sonic as a cook?');
    console.log('The user said', userAnswer2);

        if (userAnswer2 == 'Yes') {
            alert('Correct. I worked there for two months and then literally forgot I had a job once sports started again');
        } else {
            alert('Sorry it was. I always left smelling like onions and did not enjoy it very much');
        }
    
let userAnswer3 = prompt('Did I just move to Des Moines from Boulder, CO?');
        console.log('The user said', userAnswer3);

        if (userAnswer3 == 'Yes') {
            alert('Correct. I was there for 3 years before moving back to Iowa 6 months ago');
        } else {
            alert('Actually I did. I would not lie about such a matter');
        }

let userAnswer4 = prompt('Can I juggle?');
        console.log('The user said', userAnswer4);

        if (userAnswer4 == 'Yes') {
            alert('Correct. It is my most valuable skill');
        } else {
            alert('Actually I can. Hopefully I can juggle 4 balls soon');
        }

let userAnswer5 = prompt('Am I Canadian?');
        console.log('The user said', userAnswer5);

        if (userAnswer5 == 'Yes') {
            alert('Correct. My dad is full Canadian, making me half');
        } else {
            alert('I am Canadian. I have a maple leaf tattooed on me to prove it');
        }
