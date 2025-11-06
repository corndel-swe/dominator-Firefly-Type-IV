// TODO: add an event listener to the .box element that toggles the .red class
const box = document.querySelectorAll('.box')[0];

// box.onclick = function() {
//     box.classList.toggle('red')
// }
function handleActivation() {
    box.classList.toggle('red')
}
box.addEventListener('click', handleActivation)
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        handleActivation()
    }
})