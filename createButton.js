const buttonProps = {
  textContent: "Done",
  type: "Submit",
};

function createButton(text, handler) {
  let btn = document.createElement("button");
  btn = {
    ...btn,
    ...props,
  };
  btn.addEventListener("click", handler);
  return btn;
}
