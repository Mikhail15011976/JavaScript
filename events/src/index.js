import './style.css';
import goblinImage from './goblin.png';

class GoblinGame {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.field = document.querySelector('#field');
        this.successCounter = document.querySelector('#success');
        this.failCounter = document.querySelector('#fail');
        this.resultDiv = document.querySelector('#result');
        this.finalSuccess = document.querySelector('#final-success');
        this.finalFail = document.querySelector('#final-fail');
        this.restartButton = document.querySelector('#restart');

        this.success = 0;
        this.fail = 0;
        this.totalClicks = 0;
        this.missedAppearances = 0;
        this.maxMissedClicks = 5;
        this.interval = null;

        this.init();
    }

    init() {
        this.createGrid();
        this.goblin = this.createGoblin();
        this.startGame();
        this.addEventListeners();
    }

    createGrid() {
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.field.appendChild(cell);
        }
    }

    createGoblin() {
        const goblin = document.createElement('img');
        goblin.src = goblinImage;
        goblin.classList.add('goblin');
        return goblin;
    }

    getRandomPosition() {
        return Math.floor(Math.random() * (this.gridSize * this.gridSize));
    }

    moveGoblin() {
        const cells = document.querySelectorAll('.cell');
        const currentCell = Array.from(cells).find(cell => cell.contains(this.goblin));

        let newPosition = this.getRandomPosition();
        
        if (cells[newPosition] === currentCell) {
            newPosition = this.getRandomPosition();
        }

        cells[newPosition].appendChild(this.goblin);
        this.missedAppearances++;
        this.updateMissedCounter();
        this.checkMissedAppearances();
    }

    updateMissedCounter() {
        document.querySelector('#missed').textContent = this.missedAppearances;
    }

    handleGoblinClick() {
        this.success++;
        this.successCounter.textContent = this.success;
        this.goblin.remove();
        this.totalClicks++;
        this.missedAppearances = 0;
        this.checkGameEnd();
        this.moveGoblin();
    }

    handleCellClick() {
        this.fail++;
        this.failCounter.textContent = this.fail;
        this.totalClicks++;
        this.checkGameEnd();
    }

    checkMissedAppearances() {
        if (this.missedAppearances >= this.maxMissedClicks) {
            this.endGame();
        }
    }

    checkGameEnd() {
        if (this.totalClicks >= 15) {
            this.endGame();
        }
    }

    endGame() {
        clearInterval(this.interval);
        this.finalSuccess.textContent = this.success;
        this.finalFail.textContent = this.fail;
        this.resultDiv.style.display = 'block';
    }

    startGame() {
        this.resetGameState();
        const initialPosition = this.getRandomPosition();
        this.field.children[initialPosition].appendChild(this.goblin);
        this.interval = setInterval(() => this.moveGoblin(), 1000);
    }

    resetGameState() {
        this.success = 0;
        this.fail = 0;
        this.totalClicks = 0;
        this.missedAppearances = 0;
        this.successCounter.textContent = this.success;
        this.failCounter.textContent = this.fail;
        this.resultDiv.style.display = 'none';
        this.field.innerHTML = '';
        this.createGrid();
    }

    addEventListeners() {
        this.goblin.addEventListener('click', () => this.handleGoblinClick());
        this.field.addEventListener('click', (event) => {
            if (event.target.classList.contains('cell')) {
                this.handleCellClick();
            }
        });
        this.restartButton.addEventListener('click', () => this.startGame());
    }
}

if (document.querySelector('#field')) {
    new GoblinGame(4);
}
