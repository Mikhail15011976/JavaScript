require('./popover.css');

class Popover {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('popover', 'hidden');

    this.titleElement = document.createElement('h3');
    this.titleElement.classList.add('popover__title');
    this.titleElement.textContent = 'Popover title';

    this.textElement = document.createElement('p');
    this.textElement.classList.add('popover__text');
    this.textElement.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';

    this.arrowElement = document.createElement('div');
    this.arrowElement.classList.add('popover__arrow');

    this.element.append(this.titleElement, this.textElement, this.arrowElement);
  }

  changeVisibility() {
    this.element.classList.toggle('hidden');
    console.log('Popover visibility changed. Current classes:', this.element.classList);
  }

  setPosition(target) {
    const { top, left } = target.getBoundingClientRect();
    this.element.style.top = `${top - this.element.offsetHeight - 7}px`;
    this.element.style.left = `${left + target.offsetWidth / 2 - this.element.offsetWidth / 2}px`;
  }
}

module.exports = Popover;
