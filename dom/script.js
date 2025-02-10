// alert('Are You agree to our privacy & policy?')

const body = document.querySelector('body')
const indigoButton = document.querySelector('.btn-indigo')
const pinkButton = document.querySelector('.btn-pink')
const yellowButton = document.querySelector('.btn-yellow')
const greenButton = document.querySelector('.btn-green')
const purpleButton = document.querySelector('.btn-purple')

purpleButton.addEventListener('click', () => {
    body.style.backgroundColor = 'purple'
})

greenButton.addEventListener('click', function () {
    body.style.backgroundColor = 'green'
})

indigoButton.addEventListener('click', function () {
    body.style.backgroundColor = 'indigo'
})
pinkButton.addEventListener('click', function () {
    body.style.backgroundColor = 'pink'
})
yellowButton.addEventListener('click', function () {
    body.style.backgroundColor = 'yellow'
})