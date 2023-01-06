const mainContainer = document.querySelector('.first-card')
const thanksContainer = document.querySelector('.thank-you-card')
const submitButton = document.getElementById('btnSubmit')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn-rating')

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove('hidden')
    mainContainer.style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.value
    })
})