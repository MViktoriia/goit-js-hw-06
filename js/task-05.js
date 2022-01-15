const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


textInput.addEventListener('input',OnInputHandler);

// function OnInputHandler(event) {
//     if (event.currentTarget.value === '') {
//        return output.textContent = "Anonymous"
//     } else {
//        return output.textContent = event.currentTarget.value;
        
//     }
// }

function OnInputHandler(event) {
    event.currentTarget.value === "" ? output.textContent = "Anonymous" : output.textContent = event.currentTarget.value;
}
