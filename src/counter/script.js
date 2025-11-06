// TODO: increment and decrement the count when the buttons are clicked
const decbtn = document.getElementById('decrement'),
        incbtn = document.querySelector('#increment'),
        count = document.getElementById('count')
        console.log(count.innerHTML)
decbtn.addEventListener('click', () => {
    let currentValue = parseInt(count.innerHTML)
    currentValue--
    count.innerHTML = currentValue
})
incbtn.addEventListener('click', () => {
    let currentValue = parseInt(count.innerHTML)
    currentValue++
    count.innerHTML = currentValue
})
