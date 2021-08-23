window.addEventListener("DOMContentLoaded", () => {
  // 1 - Get a reference to elements by Ids
  const addBtn = document.getElementById("addBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const doneBtn = document.getElementById("doneBtn");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todos");

  // 2 - Register events handlers
  addBtn.addEventListener("click", addTodo);
});

const todos = [];

function addTodo() {
  // 1 - Get the value of the input
  const todo = document.getElementById("todoInput").value;
  // 2 - Add It to the list of todos
  todos.push(todo);

  // 3 - Display in the visual list
  const todoList = document.getElementById("todos");
  const li = document.createElement("li");
  li.innerHTML = todo;
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.addEventListener("click", doneTodo);
  li.append(doneBtn);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTodo);
  li.append(deleteButton);
  todoList.append(li);
}

function doneTodo() {}
function deleteTodo() {}
