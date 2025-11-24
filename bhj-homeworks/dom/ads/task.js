function initRotator(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function changeCase() {        
        cases[currentIndex].classList.remove('rotator__case_active');
        
        currentIndex = (currentIndex + 1) % cases.length;
        
        cases[currentIndex].style.color = cases[currentIndex].dataset.color;
        
        cases[currentIndex].classList.add('rotator__case_active');
        
        const speed = parseInt(cases[currentIndex].dataset.speed);
        setTimeout(changeCase, speed);
    }
    
    changeCase();
}

document.querySelectorAll('.rotator').forEach(initRotator);