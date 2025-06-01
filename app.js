function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');

  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;

  li.onclick = () => li.remove(); // remove item when clicked

  list.appendChild(li);
  input.value = '';
}
