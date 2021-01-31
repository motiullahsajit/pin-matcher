// function getPin() {
//     document.getElementById('pinInput').value = Math.round(Math.random() * 10000);
// }
function getPin() {
    // const random = Math.random() * 10000;
    // const pin = (random + '').split('.')[0];
    const random = Math.round(Math.random() * 10000);
    const pin = (random + '');
    if (pin.length === 4) {
        return pin;
    }
    else {
        // console.log('shorter pin', pin);
        return getPin();
    }
}

//display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}
//handle calculator button event
const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //handle backspace
        //handle clear
        // console.log('handle non digit');
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
        if (digit === '<') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

//verify pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        /*const correct = document.getElementById('correct-pin');
        correct.style.display = "block";
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = "none";*/
        displayMatchResult("block", "none");
        document.getElementById('pin').value = "";
        document.getElementById('typed-pin').value = '';
    }
    else {
        /*const correct = document.getElementById('correct-pin');
        correct.style.display = "none";
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = "block";*/
        displayMatchResult("none", "block");
    }
}
//display match result
function displayMatchResult(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}