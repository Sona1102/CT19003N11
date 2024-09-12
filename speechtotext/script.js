var startButton = document.getElementById('start');
var resultElement = document.getElementById('result');

var recognition = new webkitSpeechRecognition();

// Đặt ngôn ngữ là Tiếng Việt
recognition.lang = 'vi-VN';
recognition.interimResults = true;

startButton.addEventListener('click', () => { recognition.start(); });
recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    resultElement.textContent = result;
});
