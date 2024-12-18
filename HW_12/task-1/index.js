let promptLink = "";
let $promptButton = document.querySelector("#prompt");
let $redirectButton = document.querySelector("#redirect");

$promptButton.onclick = () => {
  promptLink = prompt("Введіть адрес переходу");
};
$redirectButton.onclick = () => {
  window.location.href = promptLink;
};
