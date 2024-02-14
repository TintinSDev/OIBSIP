const tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        // Add the task to the array
        const task = {
            id: Date.now(),
            text:taskText,
            name: task,
            completed: false,
            timestamp: new Date().toLocaleString()
        };
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}

function renderTasks() {
    // const pendingTasks = tasks.filter(task => !task.completed);
    // const completedTasks = tasks.filter(task => task.completed);

    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";
}

function toggleCompleted(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}
function editTask(taskId, newText) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.text = newText;
        renderTasks();
    }
}
function deleteTask(taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

