const submitBtn = document.getElementById('submit');
const enteredText = document.getElementById('textarea');
const text = document.getElementById('words');
const resultPage = document.getElementById('resultPage');
const Accuracy = document.getElementById('Accuracy');
const WPMDisplay = document.getElementById('wpmResult');
const textmsgRedo = document.querySelector('.btn span');
const keys = document.querySelectorAll('.keyboard span');

let startTime;
let isStarted = false;

enteredText.addEventListener('input', () => {
    if (!isStarted) {
        startTime = new Date();
        isStarted = true;
    }
});

document.addEventListener('keydown', (e) => {
    // e.preventDefault(); so they will not just copy and paste
    if (e.key === "Enter") {
        e.preventDefault();
        if (submitBtn.innerHTML === "Submit Test") {
            submitTest();
        } else if (submitBtn.innerHTML === "Redo Test") {
            redoTest();
        }
    }else {
      const key = Array.from(keys).find((k) => k.dataset.key === e.key);
      if (key) {
    key.style.transform = 'scale(0.9)';
    setTimeout(() => { key.style.transform = ''; }, 2000);
}
    }
});

submitBtn.addEventListener('click', () => {
    if (submitBtn.innerHTML === "Submit Test") {
        submitTest();
    } else {
        redoTest();
    }
});

function submitTest() {
    const expected = text.innerText.trim();
    const actual = enteredText.value.trim();

    // Calculate time
    const endTime = new Date();
    const timeTakenInSeconds = (endTime - startTime) / 1000;
    const timeInMinutes = timeTakenInSeconds / 60;

    // WPM
    const wordsTyped = actual.length / 5;
    const wpm = Math.round(wordsTyped / timeInMinutes);

    // Accuracy
    let correctChars = 0;
    const minLength = Math.min(expected.length, actual.length);

    for (let i = 0; i < minLength; i++) {
        if (expected[i] === actual[i]) {
            correctChars++;
        }
    }

    const accuracy = Math.round((correctChars / expected.length) * 100);
    const finalAccuracy = Math.max(50, accuracy); // Ensure minimum 50%

    // Show results
    submitBtn.innerHTML = "Redo Test";
    enteredText.style.display = 'none';
    text.style.display = 'none';
    resultPage.style.display = 'flex';
    Accuracy.innerHTML = finalAccuracy + "%";
    WPMDisplay.innerHTML = wpm;
    textmsgRedo.innerHTML = " Click Enter button to Redo test.";
}

function redoTest() {
    submitBtn.innerHTML = "Submit Test";
    enteredText.style.display = '';
    text.style.display = '';
    resultPage.style.display = 'none';
    enteredText.value = "";
    WPMDisplay.innerHTML = "";
    Accuracy.innerHTML = "";
    textmsgRedo.innerHTML = " Click Enter button to submit test.";
    isStarted = false;
}
