const formAdd = document.querySelector(".form.js--form");
const tasks = document.querySelector(".js--todos-wrapper");
let tasksArr = [];

if (localStorage.getItem("myTasks")) {
  tasksArr = JSON.parse(localStorage.getItem("myTasks"));
  tasksArr.forEach((task) => {
    newTask(task);
  });
}

function newTask(taskTextArg) {
  const task = document.createElement("li");
  task.className = "todo-item";
  tasks.append(task);
  const completeTask = document.createElement("input");
  completeTask.type = "checkbox";
  task.append(completeTask);
  const taskText = document.createElement("span");
  taskText.className = "todo-item__description";
  taskText.innerText = taskTextArg;
  task.append(taskText);
  const delButton = document.createElement("button");
  delButton.className = "todo-item__delete";
  delButton.innerText = "Видалити";
  task.append(delButton);
}

formAdd.elements[1].addEventListener("click", (e) => {
  e.preventDefault();
  if (formAdd.elements[0].value != false) {
    newTask(formAdd.firstElementChild.value);
    tasksArr.push(formAdd.firstElementChild.value);
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    formAdd.firstElementChild.value = "";
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.className == "todo-item__delete") {
    tasksArr.splice(
      [...e.currentTarget.children].indexOf(e.target.parentElement),
      1
    );
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    e.target.parentElement.remove();
  } else if (e.target.type == "checkbox") {
    e.target.parentElement.classList.toggle("todo-item--checked");
  }
});
window.addEventListener("storage", (e) => {
  while (tasks.firstChild) {
    tasks.firstChild.remove();
  }
  tasksArr = JSON.parse(localStorage.getItem("myTasks"));
  if (tasksArr) {
    tasksArr.forEach((task) => {
      newTask(task);
    });
  }
});
