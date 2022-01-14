const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", OnInputBlurHandler);

function OnInputBlurHandler(event) {
    if (event.currentTarget.value.length == validationInputEl.dataset.length) {
        validationInputEl.classList.remove("invalid");
        validationInputEl.classList.add("valid");
    } else {
        validationInputEl.classList.add("invalid");
        validationInputEl.classList.remove("valid");
    }
   
}