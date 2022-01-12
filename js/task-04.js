const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.getElementById('value');
console.dir(valueEl);

const counter = {
    counterValue: 0,
    OnIncrementButtonClik() {
        this.counterValue += 1;
        
        
    },
    OnDecrementButtonClik() {
        this.counterValue -= 1;
        
    },
};


incrementBtn.addEventListener('click', function () {
    console.log('Klick on increment');
    counter.OnIncrementButtonClik();
    valueEl.textContent = counter.counterValue;

});
decrementBtn.addEventListener('click', function () {
    console.log('Klick on decrement');
    counter.OnDecrementButtonClik();
    valueEl.textContent = counter.counterValue;

});


