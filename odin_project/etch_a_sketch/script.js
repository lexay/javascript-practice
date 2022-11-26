const drawingBoard = document.querySelector('.drawing-board');
const btn = document.querySelector('.reset-square');

btn.addEventListener('click', setSquare);
drawingBoard.addEventListener('mouseover', changeBg);

function setSquare() {
  sideSize = getNumFromUI();
  resetSquare();
  makeSquare(sideSize);
};

function getNumFromUI() {
  let ui;
  while (true) {
    ui = prompt('Please select the grid: 1-64');
    if (ui <= 64) break;
    alert('You have entered a bigger number than max!');
  }
  return ui;
};

function resetSquare() {
  const children = Array.from(drawingBoard.children);
  children.forEach((e)=>e.remove());
}

function makeSquare(sideSize) {
  for(let i=0; i<sideSize; i++) {
    const row = document.createElement('div');
    row.className = `row-${i+1}`;
    drawingBoard.appendChild(row);
    for(let j=0; j<sideSize; j++) {
      const column = document.createElement('div');
      column.className = `column-${j+1}`;
      column.style.height = column.style.width = `${64 / sideSize}`;
      row.appendChild(column);
    }
  }
};

function changeBg(e) {
  if (e.target.className.match(/column/)) e.target.classList.add('painted');
};
