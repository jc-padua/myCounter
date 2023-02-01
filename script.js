const decrementBtn = document.querySelector('.decrement');
const resetBtn = document.querySelector('.reset');
const incrementBtn = document.querySelector('.increment');
const startBtn = document.querySelector('.start');
const counterNum = document.querySelector('.counter');

const counterNav = document.querySelector('.counter-navigation');

startBtn.addEventListener('click', () => {
    counterNav.classList.toggle('show');
})