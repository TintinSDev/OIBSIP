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