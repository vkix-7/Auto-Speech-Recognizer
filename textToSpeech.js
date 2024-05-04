const textInput = document.getElementById('textInput');
const speakButton = document.getElementById('speakButton');
const synth = window.speechSynthesis;

speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        // Set voice (optional)
        // utterance.voice = synth.getVoices()[0];
        synth.speak(utterance);
    }
});
          