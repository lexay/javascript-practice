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
let digits;
clear();

function getInput(event) {
  const clicked = event.target;
  const clickedName = clicked.className;
  const clickedContent = clicked.innerText;

  if (calcScreen.innerText === 'ERROR') {
    clear();
  } else if (clickedName.match(/operand/)) {
    let digit = clickedContent;
    setOperand(digit);
  } else if (clickedName.match(/operator/) || clickedName.match(/equals/)) {
    const enteredNumber = calcScreen.innerText;
    const operator = clickedContent;
    operatorArr.push(operator);
    operandArr.push(Number(enteredNumber));
    if (operandArr.length === 2) operate(); 
    digits = '';
  };
};

function setOperand(digit) {
  if (digits.match(/\./) && digit === '.') digit = '';
  if (digits === '' && digit === '.') digits = '0';
  digits += digit;
  calcScreen.innerText = digits;
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
      if (n2 === 0) return 'ERROR';
      return n1 / n2;
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
  digits = '';
};
// 1. When operand button is clicked keep adding numbers.
// 2. When operator is pressed, save first number, save operator.
// 3. 
// 4. 
// 5. 
