const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

let clickCount = 0;

let isEnlarged = false;

function handleClick() {    
    clickCount++;
    counterElement.textContent = clickCount;
    
    if (isEnlarged) {
        cookieElement.style.width = '200px';
        cookieElement.style.height = 'auto';
    } else {
        cookieElement.style.width = '220px';
        cookieElement.style.height = 'auto';
    }
    isEnlarged = !isEnlarged;
}

cookieElement.addEventListener('click', handleClick);