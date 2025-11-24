import { fireEvent, getByText, getByTestId, queryByText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import './style.css';
import goblinImage from './goblin.png';

import './index.js';

describe('Goblin Game', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="field" class="grid"></div>
    `;
    
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

    const initialPosition = Math.floor(Math.random() * (gridSize * gridSize));
    field.children[initialPosition].appendChild(goblin);
  });

  test('should create a grid of cells', () => {
    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(16);
  });

  test('should place goblin in a random cell', () => {
    const goblin = document.querySelector('.goblin');
    expect(goblin).toBeInTheDocument();
  });

  test('should move goblin to a different cell', () => {
    const goblin = document.querySelector('.goblin');
    const initialCell = Array.from(document.querySelectorAll('.cell')).find(cell => cell.contains(goblin));
    
    const moveGoblin = () => {
        const cells = document.querySelectorAll('.cell');
        let newPosition;
        do {
          newPosition = Math.floor(Math.random() * cells.length);
        } while (cells[newPosition] === initialCell); // Убедитесь, что новая позиция не совпадает с начальной
        cells[newPosition].appendChild(goblin);
      };

    moveGoblin();

    const newCell = Array.from(document.querySelectorAll('.cell')).find(cell => cell.contains(goblin));
    expect(newCell).not.toBe(initialCell);
  });
});