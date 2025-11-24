const Button = require('./button/button.js');
const Popover = require('./popover/popover.js');

const buttonContainer = document.getElementById('button-container');
const popoverContainer = document.getElementById('popover-container');

const button = new Button();

const popover = new Popover();

button.setEventClick(() => {
    console.log('Button clicked!');

    popover.changeVisibility();
    console.log('Popover visibility changed. Current classes:', popover.element.classList);

    popover.setPosition(button.element);
    if (!popover.element.classList.contains('hidden')) {
        popoverContainer.appendChild(popover.element);
        console.log('Popover added to container.');
    } else {
        popoverContainer.removeChild(popover.element);
        console.log('Popover removed from container.');
    }
});

buttonContainer.appendChild(button.element);
