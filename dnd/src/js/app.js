import Column from "../components/column/column.js";
import Container from "../components/container/container.js";
import DragController from "../libs/DragController.js";
import Storage from "../libs/Storage.js";

export default class App {
  constructor() {
    this.wrapper = document.querySelector(".wrapper");

    this.container = new Container();

    this.columnTodo = new Column("todo", "todo");
    this.columnProgress = new Column("in progress", "progress");
    this.columnDone = new Column("done", "done");

    this.dragController = new DragController();
    this.storage = new Storage();
  }

  init() {
    this.render();
  }

  render() {
    this.wrapper.append(this.container.element);

    const data = this.storage.formData;

    this.columnTodo.render(".container", data);
    this.columnProgress.render(".container", data);
    this.columnDone.render(".container", data);
  }
}
