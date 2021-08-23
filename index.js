let addBtn;
let todoInput;
let todoList;

window.addEventListener("DOMContentLoaded", () => {
  // 1 - Get a reference to elements by Ids
  addBtn = document.getElementById("addBtn");
  todoInput = document.getElementById("todoInput");
  todoList = document.getElementById("todos");

  const deleteBtn = document.getElementById("deleteBtn");
  const doneBtn = document.getElementById("doneBtn");

  // 2 - Register events handlers
  addBtn.addEventListener("click", addTodo);
});

const todos = [];

function addTodo() {
  // 1 - Get the value of the input
  const todo = todoInput.value;
  // 2 - Add It to the list of todos
  todos.push(todo);
  // 3 - Display in the visual list
  displayTodo(todo);
  todoInput.value = "";
}

function displayTodo(todoDescription) {
  // Add li element
  const li = document.createElement("li");
  li.innerHTML = todoDescription;
  // add Done button
  const doneButton = createButton("Done", doneTodo);
  li.append(doneButton);

  // add Delete button
  const deleteButton = createButton("Delete", deleteTodo);
  li.append(deleteButton);
  todoList.append(li);
}

function createButton(text, handler) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", handler);
  return btn;
}

function doneTodo() {}
function deleteTodo() {}
