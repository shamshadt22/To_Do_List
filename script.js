var tasks = [];

function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
  } else {
    alert("Please enter a task.");
  }
}

function renderTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = tasks[i] + " <button onclick='deleteTask(" + i + ")'>X</button>";
    list.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Submit on Enter key
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // prevent form submission if inside a <form>
    addTask();
  }
});

