let userName = ''
userName === '' ? console.log("Hello!") : console.log(`Hello, ${userName}`);

let userQuestion = console.log("What do you want to know?");

let randomNumber = Math.floor(Math.random() * 8);

eightBall = '';

// Created a control flow
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('REply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;      
  default:
    console.log('Signs point to yes');
}