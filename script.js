//your code here

const todo = document.getElementById("newTodoInput");
const btn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");
btn.addEventListener("click", () =>
{
  if(todo.value)
  {
    let item = document.createElement("li");
    item.textContent = todo.value;
    list.appendChild(item);
  }
  todo.value =""
});