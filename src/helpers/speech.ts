export const playAudio = (audioSrc: string) => {
    var audio = new Audio(audioSrc);
    audio.play();
};
export const speech = (text: string) => {
    var synth = window.speechSynthesis;
    var msg = new SpeechSynthesisUtterance();
    // var voices = synth.getVoices();
    // voices.forEach((voice) => {console.log(voice.name, voice.default ? voice.default :'');})
    // msg.voice = voices[1];
    msg.text = text;
    // msg.volume = 1; // From 0 to 1
    // msg.rate = 1; // From 0.1 to 10
    // msg.pitch = 0.1; // From 0 to 2
    msg.lang = 'pl'; //można używać zamiast voices
    synth.cancel();
    synth.speak(msg);
};
