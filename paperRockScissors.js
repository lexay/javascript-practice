function getComputerChoice() {
  const choices = ['paper', 'rock', 'scissors'];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

function evalResult(playerSelection, cmpSelection) {
  if (
    (playerSelection === 'paper' && cmpSelection === 'rock') ||
    (playerSelection === 'rock' && cmpSelection === 'scissors') ||
    (playerSelection === 'scissors' && cmpSelection === 'paper')
  ) {
    return 'You won!';
  } else if (playerSelection === cmpSelection) {
    return 'Draw!';
  } else {
    return 'You lost!';
  }
}

const paper = document.querySelector('.item-1');
const rock = document.querySelector('.item-2');
const scissors = document.querySelector('.item-3');
const buttons = [paper, rock, scissors];

const cmpSelection = document.querySelector('.cmp-selection');
const playerSelection = document.querySelector('.player-selection');
const result = document.querySelector('.result');

for (let i=0; i<buttons.length; i++) {
  buttons[i].onclick = () => {
    let playerChoice = buttons[i].innerText.toLowerCase();
    let cmpChoice = getComputerChoice();

    playerSelection.innerText = `You choose ${playerChoice}!`;
    cmpSelection.innerText = `Computer chooses ${cmpChoice}!`;
    result.innerText = evalResult(playerChoice, cmpChoice);
  };
}

const reset = document.querySelector('.reset');
reset.onclick = () => {
  window.location.reload();
  preventDefault();
};
