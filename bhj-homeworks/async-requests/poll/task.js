const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

async function loadPoll() {
    try {        
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');        
        
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        
        const data = await response.json();
        const pollId = data.id;
        const title = data.data.title;
        const answers = data.data.answers;
        
        pollTitle.textContent = title;
        
        answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            
            button.addEventListener('click', () => {
                submitVote(pollId, index);
            });
            
            pollAnswers.appendChild(button);
        });
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

async function submitVote(pollId, answerIndex) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            showResults(result.stat);
        }
    };
    xhr.send(`vote=${pollId}&answer=${answerIndex}`);
    
    alert('Спасибо, ваш голос засчитан!');
}

function showResults(stat) {
    pollTitle.textContent = "Результаты опроса:";
    pollAnswers.innerHTML = '';

    stat.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.textContent = `${item.answer}: ${item.votes} голосов`;
        pollAnswers.appendChild(resultItem);
    });
}

loadPoll();