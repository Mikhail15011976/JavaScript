let totalSeconds = parseInt(document.getElementById('timer').textContent, 10);

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = totalSeconds;
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