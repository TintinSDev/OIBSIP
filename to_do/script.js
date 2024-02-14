let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Add the task to the array
        let task = {
            id: Date.now(),
            text:taskText,
            completed: false,
            timestamp: new Date().toLocaleString()
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}


function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
    
}
function editTask(id, newText) {
    const task = tasks.find(task => task.id === id);
    task.text = newText;
    renderTasks();
    
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id === id);
        
        renderTasks();
    
}
function renderTasks() {

    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${task.id})">${task.text}</span>
        <span>${task.timestamp}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    
    });
}



