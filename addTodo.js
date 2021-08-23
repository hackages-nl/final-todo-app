function addTodo() {
  // 1 - Get the value of the input
  const todo = todoInput.value;
  // 2 - Display in the visual list
  displayTodo(todo);
  // 3 - Clear the input
  todoInput.value = "";
}
