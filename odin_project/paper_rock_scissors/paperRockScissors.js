document.querySelector('.container > .left').addEventListener('click', runGame);
document.querySelector('.reset').addEventListener('click', reset);

function runGame(event) {
  if (event.target.type === 'submit') {
    const playerSelection = event.target.textContent.toLowerCase();
    const compSelection = getComputerChoice();
    const result = evalResult(playerSelection, compSelection);
    document.querySelector('.cmp-selection').innerText = `Computer chooses ${compSelection}!`;
    document.querySelector('.player-selection').innerText = `You choose ${playerSelection}!`;
    document.querySelector('.result').innerText = result;
  }
}

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

function reset() {
  window.location.reload();
}
