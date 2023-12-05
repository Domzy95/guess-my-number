'use strict';
/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `🎉Correct Number!`;
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);*/

// GENERATE RANDOM SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// DISPLAY MESSAGE FUNTION
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//CONVERTS STRING TO NUMBER AND ON CLICK PROVIDES MESSAGE FOR NUMBER
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  // if only executes if its true thats why we use ! operator to convert
  //  PRIKAZ TEKSTOV ZA GUESS NUMBER IN ZMANJŠANJE SCORA ZA -1 OB VSAKI NAPAKI!

  //   WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector(`.message`).textContent = `⛔No number!`;
    displayMessage(`⛔No number!`);
  }
  //   WHEN PLAYER WINS
  else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `🎉Correct Number!`;
    displayMessage(`🎉Correct Number!`);
    // SKRIVNA ŠTEVILKA
    document.querySelector(`.number`).textContent = secretNumber;
    // change background color when you win! IF THE ARE 2 WORDS SECOND HAS TO BE CAMEL CASE
    // VALUE HAS TO BE STRING FOR COLOR AND WIDTH!
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    // poveča okvirček številke ko zmagaš!
    document.querySelector(`.number`).style.width = `30rem`;
    // HIGH SCORE CHECK
    if (score > highscore) {
      highscore = score;
      // display highscore
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //   WHEN GUESS IS WRONG IT LOWERS SCORE WHEN NUMBER IS NOT CORRECT
  } else if (guess !== secretNumber) {
    if (score > secretNumber) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `📈Too high!` : `📉Too low!`;
      displayMessage(guess > secretNumber ? `📈Too high!` : `📉Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💣You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
//   WHEN GUESS IS TOO HIGH AND LOWERS SCORE WHEN NUMBER IS NOT CORRECT

//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📈Too high!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `💣You lost the game!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//     // WHEN GUESS IS TOO LOW!!! LOWERS SCORE WHEN NUMBER IS NOT CORRECT
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📉Too low!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `💣You lost the game!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });
// AGAIN BUTTON!!!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
