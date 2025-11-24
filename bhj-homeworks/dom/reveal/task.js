document.addEventListener('scroll', () => {
    // Находим все элементы с классом 'reveal'
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        // Получаем информацию о позиции элемента относительно окна
        const rect = reveal.getBoundingClientRect();

        // Проверяем, находится ли элемент в области видимости
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Если элемент в области видимости, добавляем класс 'reveal_active'
            reveal.classList.add('reveal_active');
        } else {
            // Если элемент не в области видимости, убираем класс (по желанию)
            reveal.classList.remove('reveal_active');
        }
    });
});