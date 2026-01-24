const todos = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (!task) return; // empty input

  todos.push(task);

  render();
  input.value = "";
}

function render() {
  const list = document.getElementById("todoList");
  list.innerHTML = ""; // clear old list

  todos.forEach((item, index) => {
    list.innerHTML += `<li>${item}</li>`;
  });
}
