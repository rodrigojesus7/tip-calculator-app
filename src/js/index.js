const tipButtons = document.querySelectorAll('.tip-section__buttons-container__buttons__button')
const resetButton = document.querySelector('.result-section__button')
const billInput = document.querySelector('#bill-input')
const peopleInput = document.querySelector('#people-number-input')
const zeroErrorText = document.querySelector('#zero-error')
const negativeErrorText = document.querySelector('#negative-error')

peopleInput.addEventListener('input', function () {
    let valueAsNumber = Number(peopleInput.value)

    if (valueAsNumber === 0) {
        zeroErrorText.classList.remove('hidden')
    } else {
        zeroErrorText.classList.add('hidden')
    }

    if (valueAsNumber < 0) {
        negativeErrorText.classList.remove('hidden')
    } else {
        negativeErrorText.classList.add('hidden')
    }
})
