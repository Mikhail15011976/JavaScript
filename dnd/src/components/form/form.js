import "./form.css";

import Card from "../card/card";

export default class Form {
  constructor() {
    this.element = document.createElement("form");
    this.element.classList.add("form", "hidden");

    this.label = document.createElement("label");
    this.label.classList.add("visually-hidden");
    this.label.for = "add-card";
    this.label.textContent = "Enter a title for this card";

    this.textarea = document.createElement("textarea");
    this.textarea.classList.add("form__textarea");
    this.textarea.id = "add-card";
    this.textarea.placeholder = "Enter a title for this card...";

    this.tooltip = document.createElement("div");
    this.tooltip.classList.add("tooltip", "hidden");

    this.footer = document.createElement("div");
    this.footer.classList.add("form__footer");

    this.buttons = document.createElement("div");
    this.buttons.classList.add("form__buttons");

    this.addBtn = document.createElement("button");
    this.addBtn.classList.add("form__add");
    this.addBtn.type = "submit";
    this.addBtn.textContent = "Add Card";

    this.closeBtn = document.createElement("div");
    this.closeBtn.classList.add("form__close");

    this.buttons.append(this.addBtn, this.closeBtn);

    this.menu = document.createElement("div");
    this.menu.classList.add("menu");

    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement("span");
      dot.classList.add("menu__dot");
      this.menu.append(dot);
    }

    this.footer.append(this.buttons, this.menu);

    this.element.append(this.label, this.textarea, this.tooltip, this.footer);

    this.addListeners();
  }

  addListeners() {
    this.closeBtn.addEventListener("click", this.onCloseForm.bind(this));
    this.element.addEventListener("submit", this.onSubmitForm.bind(this));
    this.textarea.addEventListener("input", this.onInput.bind(this));
  }

  render(previousSelector) {
    const previousElement = document.querySelector(previousSelector);
    previousElement.after(this.element);
  }

  showTooltip() {
    this.tooltip.classList.remove("hidden");
  }

  hideTooltip() {
    this.tooltip.classList.add("hidden");
  }

  showForm() {
    this.element.classList.remove("hidden");
  }

  hideForm() {
    this.element.classList.add("hidden");
  }

  closeForm() {
    this.textarea.value = "";
    this.hideForm();
    const btn = this.element.nextElementSibling;
    btn.classList.remove("hidden");
    this.hideTooltip();
  }

  onCloseForm() {
    this.closeForm();
  }

  onSubmitForm(event) {
    event.preventDefault();

    const message = this.textarea.value.trim();

    if (!message) {
      this.textarea.value = "";
      this.tooltip.textContent = "Введите текст!";
      this.showTooltip();
      return;
    }

    const cardList = [...document.querySelectorAll(".cards__item")];
    const flag = cardList.some((card) => card.textContent === message);

    if (flag) {
      this.tooltip.textContent = "Заметка уже есть!";
      this.showTooltip();
    } else {
      const card = new Card(message);
      const column = this.element.closest(".column");
      const attribute = column.dataset.title;
      card.addCard(`[data-title="${attribute}"] .cards`);
      this.closeForm();
    }
  }

  onInput() {
    this.hideTooltip();
  }
}
