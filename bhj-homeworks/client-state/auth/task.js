document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const logoutButton = document.getElementById('logout__btn');
    
    const userId = localStorage.getItem('user_id');
    if (userId) {
        showWelcome(userId);    }

    
    signinForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(signinForm);
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            localStorage.setItem('user_id', result.user_id);
            showWelcome(result.user_id);
            signinForm.reset();
        } else {
            alert('Неверный логин/пароль');
        }
    });

    
    function showWelcome(userId) {
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = userId;
        signinForm.parentElement.classList.remove('signin_active');
    }
    
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user_id');
        welcomeBlock.classList.remove('welcome_active');
        signinForm.parentElement.classList.add('signin_active');
    });
});