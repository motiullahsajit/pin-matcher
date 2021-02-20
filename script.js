function getPin() {
    const random = Math.round(Math.random() * 10000);
    const pin = (random + '');
    if (pin.length === 4) {
        return pin;
    }
    else {
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
        if (digit === 'C') {
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
    if (document.getElementById('typed-pin').value == '' || document.getElementById('pin').value == '') {
        alert('please type or generate your pin first');
    }
    else {
        const pin = document.getElementById('pin').value;
        const typedPin = document.getElementById('typed-pin').value;
        if (pin === typedPin) {
            displayMatchResult("block", "none");
            document.getElementById('pin').value = "";
            document.getElementById('typed-pin').value = '';
        }
        else {
            displayMatchResult("none", "block");
            let count = Number(document.getElementById('try-count').textContent) - 1;
            if (count >= 1) {
                document.getElementById('try-count').textContent = count;
            }
            else {
                document.getElementById('try-again').style.display = 'block';
                document.getElementById('generate-pin').style.display = 'none';
            }
        }
    }
}
//display match result
function displayMatchResult(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}

//backspace
const backSpace = document.getElementById('back-space').addEventListener('click', function () {
    const currentInput = document.getElementById('typed-pin').value;
    document.getElementById('typed-pin').value = currentInput.substr(0, currentInput.length - 1);
})
