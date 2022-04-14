const btn = document.querySelector(".button-primary");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol = `rgb(${random(255)}, ${random(255)} , ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  console.log(rndCol);
};
