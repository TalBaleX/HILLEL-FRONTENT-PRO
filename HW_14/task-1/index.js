"use strict";

const image = document.querySelector("#image");
let picture = 1;
let lastPicture = 3;

for (let i = 0; i < lastPicture; i++) {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.dataset.id = i + 1;
  image.parentElement.nextElementSibling.append(dot);
}

function prevImage() {
  if (picture != 1) {
    picture--;
    showImage();
  }
}

function nextImage() {
  if (picture != lastPicture) {
    picture++;
    showImage();
  }
}

function showImage(number = picture) {
  checkConditions();
  image.style.backgroundImage = `url('images/${number}.jpg')`;
}

function checkConditions() {
  image.previousElementSibling.style.opacity =
    image.nextElementSibling.style.opacity = 1;
  for (let i = 0; i < lastPicture; i++) {
    image.parentElement.nextElementSibling.children[i].classList.remove(
      "active"
    );
  }

  if (picture == 1) {
    image.previousElementSibling.style.opacity = 0;
  }
  if (picture == lastPicture) {
    image.nextElementSibling.style.opacity = 0;
  }
  image.parentElement.nextElementSibling.children[picture - 1].classList.add(
    "active"
  );
}

// dots control

image.parentElement.nextElementSibling.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    picture = e.target.dataset.id;
    showImage();
  }
});

showImage(); // showing of first image
