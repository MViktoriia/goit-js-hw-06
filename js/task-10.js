const namberInputEl = document.querySelector("input[type='number']");
const dataCreateButtonEl = document.querySelector("button[data-create]") 
const dataDestroyButtonEl = document.querySelector("button[data-destroy]") 
const boxesEl = document.querySelector("div#boxes");


dataCreateButtonEl.addEventListener("click", onDataCreateButtonClickHandler);
dataDestroyButtonEl.addEventListener("click", onDataDestroyButtonClickHandler);


function onDataCreateButtonClickHandler() {
  createBoxes(namberInputEl.value);
  
}
function onDataDestroyButtonClickHandler() {
  destroyBoxes();
  
}


function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    const boxElSize = (30 + 10 * i) + 'px';
    boxEl.style.width = boxElSize;
    boxEl.style.height = boxElSize;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxEl);
  }
  
}
function destroyBoxes(boxes) {
  boxesEl.innerHTML = "";
 
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
