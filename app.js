function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');

  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;

 const btn = document.createElement('button');
btn.textContent = '❌';
btn.onclick = () => li.remove();

li.appendChild(btn);


  list.appendChild(li);
  input.value = '';
}
