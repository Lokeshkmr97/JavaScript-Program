// Get DOM Elements
const taskInput = document.getElementById('inputtext');
const addBtn = document.getElementById('btn');
const taskList = document.getElementById('taskList');

// Event Listener for Add Button
addBtn.addEventListener('click', addTask);

// Function to Add a Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a list item (li)
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="AddTask">${taskText}</span>
        <button class="delete-btn">Delete</button><hr />
    `;

    // Append to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Add delete functionality
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
}
