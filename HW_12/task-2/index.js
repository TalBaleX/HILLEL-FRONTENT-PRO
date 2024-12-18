const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  alert(`Клікнуто на кнопці: ${e.target.innerText}`);
});
