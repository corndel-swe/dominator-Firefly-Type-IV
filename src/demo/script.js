// TODO: get a reference to the .box element and log it to the console
const box = document.getElementsByClassName('box')[0]
console.log(document)
console.dir(document)

// TODO: add an event listener to the .box element that toggles the .left class
box.addEventListener('click', () => {
    box.classList.toggle('.left');
})
// TODO: get a reference to #button, #txt and #output
const btn = document.getElementById('button'),
    txt = document.getElementById('txt'),
    out = document.getElementById('output')

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt
btn.addEventListener('click', () => {
    return out.innerHTML = txt.value.toLowerCase()
})