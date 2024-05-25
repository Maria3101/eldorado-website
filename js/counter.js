



let counter;
 
const counterValue = document.getElementById('one');
const incrementBtn = document.getElementById('plus');
const decrementBtn = document.getElementById('minus');
const resetBtn = document.querySelector('#reset');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
 
 //To reset the counter to zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}
    