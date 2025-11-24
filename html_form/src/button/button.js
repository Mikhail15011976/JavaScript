require('./button.css');

class Button {
  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add('btn');
    this.element.type = 'button';
    this.element.textContent = 'Click to toggle popover';
  }

  setEventClick(callback) {
    this.element.addEventListener('click', callback);
  }
}

module.exports = Button;
