'use strict';
console.log('app.js is connected.');

let points = 0;

let userName = prompt('Hello! What is your name?');
console.log('this is the user name', userName);

alert('Hello new friend ' + userName);

function  one(){
    let userAnswer = prompt("Do I live in Des Moines, IA?");
    console.log('The user said', userAnswer);
    
        if (userAnswer == 'Yes') {
            points +=1;
            alert('Correct, I live in the capitol of the Heartland');
        } else {
            alert('Actually I do live in Des Moines');
        }
}

one();


function two(){
    let userAnswer2 = prompt('Was my first job at Sonic as a cook?');
    console.log('The user said', userAnswer2);

        if (userAnswer2 == 'Yes') {
            points +=1;
            alert('Correct. I worked there for two months and then literally forgot I had a job once sports started again');
        } else {
            alert('Sorry it was. I always left smelling like onions and did not enjoy it very much');
        }
}
two();

    





function three(){
    let userAnswer3 = prompt('Did I just move to Des Moines from Boulder, CO?');
        console.log('The user said', userAnswer3);

        if (userAnswer3 == 'Yes') {
            points +=1;
            alert('Correct. I was there for 3 years before moving back to Iowa 6 months ago');
        } else {
            alert('Actually I did. I would not lie about such a matter');
        }
}
three();





let userAnswer4 = prompt('Can I juggle?');
        console.log('The user said', userAnswer4);

        if (userAnswer4 == 'Yes') {
            points +=1;
            alert('Correct. It is my most valuable skill');
        } else {
            alert('Actually I can. Hopefully I can juggle 4 balls soon');
        }

let userAnswer5 = prompt('Am I Canadian?');
        console.log('The user said', userAnswer5);

        if (userAnswer5 == 'Yes') {
            points +=1;
            alert('Correct. My dad is full Canadian, making me half');
        } else {
            alert('I am Canadian. I have a maple leaf tattooed on me to prove it');
        }

let correctAnswers = 0;
let age = 27;

for (let i = 0; i < 4; i++){
    let ageAnswer = prompt('How old am I?');
    if (ageAnswer == age) {
        alert('That is correct, I am ' + age + ' years young hehe');
        console.log('User answered ' + ageAnswer);
        points +=1;
        break;
    }
    else if (ageAnswer > age && (i !== 3)) {
        alert('Too high');
        console.log('User answered ' + ageAnswer);
    }
    else if (ageAnswer < age && (i !== 3)) {
        alert('Too low');
        console.log('User answered ' + ageAnswer);
    }
    else if (isNaN(ageAnswer) === true) {
        alert('That is not a valid number');
        console.log('User answered ' + ageAnswer);
    }
    else if ((i === 3) && (ageAnswer !== age)) {
        alert('You have exhuasted your tries and myself. My age is ' + age);
        console.log('User answered ' + ageAnswer);
    }
}

let pizzaChoices = ['pepperoni', 'sausage', 'canadian bacon', 'cheese'];
let tries = 0;

while (tries < 5) {
    let answer7 = prompt('Can you guess my favorite type of pizza?').toLowerCase().trim();
    for(let i = 0; i < pizzaChoices.length; i++){
        console.log('userInput',answer7);
        console.log(pizzaChoices[i]);
        if(answer7 === 'pepperoni') {
            alert('That is correct');
            points +=1;
            tries = 5;
            break;
        }
        if(tries !==5){
            alert('Try again');
            break;
        }
    }
    tries = tries + 1;
}
if(tries === 5){
    alert('My favorite pizza is pepperoni');
}
console.log(points);