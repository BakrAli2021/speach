let select = document.querySelector('.select select');
selectoptions();

function selectoptions() {
    var voicelist = responsiveVoice.getVoices();
    voicelist.forEach(element => {
        select.innerHTML += `
        <option value="${element.name}">${element.name}</option>
        `;
    });
}
let textarea = document.querySelector('#txt'),
    voiceBtn = document.querySelector('.box .btn');
voiceBtn.addEventListener('click', function() {
    let text = textarea.value;
    if (text !== "") {
        responsiveVoice.speak(text);
        voiceBtn.classList.add('active');

        setTimeout(() => {
            voiceBtn.classList.remove('active');
        }, 3000);

    } else {
        alert("Speak Or Write Please");
    }


});
select.addEventListener('change', function() {
    responsiveVoice.setDefaultVoice(select.value);
});


let btn = document.querySelector('.inputbx .icon'),
    searchbtn = document.querySelector('.search'),
    icon = document.querySelector('.inputbx .icon i');
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("NOt Supported with this broweser please change to Chrome");
} else {
    let recognition = new SpeechRecognition();
    btn.addEventListener("click", () => {
        btn.classList.add('active');

        // icon.classList.toggle('fa-microphone-slash');
        if (icon.classList.contains('fa-microphone')) {

            recognition.start()

        } else {

            recognition.stop();
        }

    });
    recognition.onstart = function() {
        icon.classList.replace('fa-microphone', 'fa-microphone-slash');

    }
    recognition.onend = function() {
        icon.classList.replace('fa-microphone-slash', 'fa-microphone');
        btn.classList.remove('active');

    }
    recognition.addEventListener('result', function(event) {

        let transcript = event.results[0][0].transcript;
        textarea.value = transcript
    })
}
searchbtn.addEventListener("click", () => {
    search(textarea.value);
    textarea.value = "";
});

function search(searchvalue) {
    window.location.href = `https://www.google.com/search?q=${searchvalue}`;
}
