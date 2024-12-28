const formAdd = document.querySelector(".form.js--form");
const tasks = document.querySelector(".js--todos-wrapper");
let tasksArr = [];

if (localStorage.getItem("myTasks")) {
  tasksArr = JSON.parse(localStorage.getItem("myTasks"));
  tasksArr.forEach((task) => {
    newTask(task.name, task.checked);
  });
}

function newTask(taskTextArg, isChecked = false) {
  const task = document.createElement("li");
  task.className = "todo-item";
  if (isChecked) task.classList.add("todo-item--checked");
  tasks.append(task);

  const completeTask = document.createElement("input");
  completeTask.type = "checkbox";
  completeTask.checked = isChecked;
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
    tasksArr.push({ name: formAdd.firstElementChild.value, checked: false });
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    formAdd.firstElementChild.value = "";
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.className == "todo-item__delete") {
    const taskIndex = [...e.currentTarget.children].indexOf(
      e.target.parentElement
    );
    tasksArr.splice(taskIndex, 1);
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    e.target.parentElement.remove();
  } else if (e.target.type == "checkbox") {
    const taskIndex = [...e.currentTarget.children].indexOf(
      e.target.parentElement
    );
    e.target.parentElement.classList.toggle("todo-item--checked");
    tasksArr[taskIndex].checked = e.target.checked;
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
  }
});

window.addEventListener("storage", (e) => {
  while (tasks.firstChild) {
    tasks.firstChild.remove();
  }
  tasksArr = JSON.parse(localStorage.getItem("myTasks"));
  if (tasksArr) {
    tasksArr.forEach((task) => {
      newTask(task.name, task.checked);
    });
  }
});
