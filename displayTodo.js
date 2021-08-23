function displayTodo(todoDescription) {
  // Add li element
  const li = document.createElement("li");
  li.innerHTML = todoDescription;
  // add Done button
  const doneButton = createButton("Done", doneTodo.bind(null, li));
  li.append(doneButton);

  // add Delete button
  const deleteButton = createButton("Delete", deleteTodo);
  li.append(deleteButton);
  todoList.append(li);
}
