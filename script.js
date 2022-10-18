const calcBtns = document.querySelector('.calc-buttons');
const calcScreen = document.querySelector('.calc-screen');
const clearBtn = document.querySelector('.clear');
const plusMinusBtn = document.querySelector('.plus-minus');
const percentBtn = document.querySelector('.percent');

calcBtns.addEventListener('click', getInput);
clearBtn.addEventListener('click', clear);
plusMinusBtn.addEventListener('click', ()=> calcScreen.innerText = 0 - (calcScreen.innerText));
percentBtn.addEventListener('click', ()=> calcScreen.innerText = calcScreen.innerText / 100);

let operatorArr;
let operandArr;
let inputBuffer;
clear();

function getInput(event) {
  const clicked = event.target;

  if (calcScreen.innerText === 'ERROR') {
    clear();
  } else if (clicked.className.match(/operand/)) {
    const input = clicked.innerText;
    setOperand(input);
  } else if (clicked.className.match(/operator/) || clicked.className.match(/equals/)) {
    const operand = calcScreen.innerText;
    const operator = clicked.innerText;
    operatorArr.push(operator);
    operandArr.push(Number(operand));
    if (operandArr.length === 2) operate(); 
    inputBuffer = '';
  };
};

function setOperand(input) {
  if (inputBuffer.match(/\./) && input === '.') return;
  if (input === '0' && calcScreen.innerText === '0') return;
  if (inputBuffer === '' && input === '.') inputBuffer = '0';
  inputBuffer += input;
  calcScreen.innerText = inputBuffer;
};

function operate() {
  let n1 = operandArr.shift();
  let n2 = operandArr.shift();
  let operator = operatorArr.shift();
  let result = getResult(operator, n1, n2);
  operandArr.push(result);
  calcScreen.innerText = result;
};

function getResult(operator, n1, n2) {
  switch (operator) {
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n2 === 0 ? 'ERROR' : n1 / n2;
    case '+':
      return n1 + n2;
    case '=':
      return Number(calcScreen.innerText);
  };
};

function clear() {
  calcScreen.innerText = '0';
  operandArr = [];
  operatorArr = [];
  inputBuffer = '';
};
// 1. When operand button is clicked keep adding numbers.
// 2. When operator is pressed, save first number, save operator.
// 3. 
// 4. 
// 5. 
