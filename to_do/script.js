const tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Add the task to the array
        const task = {
            id: Date.now(),
            text:taskText,
            name: task,
            completed: false,
            timestamp: new Date().toLocaleString()
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}


function toggleComplete(taskId) {
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    renderTasks();
    
}
function editTask(taskId, newText) {
    const task = tasks.find(task => task.id === taskId);
    task.text = newText;
    renderTasks();
    
}
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id === taskId);
        
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



