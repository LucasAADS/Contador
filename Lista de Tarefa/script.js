const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Função para salvar tarefas no localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push({
      text: li.querySelector('.task-text').textContent,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar tarefas salvas
function loadTasks() {
  const saved = JSON.parse(localStorage.getItem('tasks') || '[]');
  saved.forEach(task => addTask(task.text, task.completed));
}

// Cria nova tarefa
function addTask(text, completed = false) {
  if (!text.trim()) return;

  const li = document.createElement('li');
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = text;
  span.className = 'task-text';

  span.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '✕';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  saveTasks();
}

// Eventos
addBtn.addEventListener('click', () => {
  addTask(taskInput.value);
  taskInput.value = '';
});

taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

loadTasks();
