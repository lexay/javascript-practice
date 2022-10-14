const calcBtns = document.querySelector('.calc-buttons-main');
const calcScreen = document.querySelector('.calc-screen');

calcBtns.addEventListener('click', getInput);

let operator;
let operandArr = [];
let result = '';
calcScreen.innerText = 0;

function getInput(event) {
  const clicked = event.target;
  const clickedName = clicked.className;
  const clickedContent = clicked.innerText;

  if (clickedName.match(/operand/)) {
    result += clickedContent;
    calcScreen.innerText = result;
  } else if (clickedName.match(/operator/)) {
    operandArr.push(calcScreen.innerText);
    operator = clickedContent;
    calcScreen.innerText = result;
    result = '';
  }
}
// 1. When operand button is clicked keep adding numbers.
// 2. When operator is pressed, save first number, save operator.
// 3. 
// 4. 
// 5. 
