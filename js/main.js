// Variables 
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const textBtn = document.querySelector('#text-btn');

// Evventos
btn.addEventListener('click', ejecutarSpeechAPI);


// Funciones
function ejecutarSpeechAPI() {

    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';

    recognition.start();

    recognition.onstart = () => {
        textBtn.innerHTML = 'Escuchando...';
        console.log('escuchando');
    }

    recognition.onspeechend = () => {
        textBtn.innerHTML = 'Presiona para hablar';
        recognition.stop();
    }

    recognition.onresult = (e) => {
        const textHablado = e.results[0][0].transcript
        text.innerHTML = textHablado;
    }

}