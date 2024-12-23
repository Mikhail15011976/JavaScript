let totalSeconds = 40;

function updateTimerDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const timerElement = document.getElementById('timer');
    
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    } else {
        totalSeconds--;
        updateTimerDisplay();
    }
}, 1000);

updateTimerDisplay();