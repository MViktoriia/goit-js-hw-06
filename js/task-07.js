const fontSizeControlInputEl = document.getElementById("font-size-control");
const spanTextEl = document.getElementById("text");

fontSizeControlInputEl.addEventListener("input", OnInputHandler);

function OnInputHandler(event) {
    spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
    
}