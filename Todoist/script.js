function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        // Create a new task item
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        
        // Append the new task item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    var li = button.parentNode;
    var taskList = document.getElementById("task-list");
    taskList.removeChild(li);
}





