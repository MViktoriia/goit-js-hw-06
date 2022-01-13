const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");


textInput.addEventListener('input',OnInputHandler);

function OnInputHandler(event) {
    if (event.currentTarget.value === '') {
        output.textContent = "Anonymous"
    } else {
        output.textContent = event.currentTarget.value;
        console.dir(event.currentTarget)
    }
}
