let addBtn;
let todoInput;
let todoList;
let doneBtn;
let doneTodoList;

window.addEventListener("DOMContentLoaded", () => {
  // 1 - Get a reference to elements by Ids
  addBtn = document.getElementById("addBtn");
  todoInput = document.getElementById("todoInput");
  todoList = document.getElementById("todos");
  doneTodoList = document.getElementById("doneTodos");

  // 2 - Register events handlers
  addBtn.addEventListener("click", addTodo);
});
