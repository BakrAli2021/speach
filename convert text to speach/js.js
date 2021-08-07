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
    responsiveVoice.speak(text);
    voiceBtn.classList.add('active');
    setTimeout(() => {
        voiceBtn.classList.remove('active');
    }, 3000)
});
select.addEventListener('change', function() {
    responsiveVoice.setDefaultVoice(select.value);
});