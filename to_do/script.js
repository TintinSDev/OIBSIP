const tasks = [];

function addTask() {
    const taskInput = document.getElementById("new-task-input");
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}