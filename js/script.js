// ==================== ÉTAT ====================
const STORAGE_KEY = 'my-notage_tasks';
let tasks = loadTasks();
let currentFilter = 'all';

// ==================== ÉLÉMENTS DOM ====================
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');
const filterBtns = document.querySelectorAll('.filter-btn');

// ==================== PERSISTANCE ====================
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Erreur de chargement :', e);
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Erreur de sauvegarde :', e);
  }
}

// ==================== AFFICHAGE ====================
function getFilteredTasks() {
  if (currentFilter === 'active') return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return tasks;
}

function getEmptyMessage() {
  if (currentFilter === 'all') return 'Aucune tâche pour le moment 🎉';
  if (currentFilter === 'active') return 'Aucune tâche incomplète ✅';
  return 'Aucune tâche terminée';
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task-item' + (task.completed ? ' completed' : '');
  li.dataset.id = task.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.setAttribute('aria-label', `Terminer la tâche : ${task.text}`);
  checkbox.addEventListener('change', () => toggleTask(task.id));

  const span = document.createElement('span');
  span.textContent = task.text;

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'delete-btn';
  delBtn.textContent = '×';
  delBtn.title = 'Supprimer';
  delBtn.setAttribute('aria-label', `Supprimer la tâche : ${task.text}`);
  delBtn.addEventListener('click', () => deleteTask(task.id));

  li.append(checkbox, span, delBtn);
  return li;
}

function render() {
  taskList.innerHTML = '';

  const filtered = getFilteredTasks();

  if (filtered.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty-message';
    li.textContent = getEmptyMessage();
    taskList.appendChild(li);
  } else {
    filtered.forEach(task => taskList.appendChild(createTaskElement(task)));
  }

  const remaining = tasks.filter(t => !t.completed).length;
  counter.textContent = remaining > 0
    ? `${remaining} tâche${remaining > 1 ? 's' : ''} incomplète${remaining > 1 ? 's' : ''}`
    : 'Toutes les tâches sont terminées ✅';
}

// ==================== ACTIONS ====================
function addTask() {
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    return;
  }

  tasks.push({
    id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
    text,
    completed: false,
    createdAt: new Date().toISOString()
  });

  taskInput.value = '';
  taskInput.focus();
  saveTasks();
  render();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    render();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  render();
}

// ==================== FOOTER ====================
function initFooter() {
  document.getElementById('footerName').textContent = CONFIG.name;
  document.getElementById('footerYear').textContent = `© ${new Date().getFullYear()}`;

  const link = document.getElementById('githubLink');
  link.href = CONFIG.github;
  link.querySelector('span').textContent = CONFIG.githubLabel;
  link.title = `Visiter le GitHub de ${CONFIG.name}`;
}

// ==================== ÉVÉNEMENTS ====================
// Le formulaire gère à la fois le clic sur « Ajouter » et la touche Entrée.
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render();
  });
});

// ==================== INITIALISATION ====================
initFooter();
render();
