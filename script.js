const exampleText = document.getElementById('exampleText').innerText;
const inputText = document.getElementById('inputText');
const errorsElement = document.getElementById('errors');
const timeElement = document.getElementById('time');
const restartBtn = document.getElementById('restartBtn');
let startTime, timerInterval;

inputText.addEventListener('input', checkInput);
restartBtn.addEventListener('click', restart);

function checkInput() {
    const input = inputText.value;
    let errors = 0;

    // Start timer on first input
    if (input.length === 1 && !startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTime, 1000);
    }

    // Compare input to the example text
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== exampleText[i]) {
            errors++;
        }
    }

    // Display errors
    errorsElement.innerText = errors;

    // Check if typing is complete
    if (input === exampleText) {
        clearInterval(timerInterval);
        inputText.disabled = true; // Disable typing when finished
        document.getElementById('results').style.display = 'block';
    }
}

function updateTime() {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    timeElement.innerText = elapsedTime;
}

function restart() {
    inputText.value = '';
    inputText.disabled = false;
    startTime = null;
    errorsElement.innerText = '0';
    timeElement.innerText = '0';
    document.getElementById('results').style.display = 'none';
    clearInterval(timerInterval);
}
