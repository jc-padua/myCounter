const decrementBtn = document.querySelector('.decrement');
const resetBtn = document.querySelector('.reset');
const incrementBtn = document.querySelector('.increment');
const startBtn = document.querySelector('.start');
const counterNum = document.querySelector('.counter');

const counterNav = document.querySelector('.counter-navigation');

// let value = 0;
let value = localStorage.getItem('value')

function resetVal() {
    value = 0;
    counterNum.textContent = value;
    localStorage.setItem('value', value);

}

incrementBtn.addEventListener('click', () => {
    value++;
    counterNum.textContent = value;
    localStorage.setItem('value', value);

})

resetBtn.addEventListener('click', resetVal)

decrementBtn.addEventListener('click', () => {
    value--;
    if (value <= 0) {
        resetVal();
    }
    counterNum.textContent = value;
    localStorage.setItem('value', value);

})

startBtn.addEventListener('click', () => {
    counterNav.classList.toggle('show');
})

// const value = localStorage.getItem('value');
counterNum.textContent = value;