const tooltipElements = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

tooltipElements.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();        
        
        const tooltipText = this.getAttribute('title');
        tooltip.textContent = tooltipText;
        tooltip.classList.toggle('tooltip_active');
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('has-tooltip')) {
        tooltip.classList.remove('tooltip_active');
    }
});