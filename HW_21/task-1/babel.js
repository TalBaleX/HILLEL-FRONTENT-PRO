"use strict";

var formAdd = $(".form.js--form");
var tasks = $(".js--todos-wrapper");
var modal = $("#exampleModal");
var tasksArr = [];
if (localStorage.getItem("myTasks")) {
  tasksArr = JSON.parse(localStorage.getItem("myTasks"));
  tasksArr.forEach(function (task) {
    newTask(task.name, task.checked);
  });
}
function newTask(taskTextArg) {
  var isChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var task = $("<li>").addClass("todo-item").toggleClass("todo-item--checked", isChecked).attr("data-bs-toggle", "modal").attr("data-bs-target", "#exampleModal").appendTo(tasks);
  $("<input>").attr("type", "checkbox").prop("checked", isChecked).appendTo(task);
  $("<span>").addClass("todo-item__description").text(taskTextArg).appendTo(task);
  $("<button>").addClass("todo-item__delete").text("Видалити").appendTo(task);
}
formAdd.on("submit", function (e) {
  e.preventDefault();
  var taskInput = formAdd.find(":text");
  var taskValue = taskInput.val().trim();
  if (taskValue) {
    newTask(taskValue);
    tasksArr.push({
      name: taskValue,
      checked: false
    });
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    taskInput.val("");
  }
});
tasks.on("click", function (e) {
  var target = $(e.target);
  if (target.hasClass("todo-item__delete")) {
    var taskIndex = target.closest("li").index();
    tasksArr.splice(taskIndex, 1);
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
    target.closest("li").remove();
  } else if (target.is(":checkbox")) {
    var task = target.closest("li");
    var _taskIndex = task.index();
    task.toggleClass("todo-item--checked");
    tasksArr[_taskIndex].checked = target.prop("checked");
    localStorage.setItem("myTasks", JSON.stringify(tasksArr));
  } else if (target.hasClass("todo-item__description")) {
    var modalText = $(".modal-body");
    modalText.text(target.text());
  }
});
$(window).on("storage", function () {
  tasks.empty();
  tasksArr = JSON.parse(localStorage.getItem("myTasks")) || [];
  tasksArr.forEach(function (task) {
    newTask(task.name, task.checked);
  });
});
