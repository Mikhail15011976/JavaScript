import './style.css';
import { validateCardNumber, getCardType } from './validator.js';
import { validateMirCardNumber, getMirCardType } from './mirValidator.js';

import visa from './img/card-visa.svg';
import mastercard from './img/card-mastercard.svg';
import americanExpress from './img/card-americanExpress.svg';
import discover from './img/card-discoverCard.svg';
import dinersClub from './img/card-dinersClub.svg';
import jcb from './img/card-jcb.png';
import mir from './img/card-mir.png';

const widget = document.createElement('div');
widget.classList.add('widget');

const cardContainer = document.createElement('div');
cardContainer.classList.add('card-images');

const cards = [
  { img: visa, type: 'Visa' },
  { img: mastercard, type: 'MasterCard' },
  { img: americanExpress, type: 'American Express' },
  { img: discover, type: 'Discover' },
  { img: dinersClub, type: 'Diners Club' },
  { img: jcb, type: 'JCB' },
  { img: mir, type: 'Мир' },
];

cards.forEach(card => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card-wrapper');

  const cardImg = document.createElement('img');
  cardImg.src = card.img;
  cardImg.alt = card.type;

  cardWrapper.appendChild(cardImg);
  cardContainer.appendChild(cardWrapper);
});

widget.appendChild(cardContainer);

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Введите номер карты';

const button = document.createElement('button');
button.textContent = 'Click to Validate';

button.addEventListener('click', () => {
  const cardNumber = input.value;
  let cardType;
  
  if (validateMirCardNumber(cardNumber)) {
    cardType = getMirCardType(cardNumber);
  } else if (validateCardNumber(cardNumber)) {
    cardType = getCardType(cardNumber);
  } else {
    cardType = 'Неизвестная карта';
  }

  alert(`Номер карты: ${cardNumber} - Тип карты: ${cardType}`);
});

inputContainer.appendChild(input);
inputContainer.appendChild(button);
widget.appendChild(inputContainer);

document.body.appendChild(widget);
