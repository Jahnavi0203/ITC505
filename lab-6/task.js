// Function to navigate to different sections
function navigateTo(section) {
    alert(`Navigating to ${section}`);
}

// Function to add a task to the list
function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    // Add buttons to the list item
    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
}

// Event listener for form submission
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', handleFormSubmit);
