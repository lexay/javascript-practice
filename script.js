const calcBtns = document.querySelector('.calc-buttons-main');
const calcScreen = document.querySelector('.calc-screen');

calcBtns.addEventListener('click', getInput);

let operandArr = [];
let input = '';
calcScreen.innerText = 0;

function getInput(event) {
  const clicked = event.target;
  const clickedName = clicked.className;
  const clickedContent = clicked.innerText;

  if (clickedName.match(/operand/)) {
    input += clickedContent;
    calcScreen.innerText = input;
  } else if (clickedName.match(/operator/)) {
    operandArr.push(Number(calcScreen.innerText));
    const operator = clickedContent;
    if (operandArr.length === 2) {
      evalResult(operator);
    }
    input = '';
  }
}

function evalResult(operator) {
  let n1 = operandArr.shift();
  let n2 = operandArr.shift();
  let result = evalOperation(operator, n1, n2);
  calcScreen.innerText = result;
  operandArr.push(result);
}

function evalOperation(operator) {
  switch (operator) {
    case '+':
      return n1 + n2;
  }
}
// 1. When operand button is clicked keep adding numbers.
// 2. When operator is pressed, save first number, save operator.
// 3. 
// 4. 
// 5. 
