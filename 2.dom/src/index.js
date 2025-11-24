import './style.css';
import goblinImage from './goblin.png';

const gridSize = 4;
const field = document.getElementById('field');

for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.appendChild(cell);
}

const goblin = document.createElement('img');
goblin.src = goblinImage;
goblin.classList.add('goblin');

function getRandomPosition() {
  return Math.floor(Math.random() * (gridSize * gridSize));
}

function moveGoblin() {
  const cells = document.querySelectorAll('.cell');
  const currentCell = Array.from(cells).find(cell => cell.contains(goblin));
  
  let newPosition;
  do {
    newPosition = getRandomPosition();
  } while (cells[newPosition] === currentCell);
  
  cells[newPosition].appendChild(goblin);
}

const initialPosition = getRandomPosition();
field.children[initialPosition].appendChild(goblin);

setInterval(moveGoblin, 1000);