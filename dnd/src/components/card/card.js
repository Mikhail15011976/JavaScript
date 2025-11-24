import "./card.css";

export default class Card {
  constructor(message) {
    this.element = document.createElement("li");
    this.element.classList.add("cards__item");

    this.text = document.createElement("span");
    this.text.classList.add("cards__text");
    this.text.textContent = message;

    this.removeBtn = document.createElement("span");
    this.removeBtn.classList.add("remove-btn", "hidden");

    this.element.append(this.text, this.removeBtn);
    this.addListeners();
  }

  addListeners() {
    this.element.addEventListener("mouseenter", () =>
      this.removeBtn.classList.remove("hidden"),
    );
    this.element.addEventListener("mouseleave", () =>
      this.removeBtn.classList.add("hidden"),
    );
    this.removeBtn.addEventListener("click", () => this.remove());
  }

  addCard(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    parentElement.append(this.element);
  }

  remove() {
    this.element.remove();
  }
}
