
var startButton = document.getElementById('start');
var resultElement = document.getElementById('result');

var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

startButton.addEventListener('click', () => { recognition.start(); });
recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    resultElement.textContent = result;
});