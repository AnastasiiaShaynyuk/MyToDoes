// @ts-nocheck
const inputField = document.querySelector("#inputField")
const btn = document.querySelector(".btn-add")
const toDoesController = document.querySelector(".list")

inputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    add();
  }
});
btn.addEventListener("click", add)

function add() {
  const item = document.createElement("li")
  item.innerText = inputField.value
  item.classList.add("toDoesAdded");
  toDoesController.appendChild(item);
  inputField.value = " ";
  item.addEventListener("click", () => {
    item.classList.toggle("toDoesCompleted");
  });
  item.addEventListener("dblclick", () => {
    toDoesController.removeChild(item);
  });
}