const num = Math.floor(Math.random() * 3) + 1;
const image = document.createElement("img");
image.src = `images/${num}.jpg`;
document.body.append(image);
