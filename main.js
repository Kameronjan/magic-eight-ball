let userName = "Kam";
let userQuestion = "How old am I?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;

if (eightBall === 1) {
  console.log('It is certain');
} else if (eightBall === 2) {
  console.log('It is decidedly so');
} else if (eightBall === 3) {
  console.log('Reply hazy try again');
} else if (eightBall === 4) {
  console.log('Cannot predict now');
} else if (eightBall === 5) {
  console.log('Do not count on it');
} else if (eightBall === 6) {
  console.log('Outlook not so good');
} else if (eightBall === 7) {
  console.log('Signs point to yes');
}

userName !== "" ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

console.log(eightBall);
