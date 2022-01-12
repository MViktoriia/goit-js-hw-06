const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;
console.log(counterValue);

const OnIncrementButtonClik = (event) => {
     counterValue = counterValue + 1;
        
}; 

const OnDecrementButtonClik = () => {
    counterValue = counterValue - 1;
};

incrementBtn.addEventListener('click', OnIncrementButtonClik);
decrementBtn.addEventListener('click', OnDecrementButtonClik);


