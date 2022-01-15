const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", OnInputBlurHandler);

function OnInputBlurHandler(event) {
    console.log(typeof validationInputEl.dataset.length)
    console.log(typeof event.currentTarget.value.length)
    if (event.currentTarget.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove("invalid");
        validationInputEl.classList.add("valid");
    } else {
        validationInputEl.classList.add("invalid");
        validationInputEl.classList.remove("valid");
    }
   
}