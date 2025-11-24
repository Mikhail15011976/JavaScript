import allCards from "../js/allCards";

export default class Storage {
  constructor() {
    this.formData = {};
    this.getStorage();
    window.addEventListener("beforeunload", this.setStorage.bind(this));
  }

  getStorage() {
    if (!localStorage.getItem("formdata")) {
      this.formData = structuredClone(allCards);
    } else {
      const json = localStorage.getItem("formdata");
      try {
        this.formData = JSON.parse(json) || {};
      } catch {
        this.formData = {};
      }
    }
  }

  setStorage() {
    const columns = document.querySelectorAll(".column");

    columns.forEach((column) => {
      const key = column.dataset.title;
      const value = [];

      const cardList = column.querySelectorAll(".cards__item");
      cardList.forEach((card) => {
        value.push(card.textContent);
      });

      this.formData[key] = value;
    });

    localStorage.setItem("formdata", JSON.stringify(this.formData));
  }
}
