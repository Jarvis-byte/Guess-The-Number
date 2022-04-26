'use strict';
var randomnumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(randomnumber);
var score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const value_from_box = document.querySelector('.guess').value;
  //When ther is no input
  if (!value_from_box) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  //when guess is too high
  else if (value_from_box > randomnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  } else if (value_from_box < randomnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }

    //When player wins
  } else if (value_from_box == randomnumber) {
    document.querySelector('.message').textContent = '🎉🥳 Correct Number!';
    document.querySelector('.number').textContent = randomnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
});
