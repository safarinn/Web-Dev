const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Create elements
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Checkbox event (mark done)
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            span.classList.add("done");
        } else {
            span.classList.remove("done");
        }
    });

    // Delete event
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Clear input
    taskInput.value = "";
}