const namberInputEl = document.querySelector("input[type='number']");
console.log(namberInputEl);
const dataCreateButtonEl = document.querySelector("button[data-create]") 
console.log(dataCreateButtonEl);
const dataDestroyButtonEl = document.querySelector("button[data-destroy]") 
console.log(dataDestroyButtonEl);
const boxesEl = document.querySelector("div#boxes");
console.log(boxesEl);

dataCreateButtonEl.addEventListener("click", onDataCreateButtonClickHandler);
dataDestroyButtonEl.addEventListener("click", onDataDestroyButtonClickHandler);

function onDataCreateButtonClickHandler(event) {
  createBoxes(namberInputEl.value);
  
}

function onDataDestroyButtonClickHandler() {
  destroyBoxes(boxesEl.children);
  console.log(boxesEl.children);

}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    console.log(boxEl);
    const boxElSize = (30 + 10 * i) + 'px';
    console.log(boxElSize);
    boxEl.style.width = boxElSize;
    boxEl.style.height = boxElSize;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxEl);
  }
  
}

function destroyBoxes(boxes) {

  // for let box of boxes {
  //   box.remove();
  // }
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
