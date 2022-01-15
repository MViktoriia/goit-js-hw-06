
const formEl = document.querySelector(".login-form");
const submitBtn = document.querySelector('button[type="submit"]');

formEl.addEventListener('submit', OnSubmitBtnHandler);

function OnSubmitBtnHandler(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        event.currentTarget.reset();
        return alert("Please, fill in all the form filds!");
        
    }

    const form = {};
    form.email = email.value;
    form.password = password.value;

    console.log(form);
    event.currentTarget.reset();
    
}