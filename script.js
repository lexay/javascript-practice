const container = document.querySelector('.container');
container.addEventListener('mouseover', changeBg);

function makeGrid(rows, columns) {
  for(let i=0; i<rows; i++) {
    const row = document.createElement('div');
    row.className = `row-${i+1}`;
    container.appendChild(row);
    for(let j=0; j<columns; j++) {
      const column = document.createElement('div');
      column.className = `column-${j+1}`;
      column.style.cssText = `height: ${64 / columns}; width: ${64 / columns}`;
      row.appendChild(column);
    }
  }
};

function changeBg(e) {
  if (e.target.className.match(/column/)) e.target.style.cssText = 'background-color: blue';
}
// makeGrid(16, 16);
// makeGrid(64, 64);
makeGrid(10, 10);
// makeGrid(1, 1);
