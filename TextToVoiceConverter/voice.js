let Voices = document.querySelector("select");
let voiceButton = document.querySelector("button");
let textArea = document.querySelector("textarea");
let speech = new SpeechSynthesisUtterance();

console.log(textArea);
voiceButton.addEventListener("click", () => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
    
});


window.speechSynthesis.onvoiceschanged = () => {
    let voices = window.speechSynthesis.getVoices();
    console.log(voices);
    voices.forEach((voice) => {
        let option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        Voices.appendChild(option);
    });
};

Voices.addEventListener("change", () => {
    let selectedVoice = Voices.value;
    let voices = window.speechSynthesis.getVoices();
    voices.forEach((voice) => {
        if (voice.name === selectedVoice) {
            speech.voice = voice;
            console.log(voice);
        }
    });
} );