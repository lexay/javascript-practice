const calcBtns = document.querySelector('.calc-buttons-main');
const calcScreen = document.querySelector('.calc-screen');

calcBtns.addEventListener('click', getInput);

let operatorArr = [];
let operandArr = [];
let digits = '';
calcScreen.innerText = '0';

function getInput(event) {
  const clicked = event.target;
  const clickedName = clicked.className;
  const clickedContent = clicked.innerText;

  if (clickedName.match(/operand/)) {
    let digit = clickedContent;
    setOperand(digit);
  } else if (clickedName.match(/operator/)) {
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
  console.log(operator);
  switch (operator) {
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      return n1 + n2;
  };
};
// 1. When operand button is clicked keep adding numbers.
// 2. When operator is pressed, save first number, save operator.
// 3. 
// 4. 
// 5. 
