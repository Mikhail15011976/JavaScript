import "./column.css";
import Card from "../card/card";
import Form from "../form/form";

export default class Column {
  constructor(title, dataAttribute) {
    this.element = document.createElement("div");
    this.element.classList.add("column");
    this.element.dataset.title = dataAttribute;

    this.header = this.createHeader(title);
    this.list = document.createElement("ul");
    this.list.classList.add("cards");

    this.button = document.createElement("button");
    this.button.classList.add("column__button");
    this.button.type = "button";
    this.button.textContent = "+ Add another card";
    this.button.addEventListener("click", () => this.onOpenForm());

    this.element.append(this.header, this.list, this.button);
  }

  createHeader(title) {
    const header = document.createElement("header");
    header.classList.add("header");

    const titleElement = document.createElement("h3");
    titleElement.classList.add("header__title");
    titleElement.textContent = title;

    const menu = document.createElement("div");
    menu.classList.add("menu");
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span");
      dot.classList.add("menu__dot");
      menu.append(dot);
    }

    header.append(titleElement, menu);
    return header;
  }

  render(parentSelector, data) {
    const parentElement = document.querySelector(parentSelector);
    parentElement.append(this.element);

    const messages = data[this.element.dataset.title];
    messages.forEach((message) => {
      const card = new Card(message);
      card.addCard(`[data-title="${this.element.dataset.title}"] .cards`);
    });

    this.form = new Form();
    this.form.render(`[data-title="${this.element.dataset.title}"] .cards`);
  }

  onOpenForm() {
    this.button.classList.add("hidden");
    this.form.showForm();
  }
}
