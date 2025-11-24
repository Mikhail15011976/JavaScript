const deadCountElement = document.getElementById('dead');
const lostCountElement = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function randomMole() {    
    holes.forEach(hole => hole.classList.remove('hole_has-mole'));     
    const randomIndex = Math.floor(Math.random() * holes.length);    
    holes[randomIndex].classList.add('hole_has-mole');
}

holes.forEach((hole, index) => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            deadCountElement.textContent = deadCount;            
            if (deadCount === 10) {
                alert('Поздравляем! Вы убили 10 кротов и выиграли!');
                resetGame();
            }
        } else {
            lostCount++;
            lostCountElement.textContent = lostCount;            
            if (lostCount === 5) {
                alert('Вы проиграли! У вас 5 промахов.');
                resetGame();
            }
        }        
        randomMole();
    });
});

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    deadCountElement.textContent = deadCount;
    lostCountElement.textContent = lostCount;    
    holes.forEach(hole => hole.classList.remove('hole_has-mole'));
}

randomMole();