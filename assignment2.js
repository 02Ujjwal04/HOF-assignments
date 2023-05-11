//Random Number Generator with Delay and Progress Indication:

let delayTime = 3000;
let remainingTime = delayTime / 1000;

let countdown = setInterval(() => {
  console.log(`${remainingTime} seconds remaining...`);
  remainingTime--;
}, 1000); // display the remaining time every second

setTimeout(() => {
  clearInterval(countdown); // stop the countdown
  let randomNumber = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
  console.log(`Random number generated: ${randomNumber}`);
}, delayTime);
