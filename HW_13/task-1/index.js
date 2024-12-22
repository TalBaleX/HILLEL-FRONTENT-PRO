const form = document.querySelector("form");

form.addEventListener("change", (e) => {
  switch (e.target) {
    case form.elements[0]:
      form.elements[0].nextElementSibling.innerText = /\w+/.test(
        form.elements[0].value
      )
        ? ""
        : "Only text";
      break;
    case form.elements[1]:
      form.elements[1].nextElementSibling.innerText = /\w{5,}/.test(
        form.elements[1].value
      )
        ? ""
        : "At least 5 letters";
      break;
    case form.elements[2]:
      form.elements[2].nextElementSibling.innerText = /\+380[0-9\s]*/g.test(
        form.elements[2].value
      )
        ? ""
        : "Start with +380 (only numbers)";
      break;
    case form.elements[3]:
      form.elements[3].nextElementSibling.innerText = /@.*\./.test(
        form.elements[3].value
      )
        ? ""
        : "It must contain @ and .";
      break;
    default:
      console.log("abaumba");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < 4; i++) {
    console.log(form.elements[i].value);
  }
});
