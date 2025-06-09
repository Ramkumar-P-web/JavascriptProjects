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
      if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
        return;
      }

      const keyElement = Array.from(keys).find(k => k.dataset.key === e.key.toLowerCase() || (e.key === ' ' && k.dataset.key === 'space'));
      if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 100);
      }
    });

    submitBtn.addEventListener('click', () => {
      if (submitBtn.textContent === "Submit Test") {
        submitTest();
      } else {
        redoTest();
      }
    });

    function submitTest() {
      const expected = text.innerText.trim();
      const actual = enteredText.value.trim();

      const endTime = new Date();
      const timeTakenInSeconds = (endTime - startTime) / 1000;
      const timeInMinutes = timeTakenInSeconds / 60;

      const wordsTyped = actual.length / 5;
      const wpm = Math.round(wordsTyped / timeInMinutes);

      let correctChars = 0;
      const minLength = Math.min(expected.length, actual.length);
      for (let i = 0; i < minLength; i++) {
        if (expected[i] === actual[i]) correctChars++;
      }

      const accuracy = Math.round((correctChars / expected.length) * 100);
      const finalAccuracy = Math.max(50, accuracy);

      submitBtn.textContent = "Redo Test";
      enteredText.style.display = 'none';
      text.style.display = 'none';
      resultPage.style.display = 'flex';
      Accuracy.textContent = `Accuracy: ${finalAccuracy}%`;
      WPMDisplay.textContent = `WPM: ${wpm}`;
      textmsgRedo.textContent = "Click Enter button to Redo test.";
    }

    function redoTest() {
      submitBtn.textContent = "Submit Test";
      enteredText.style.display = '';
      text.style.display = '';
      resultPage.style.display = 'none';
      enteredText.value = "";
      Accuracy.textContent = "";
      WPMDisplay.textContent = "";
      textmsgRedo.textContent = "Click Enter button to submit test.";
      isStarted = false;
      getParagraph();
    }

    let id = 0;

    async function getParagraph() {
        const data = await fetch('paragraphs.json');
        const parajson = await data.json();
        if(id < parajson.length){id++}else{id = 1};
        const paraObj = parajson.find((data)=> data.id === id);
        const para = paraObj.paragraph;
        document.getElementById('words').innerHTML = para;
    }