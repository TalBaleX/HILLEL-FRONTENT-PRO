const tasks = document.querySelector(".tasks ul");
const button = document.querySelector(".add-button");

tasks.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentElement.remove();
  }
});

button.addEventListener("click", (e) => {
  let inputVal = e.target.previousSibling.previousSibling.value;
  if (inputVal != false) {
    let task = document.createElement("li");
    let delBut = document.createElement("button");
    task.innerText = inputVal;
    delBut.innerText = "Видалити";
    delBut.className = "delete";
    task.append(delBut);
    tasks.append(task);
  }
});
