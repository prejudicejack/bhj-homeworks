let taskInputField = document.getElementById('task__input');
let taskAddButton = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

taskInputField.value = '';

function addTask() {
  let taskText = taskInputField.value.trim();

  if(!taskText) {
    return
  }

  tasksList.innerHTML += `
    <div class='task'>
    <div class='task__title'>
     ${taskText}
    </div>
    <a href='#' class='task__remove'>&times;</a>
    </div>`

  taskInputField.value = '';
}

function removeTask(event) {
  let taskRemove = event.target.closest('.task');
  taskRemove.remove();
}

taskInputField.addEventListener('keyup', (event) => {
  if(event.key !== 'Enter') {
    return
  }
  addTask(); 
});

taskAddButton.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task__remove')) {
    removeTask(event)
  }
})