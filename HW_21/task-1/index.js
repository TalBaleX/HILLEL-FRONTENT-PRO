const formAdd = $(".form.js--form");
const tasks = $(".js--todos-wrapper");
const modal = $("#exampleModal");
let tasksArr = [];

if (localStorage.getItem("myTasks")) {
  tasksArr = JSON.parse(localStorage.getItem("myTasks"));
  tasksArr.forEach((task) => {
    newTask(task.name, task.checked);
  });
}

function newTask(taskTextArg, isChecked = false) {
  const task = $("<li>")
    .addClass("todo-item")
    .toggleClass("todo-item--checked", isChecked)
    .attr("data-bs-toggle", "modal")
    .attr("data-bs-target", "#exampleModal")
    .appendTo(tasks);

  $("<input>")
    .attr("type", "checkbox")
    .prop("checked", isChecked)
    .appendTo(task);

  $("<span>")
    .addClass("todo-item__description")
    .text(taskTextArg)
    .appendTo(task);

  $("<button>").addClass("todo-item__delete").text("Видалити").appendTo(task);
}

formAdd.on("submit", function (e) {
  e.preventDefault();
  const taskInput = formAdd.find(":text");
  const taskValue = taskInput.val().trim();

  if (taskValue) {
    newTask(taskValue);
    tasksArr.push({ name: taskValue, checked: false });
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    taskInput.val("");
  }
});

tasks.on("click", function (e) {
  const target = $(e.target);

  if (target.hasClass("todo-item__delete")) {
    const taskIndex = target.closest("li").index();
    tasksArr.splice(taskIndex, 1);
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    target.closest("li").remove();
  } else if (target.is(":checkbox")) {
    const task = target.closest("li");
    const taskIndex = task.index();
    task.toggleClass("todo-item--checked");
    tasksArr[taskIndex].checked = target.prop("checked");
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
  } else if (target.hasClass("todo-item__description")) {
    const modalText = $(".modal-body");
    modalText.text(target.text());
  }
});

$(window).on("storage", function () {
  tasks.empty();
  tasksArr = JSON.parse(localStorage.getItem("myTasks")) || [];
  tasksArr.forEach((task) => {
    newTask(task.name, task.checked);
  });
});
