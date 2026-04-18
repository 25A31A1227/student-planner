let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  let task = document.getElementById("taskInput").value;
  let time = document.getElementById("timeInput").value;

  if (task === "") return;

  tasks.push({ task, time });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${t.time} - ${t.task} 
    <button onclick="deleteTask(${index})">❌</button>`;
    list.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();
g
