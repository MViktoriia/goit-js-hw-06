const fontSizeControlInputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

fontSizeControlInputEl.addEventListener("input", OnInputHandler);

function OnInputHandler(event) {
    spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
    
}