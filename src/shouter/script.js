// TODO: get a reference to the #button and #txt and #output
// TODO: add an event listener to the #button that changes the text in #output to the uppercase value of #txt
const btn = document.querySelector('#btn'),
        out = document.querySelector('#output'),
        txt = document.querySelector('#txt');
function toUpperCase() {
    return out.innerHTML = txt.value.toUpperCase();
}
btn.addEventListener('click', toUpperCase)