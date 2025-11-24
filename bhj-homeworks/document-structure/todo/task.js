const tasksInput = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function addTask(taskTitle) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitleElement = document.createElement('div');
    taskTitleElement.classList.add('task__title');
    taskTitleElement.textContent = taskTitle;

    const taskRemoveLink = document.createElement('a');
    taskRemoveLink.classList.add('task__remove');
    taskRemoveLink.href = '#';
    taskRemoveLink.textContent = '×';
    
    taskRemoveLink.addEventListener('click', function(event) {
        event.preventDefault();
        tasksList.removeChild(task); 
    });
    
    task.appendChild(taskTitleElement);
    task.appendChild(taskRemoveLink);
    tasksList.appendChild(task);
}

function handleAddTask(event) {
    event.preventDefault();
    const taskTitle = tasksInput.value.trim();

    if (taskTitle) {
        addTask(taskTitle);
        tasksInput.value = '';
    }
}

tasksInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleAddTask(event);
    }
});

tasksAddButton.addEventListener('click', handleAddTask);