const changeColorBtnEL = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

  
changeColorBtnEL.addEventListener("click", onChangeColorBtnClickHandler);

function onChangeColorBtnClickHandler(event) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
